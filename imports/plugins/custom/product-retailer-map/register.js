import Reaction from "/imports/plugins/core/core/server/Reaction";
import schemas from "./server/no-meteor/schemas";
import publishProductToCatalog from "./server/no-meteor/publishProductToCatalog";

Reaction.registerPackage({
  label: "Product Retailers",
  name: "product-retailer-map",
  autoEnable: true,
  catalog: {
    customPublishedProductVariantFields: ["retailers"]
  },
  functionsByType: {
    publishProductToCatalog: [publishProductToCatalog]
  },
  graphQL: {
    schemas
  }
});
