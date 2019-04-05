import Logger from "@reactioncommerce/logger";
import { google } from "googleapis";
import appEvents from "/imports/node-app/core/util/appEvents";

export default function startup(context) {
  appEvents.on("afterOrderCreate", async ({ order }) => {
    Logger.info("Order created", order);

    const { settings } = await context.collections.Packages.findOne({ name: "google-sheets-orders" });

    const client = await google.auth.getClient({
      credentials: {
        type: "service_account",
        project_id: settings.projectId,
        private_key_id: settings.privateKeyId,
        private_key: settings.privateKey,
        client_email: settings.clientEmail,
        client_id: settings.clientId,
        auth_uri: settings.authUri,
        token_uri: settings.tokenUri,
        auth_provider_x509_cert_url: settings.authProviderX509CertUrl,
        client_x509_cert_url: settings.clientX509CertUrl
      },
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
