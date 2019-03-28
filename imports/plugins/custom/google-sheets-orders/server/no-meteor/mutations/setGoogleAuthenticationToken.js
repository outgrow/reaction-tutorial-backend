/**
 * @method setGoogleAuthenticationToken
 * @summary Updates the Google authentication token
 * @param {Object} input - the mutation's arguments
 * @param {Object} input.token - the new Google authentication token
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<String>} token
 */
export default async function setGoogleAuthenticationToken({ token }, context) {
  const { Packages } = context.collections;

  const packageInfo = await Packages.findOne({ name: "google-sheets-orders" });

  await Packages.updateOne(packageInfo._id, {
    $set: {
      "settings.token": token
    }
  });

  return token;
}
