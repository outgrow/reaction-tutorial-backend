/**
 * @method addRetailer
 * @summary Adds a new retailer to the `Retailers` collection
 * @param {Object} input - the mutation's arguments
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} TODO
 */
export default async function addRetailer(input, context) {
  const retailerCollection = context.collections.Retailers;

  await retailerCollection.insert({ ...input });

  return retailerCollection.find().toArray();
}
