import Logger from "@reactioncommerce/logger";
import { google } from "googleapis";
import appEvents from "/imports/node-app/core/util/appEvents";

export default function startup() {
  appEvents.on("afterOrderCreate", ({ order }) => {
    Logger.info("Order created", order);
  });
}
