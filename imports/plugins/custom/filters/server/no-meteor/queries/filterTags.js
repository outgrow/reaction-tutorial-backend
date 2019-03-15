import Logger from "@reactioncommerce/logger";

/**
 * @method filterTags
 * @summary Returns all retailers
 * @param {Object} context - an object containing the per-request state
 * @param {String} shopId - the ID of shop to filter tags by
 * @return {Array} the list of retailers as an array
 */
export default async function(context, shopId) {
  const tagCollection = context.collections.Tags;

  Logger.info("tagCollection", tagCollection);

  const filterTags = await tagCollection
    .find({
      shopId,
      type: "filter"
    })
    .toArray();

  Logger.info("filterTags", filterTags);

  return filterTags;
}
