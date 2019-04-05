import Reaction from "/imports/plugins/core/core/server/Reaction";
import startup from "./server/no-meteor/startup";

Reaction.registerPackage({
  label: "Google Sheets Order Export",
  name: "google-sheets-orders",
  icon: "fa fa-table",
  autoEnable: true,
  settings: {
    projectId: "",
    privateKeyId: "",
    privateKey: "",
    clientEmail: "",
    clientId: "",
    authUri: "",
    tokenUri: "",
    authProviderX509CertUrl: "",
    clientX509CertUrl: "",
    sheetId: ""
  },
  functionsByType: {
    startup: [startup]
  }
});
