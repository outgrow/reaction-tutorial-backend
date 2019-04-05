export default async function getFulfillmentMethodsWithQuotes(context, commonOrder, previousQueryResults = []) {
  const [rates = [], retrialTargets = []] = previousQueryResults;

  const { Retailers } = context.collections;

  const enabledRetailers = await Retailers.find({ isEnabled: true }).toArray();

  for (const retailer of enabledRetailers) {
    rates.push({
      carrier: "In-Store Pickup",
      method: {
        _id: retailer._id.toHexString(),
        name: retailer.name,
        label: retailer.name,
        handling: 0,
        rate: 0,
        enabled: true
      },
      rate: 0
    })
  }

  return [rates, retrialTargets];
}
