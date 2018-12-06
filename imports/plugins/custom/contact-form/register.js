import Reaction from "/imports/plugins/core/server/Reaction";
import schemas from "./server/no-meteor/schemas";

Reaction.registerPackage({
  graphQl: {
    schemas
  },
  label: "Contact Form",
  name: "contact-form",
  icon: "fa fa-envelope",
  autoEnable: true
});
