import Reaction from "/imports/plugins/core/core/server/Reaction";
import startup from "./server/no-meteor/startup";
import schemas from "./server/no-meteor/schemas";
import resolvers from "./server/no-meteor/resolvers";
import queries from "./server/no-meteor/queries";

Reaction.registerPackage({
  label: "Custom Filters",
  name: "filters",
  autoEnable: true,
  catalog: {
    publishedProductVariantFields: ["colors", "sizes"]
  },
  functionsByType: {
    startup: [startup]
  },
  graphQL: {
    schemas,
    resolvers
  },
  queries
});
