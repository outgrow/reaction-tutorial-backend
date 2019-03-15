/**
 * @method filterTags
 * @summary Returns all retailers
 * @param {Object} context - an object containing the per-request state
 * @param {String} shopId - the ID of shop to filter tags by
 * @return {Array} the list of retailers as an array
 */
export default function(context, shopId) {
  const tagCollection = context.collections.Tags;

  return tagCollection
    .find({
      shopId,
      type: "filter"
    })
    .toArray();
}
