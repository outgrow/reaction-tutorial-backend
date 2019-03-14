import Reaction from "/imports/plugins/core/core/server/Reaction";
import startup from "./server/no-meteor/startup";

Reaction.registerPackage({
  label: "Custom Filters",
  name: "filters",
  autoEnable: true,
  catalog: {
    publishedProductVariantFields: ["colors", "sizes"]
  },
  functionsByType: {
    startup: [startup]
  }
});
