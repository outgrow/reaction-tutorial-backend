import { ObjectID } from "mongodb";

export default {
  retailers(productVariant, args, context) {
    const retailerIds = productVariant.retailers.map((retailer) => ObjectID.createFromHexString(retailer));

    if (retailerIds === undefined || retailerIds.length === 0) {
      return [];
    }

    return context.collections.Retailers.find({
        _id: {
          $in: retailerIds
        },
        isEnabled: true
      })
      .map((retailer) => ({
        ...retailer,
        retailerId: retailer._id.toHexString()
      }))
      .toArray();
  }
}
