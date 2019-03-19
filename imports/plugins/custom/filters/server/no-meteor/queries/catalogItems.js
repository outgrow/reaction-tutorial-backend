import ReactionError from "@reactioncommerce/reaction-error";

/**
 * @name catalogItems
 * @method
 * @memberof Catalog/NoMeteorQueries
 * @summary query the Catalog by shop ID and/or tag ID
 * @param {Object} context - an object containing the per-request state
 * @param {Object} params - request parameters
 * @param {String[]} [params.shopIds] - Shop IDs to include (OR)
 * @param {String[]} [params.tagIds] - Tag IDs to include (OR)
 * @param {String[]} [params.filterTagIds] - Filter tag IDs to include (OR)
 * @return {Promise<MongoCursor>} - A MongoDB cursor for the proper query
 */
export default async function catalogItems(context, { shopIds, tagIds, filterTagIds } = {}) {
  const { collections } = context;
  const { Catalog } = collections;

  if ((!shopIds || shopIds.length === 0) && (!tagIds || tagIds.length === 0)) {
    throw new ReactionError("invalid-param", "You must provide tagIds or shopIds or both");
  }

  let query = {
    "product.isDeleted": { $ne: true },
    "product.isVisible": true
  };

  if (shopIds) query.shopId = { $in: shopIds };
  if ((!filterTagIds || filterTagIds.length === 0) && tagIds) query["product.tagIds"] = { $in: tagIds };

  if (filterTagIds && filterTagIds.length > 0 && tagIds) {
    query = {
      ...query,
      $and: [
        { "product.tagIds": { $in: tagIds } },
        { "product.tagIds": { $in: filterTagIds } }
      ]
    };
  }

  return Catalog.find(query);
}
