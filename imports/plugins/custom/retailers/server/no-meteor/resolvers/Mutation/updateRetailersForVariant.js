import Logger from "@reactioncommerce/logger";

/**
 * @name "Mutation.updateRetailersForVariant"
 * @method
 * @memberof retailers/GraphQL
 * @summary resolver for the updateRetailersForVariant GraphQL mutation
 * @param {Object} parentResult - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {String} [args.input.clientMutationId] - An optional string identifying the mutation call
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} UpdateRetailersForVariantPayload - We just re-send the input
 */
export default async function updateRetailersForVariant(parentResult, { input }, context) {
  const { clientMutationId = null } = input;
  // TODO: decode incoming IDs here

  await context.mutations.updateRetailersForVariant(input, context);

  return input;
}
