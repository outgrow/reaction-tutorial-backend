import Logger from "@reactioncommerce/logger";

/**
 * @name "Query.resolvers"
 * @method
 * @memberof retailers/GraphQL
 * @summary resolver for the retailers GraphQL query
 * @param {Object} parentResult - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} TODO
 */
export default async function retailers(parentResult, args, context) {
  // TODO: decode incoming IDs here
  Logger.info("context", context);
  return await context.queries.retailers(context);
}
