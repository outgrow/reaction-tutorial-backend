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

  const tags = await context.queries.filterTags(context, dbShopId);

  const topLevelTags = tags.filter((tag) => tag.isTopLevel);
  const subTags = tags.filter((tag) => !tag.isTopLevel && tag.relatedTagIds);

  const filterTags = topLevelTags.map((topLevelTag) => ({
    tag: topLevelTag,
    subTags: subTags.filter(({ relatedTagIds }) => relatedTagIds.includes(topLevelTag._id))
  }));

  return {
    filterTags
  };
}
