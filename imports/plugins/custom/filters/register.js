import Reaction from "/imports/plugins/core/core/server/Reaction";

Reaction.registerPackage({
  label: "Custom Filters",
  name: "filters",
  autoEnable: true,
  catalog: {
    publishedProductVariantFields: ["colors", "sizes"]
  }
});
