/**
 * @method retailers
 * @summary Returns all retailers
 * @param {Object} context - an object containing the per-request state
 * @return {Array} the list of retailers as an array
 */
export default function(context) {
  const retailerCollection = context.collections.Retailers;

  return retailerCollection
    .find()
    .map((retailer) => ({
      ...retailer,
      retailerId: retailer._id.toHexString()
    }))
    .toArray();
}
