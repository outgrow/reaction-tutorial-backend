import Reaction from "/imports/plugins/core/core/server/Reaction";
import schemas from "./server/no-meteor/schemas";
import queries from "./server/no-meteor/queries";
import resolvers from "./server/no-meteor/resolvers";

Reaction.registerPackage({
  label: "Google Sheets Order Export",
  name: "google-sheets-orders",
  icon: "fa fa-table",
  autoEnable: true,
  settings: {
    clientId: "",
    clientSecret: "",
    token: "",
    sheetId: ""
  },
  graphQL: {
    schemas,
    resolvers
  },
  queries
});
