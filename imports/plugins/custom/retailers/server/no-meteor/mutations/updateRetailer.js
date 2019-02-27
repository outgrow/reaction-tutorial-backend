import getRetailers from "../queries/retailers";
import { ObjectID } from "mongodb";

/**
 * @method updateRetailer
 * @summary Updates a retailer
 * @param {Object} input - the mutation's arguments
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Array>} updated list of retailers
 */
export default async function updateRetailer(input, context) {
  const retailerCollection = context.collections.Retailers;

  await retailerCollection.updateOne({
    _id: ObjectID.createFromHexString(input.retailerId)
  }, {
    name: input.name,
    latitude: input.latitude,
    longitude: input.longitude,
    isEnabled: input.isEnabled
  });

  return getRetailers(context);
}
