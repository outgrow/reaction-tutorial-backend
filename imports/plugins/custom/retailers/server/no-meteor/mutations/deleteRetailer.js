import getRetailers from "../queries/retailers";
import { ObjectID } from "mongodb";

/**
 * @method deleteRetailer
 * @summary Deletes a retailer from the `Retailers` collection
 * @param {Object} input - the mutation's arguments
 * @param {Object} context - an object containing the per-request state
 * @return {Array} updated list of retailers
 */
export default async function deleteRetailer(input, context) {
  const retailerCollection = context.collections.Retailers;

  await retailerCollection.deleteOne({
    _id: ObjectID.createFromHexString(input.retailerId)
  });

  return getRetailers(context);
}
