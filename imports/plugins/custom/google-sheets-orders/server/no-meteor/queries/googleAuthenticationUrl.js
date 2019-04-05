import { google } from "googleapis";
import Reaction from "/imports/plugins/core/core/server/Reaction";

const SCOPES = [
  "email",
  "profile",
  "https://www.googleapis.com/auth/spreadsheets"
];

/**
 * @name googleAuthenticationUrl
 * @method
 * @memberof google-sheets-orders/googleAuthenticationUrl
 * @summary generate a Google authentication URL
 * @param {Object} context - an object containing the per-request state
 * @param {Object} params - request parameters
 * @return {Promise<Object>} - Object containing the URL to redirect the user to
 */
export default async function googleAuthenticationUrl(context, params) {
  const { collections } = context;
  const { Packages } = collections;

  const packageInfo = await Packages.findOne({ name: "google-sheets-orders" });
  const redirectUrl = `${Reaction.absoluteUrl()}operator/google-sheets`;

  const client = new google.auth.OAuth2(packageInfo.settings.clientId, packageInfo.settings.clientSecret, redirectUrl);

  const url = client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return { url };
}
