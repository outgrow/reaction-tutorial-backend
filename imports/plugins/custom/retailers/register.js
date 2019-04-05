import Reaction from "/imports/plugins/core/core/server/Reaction";
import startup from "./server/no-meteor/startup";
import schemas from "./server/no-meteor/schemas";
import queries from "./server/no-meteor/queries";
import mutations from "./server/no-meteor/mutations";
import resolvers from "./server/no-meteor/resolvers";
import publishProductToCatalog from "./server/no-meteor/publishProductToCatalog";
import getFulfillmentMethodsWithQuotes from "./server/no-meteor/getFulfillmentMethodsWithQuotes";

Reaction.registerPackage({
  label: "Product Retailers",
  name: "retailers",
  autoEnable: true,
  catalog: {
    publishedProductVariantFields: ["retailers"]
  },
  functionsByType: {
    getFulfillmentMethodsWithQuotes: [getFulfillmentMethodsWithQuotes],
    publishProductToCatalog: [publishProductToCatalog],
    startup: [startup]
  },
  graphQL: {
    resolvers,
    schemas
  },
  queries,
  mutations
});
