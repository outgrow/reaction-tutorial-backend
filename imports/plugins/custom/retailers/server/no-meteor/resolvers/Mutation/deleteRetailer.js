/**
 * @name "Mutation.deleteRetailer"
 * @method
 * @memberof retailers/GraphQL
 * @summary resolver for the deleteRetailer GraphQL mutation
 * @param {Object} parentResult - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {String} [args.input.clientMutationId] - An optional string identifying the mutation call
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} UpdateRetailersPayload
 */
export default async function deleteRetailer(parentResult, { input }, context) {
  const { clientMutationId = null } = input;
  // TODO: decode incoming IDs here

  const retailers = await context.mutations.deleteRetailer(input, context);

  return {
    clientMutationId,
    retailers
  }
}
