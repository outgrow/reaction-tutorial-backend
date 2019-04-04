/**
 * @name "Mutation.setGoogleAuthenticationCode"
 * @method
 * @memberof google-sheets-orders/GraphQL
 * @summary resolver for the setGoogleAuthenticationCode GraphQL mutation
 * @param {Object} parentResult - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {String} [args.input.clientMutationId] - An optional string identifying the mutation call
 * @param {String} [args.input.token] - The new Google authentication token to save
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} SetGoogleAuthenticationCodePayload
 */
export default async function setGoogleAuthenticationCode(parentResult, { input }, context) {
  const { clientMutationId = null } = input;
  // TODO: decode incoming IDs here

  const token = await context.mutations.setGoogleAuthenticationCode(input, context);

  return {
    clientMutationId,
    token
  }
}
