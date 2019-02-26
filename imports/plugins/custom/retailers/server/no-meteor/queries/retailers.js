/**
 * @method addRetailer
 * @summary Adds a new retailer to the `Retailers` collection
 * @param {Object} input - the mutation's arguments
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} the list of retailers as an array
 */
export default function(context) {
  const retailerCollection = context.collections.Retailers;

  return retailerCollection.find({}).toArray();
}
