import Logger from "@reactioncommerce/logger";

export default async function(context) {
  Logger.info("Retailer query called.");

  const retailerCollection = context.collections.Retailers;

  const retailerData = await retailerCollection.find({});

  return retailerData;
}
