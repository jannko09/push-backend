import { Route, RouteInput } from "../../../openapi/route";
import { LambdaOpenApi } from "../../../openapi";
import * as ApiTypes from "../../../openapi/validation/types";
import * as ValidationFunctions from "../../../openapi/validation";
import * as db from "../../../db/pushes";
import { HandledError } from "../../../errors";

export class ApiRoute extends Route {
  constructor(api: LambdaOpenApi) {
    super(api);
  }

  async get(routeInput: RouteInput) {
    let params = this.validate<ApiTypes.Pushes.GetPushById.RequestParams>(
      "params",
      ValidationFunctions.Pushes_GetPushes_RequestParams,
      routeInput.params
    );

    const push = db.getPush(params.id);

    if (!push) throw new HandledError("Push not found");

    return {
      data: this.validate<ApiTypes.Pushes.GetPushById.ResponseBody>(
        "response",
        ValidationFunctions.Pushes_GetPushById_ResponseBody,
        push
      ),
    };
  }
}
