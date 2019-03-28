import Logger from "@reactioncommerce/logger";
import Reaction from "/imports/plugins/core/core/server/Reaction";

Reaction.Endpoints.add("get", "/webhooks/google-sheets/authorize", (req, res) => {
  Logger.info("Google Auth code:", req.query.code);

  res.writeHead(301, { Location: "/operator/google-sheets/" });
  res.end();
});
