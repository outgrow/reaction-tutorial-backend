import { google } from "googleapis";
import Reaction from "/imports/plugins/core/core/server/Reaction";

/**
 * @method setGoogleAuthenticationCode
 * @summary Updates the Google authentication token
 * @param {Object} input - the mutation's arguments
 * @param {Object} input.token - the new Google authentication token
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<String>} token
 */
export default async function setGoogleAuthenticationCode({ code }, context) {
  const { Packages } = context.collections;

  const packageInfo = await Packages.findOne({ name: "google-sheets-orders" });
  const redirectUrl = `${Reaction.absoluteUrl()}operator/google-sheets`;

  const client = new google.auth.OAuth2(packageInfo.settings.clientId, packageInfo.settings.clientSecret, redirectUrl);

  const { tokens } = await client.getToken(code);

  await Packages.updateOne({
    _id: packageInfo._id
  }, {
    $set: {
      "settings.token": tokens.access_token
    }
  });

  client.setCredentials(tokens);

  const peopleApi = google.people({ version: "v1", auth: client });

  const googleUser = await peopleApi.people.get({
    resourceName: "people/me",
    personFields: "emailAddresses,names"
  });

  console.log(googleUser);

  return tokens.access_token;
}
