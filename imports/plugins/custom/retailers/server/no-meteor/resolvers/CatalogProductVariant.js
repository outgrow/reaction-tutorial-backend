export default {
  async retailers(productVariant, args, context) {
    const retailerIds = productVariant.retailers;

    if (retailerIds === undefined || retailerIds.length === 0) {
      return [];
    }

    return context.collections.Retailers.find({
        _id: {
          $in: retailerIds
        }
      })
      .map((retailer) => ({
        ...retailer,
        retailerId: retailer._id.toHexString()
      }))
      .toArray();
  }
}
