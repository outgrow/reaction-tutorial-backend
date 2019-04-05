import Reaction from "/imports/plugins/core/core/server/Reaction";
import startup from "./server/no-meteor/startup";

Reaction.registerPackage({
  label: "Google Sheets Order Export",
  name: "google-sheets-orders",
  icon: "fa fa-table",
  autoEnable: true,
  settings: {
    googleCredentialObject: "",
    sheetId: ""
  },
  functionsByType: {
    startup: [startup]
  }
});
