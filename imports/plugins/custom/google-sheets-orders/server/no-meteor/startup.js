import Logger from "@reactioncommerce/logger";
import { google } from "googleapis";
import appEvents from "/imports/node-app/core/util/appEvents";
import Reaction from "/imports/plugins/core/core/server/Reaction";

export default function startup(context) {
  appEvents.on("afterOrderCreate", async ({ order }) => {
    Logger.info("Order created", order);

    const { settings } = await context.collections.Packages.findOne({ name: "google-sheets-orders" });

    const redirectUrl = `${Reaction.absoluteUrl()}operator/google-sheets`;

    const client = new google.auth.OAuth2(settings.clientId, settings.clientSecret, redirectUrl);

    client.setCredentials({
      refresh_token: settings.refreshToken
    });

    const sheets = google.sheets({
      version: "v4",
      auth: client
    });

    const res = await sheets.spreadsheets.values.append({
      spreadsheetId: settings.sheetId,
      range: "Sheet1",
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [
          [order.email, order.payments[0].amount, order.payments[0].currencyCode]
        ],
      },
    });

    Logger.info(res);
  });
}
