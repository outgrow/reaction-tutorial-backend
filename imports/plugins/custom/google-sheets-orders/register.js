import Reaction from "/imports/plugins/core/core/server/Reaction";
import schemas from "./server/no-meteor/schemas";
import queries from "./server/no-meteor/queries";
import resolvers from "./server/no-meteor/resolvers";
import mutations from "./server/no-meteor/mutations";
import startup from "./server/no-meteor/startup";

Reaction.registerPackage({
  label: "Google Sheets Order Export",
  name: "google-sheets-orders",
  icon: "fa fa-table",
  autoEnable: true,
  settings: {
    clientId: "",
    clientSecret: "",
    sheetId: "",
    refreshToken: ""
  },
  graphQL: {
    schemas,
    resolvers
  },
  functionsByType: {
    startup: [startup]
  },
  queries,
  mutations
});
