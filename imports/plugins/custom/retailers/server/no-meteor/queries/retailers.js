import Logger from "@reactioncommerce/logger";

export default async function retailers(context) {
  Logger.info("Retailer query called.");
  return [
    {
      name: "test",
      latitude: 0.00,
      longitude: 0.00,
      enabled: true
    }
  ];
}
