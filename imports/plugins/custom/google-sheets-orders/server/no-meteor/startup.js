import Logger from "@reactioncommerce/logger";
import { google } from "googleapis";
import appEvents from "/imports/node-app/core/util/appEvents";

export default function startup(context) {
  appEvents.on("afterOrderCreate", async ({ order }) => {
    Logger.info("Order created", order);

    const { settings } = await context.collections.Packages.findOne({ name: "google-sheets-orders" });

    const client = await google.auth.getClient({
      credentials: JSON.parse(settings.googleCredentialObject),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"]
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
