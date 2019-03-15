import Logger from "@reactioncommerce/logger";
import { decodeShopOpaqueId } from "@reactioncommerce/reaction-graphql-xforms/shop";

/**
 * @name "Query.filterTags"
 * @method
 * @memberof filters/GraphQL
 * @summary resolver for the filterTags GraphQL query
 * @param {Object} parentResult - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {String} args.shopId - The ID of shop to filter tags by
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} result from retailers query
 */
export default async function retailers(parentResult, args, context) {
  const dbShopId = decodeShopOpaqueId(args.shopId);

  Logger.info("opaque shopId", args.shopId);
  Logger.info("shopId", dbShopId);

  const filterTags = await context.queries.filterTags(context, dbShopId);

  return {
    filterTags
  };
}
