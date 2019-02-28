/**
 * @method updateRetailersForVariant
 * @summary Updates a retailer
 * @param {Object} input - the mutation's arguments
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} MongoDB update object
 */
export default function updateRetailersForVariant(input, context) {
  const catalogCollection = context.collections.Catalog;

  return catalogCollection.updateOne({
    _id: input.productId
  }, {
    $set: {
      "product.variants.$[].options.$[option].retailers": input.retailers
    }
  }, {
    arrayFilters: [{ "option._id": input.optionId }]
  });
}
