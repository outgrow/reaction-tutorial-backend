import { ObjectID } from "mongodb";

export default {
  async retailers(productVariant, args, context) {
    const retailerIds = productVariant.retailers.map((retailer) => ObjectID.createFromHexString(retailer));

    if (retailerIds === undefined || retailerIds.length === 0) {
      return [];
    }

    const retailerList = await context.collections.Retailers.find({
      _id: {
        $in: retailerIds
      },
      isEnabled: true
    }).toArray();

    if (retailerList === undefined || retailerList.length === 0) {
      return [];
    }

    return retailerList.map((retailer) => ({
      ...retailer,
      retailerId: retailer._id.toHexString()
    }));
  }
}
