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
  },
  registry: [
    {
      provides: ["settings"],
      label: "Retailers",
      description: "Manage retailers",
      route: "/dashboard/navigation",
      icon: "fa fa-map-marker",
      container: "core",
      template: "RetailerDashboard",
      name: "retailer-dashboard",
      workflow: "retailerWorkflow",
      priority: 2,
      meta: {
        actionView: {
          dashboardSize: "lg"
        }
      }
    }
  ],
  layout: [{
    workflow: "retailerWorkflow",
    layout: "coreLayout",
    theme: "default",
    enabled: true,
    structure: {
      template: "RetailerDashboard",
      layoutHeader: "NavBar",
      layoutFooter: "",
      notFound: "notFound",
      dashboardControls: "",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});
