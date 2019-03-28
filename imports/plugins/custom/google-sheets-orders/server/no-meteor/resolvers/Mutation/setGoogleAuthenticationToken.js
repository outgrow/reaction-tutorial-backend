/**
 * @name "Mutation.setGoogleAuthenticationToken"
 * @method
 * @memberof google-sheets-orders/GraphQL
 * @summary resolver for the setGoogleAuthenticationToken GraphQL mutation
 * @param {Object} parentResult - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {String} [args.input.clientMutationId] - An optional string identifying the mutation call
 * @param {String} [args.input.token] - The new Google authentication token to save
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} SetGoogleAuthenticationTokenPayload
 */
export default async function setGoogleAuthenticationToken(parentResult, { input }, context) {
  const { clientMutationId = null } = input;
  // TODO: decode incoming IDs here

  const token = await context.mutations.setGoogleAuthenticationToken(input, context);

  return {
    clientMutationId,
    token
  }
}
