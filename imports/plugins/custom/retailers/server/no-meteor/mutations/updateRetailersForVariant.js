/**
 * @method updateRetailersForVariant
 * @summary Updates a retailer
 * @param {Object} input - the mutation's arguments
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} MongoDB update object
 */
export default function updateRetailersForVariant(input, context) {
  const productCollection = context.collections.Products;

  return productCollection.updateOne({
    _id: input.optionId
  }, {
    $set: {
      retailers: input.retailers
    }
  });
}
