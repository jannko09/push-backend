import * as cdk from "aws-cdk-lib";
import Backend from "./stacks/backend";

const app = new cdk.App();
async function Main() {
  cdk.Tags.of(app).add("push", "push-backend");

  let env = {
    region: app.node.tryGetContext("region"),
    account: app.node.tryGetContext("account"),
  };
  console.log("CDK ENV", env);

  new Backend(app, "push-backend", { env });

  app.synth();
}

Main().catch((err) => {
  console.error(err);
  process.exit(1);
});
