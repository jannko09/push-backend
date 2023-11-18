import { Route, RouteInput } from "../../openapi/route";
import { LambdaOpenApi } from "../../openapi";
import * as ApiTypes from "../../openapi/validation/types";
import * as ValidationFunctions from "../../openapi/validation";
import * as db from "../../db/pushes";

export class ApiRoute extends Route {
  constructor(api: LambdaOpenApi) {
    super(api);
  }

  async get(routeInput: RouteInput) {
    const pushes = db.getPushes();

    return {
      data: this.validate<ApiTypes.Pushes.GetPushes.ResponseBody>(
        "response",
        ValidationFunctions.Pushes_GetPushes_ResponseBody,
        pushes
      ),
    };
  }
}
