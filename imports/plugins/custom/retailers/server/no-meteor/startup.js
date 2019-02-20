export default function startup(context) {
  const { collections } = context;

  collections.Retailers = context.app.db.collection("Retailers");
}
