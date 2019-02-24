export default function(context) {
  const retailerCollection = context.collections.Retailers;

  return retailerCollection.find({}).toArray();
}
