import Reaction from "/imports/plugins/core/core/server/Reaction";
import mutations from "./server/no-meteor/mutations";
import resolvers from "./server/no-meteor/resolvers";
import schemas from "./server/no-meteor/schemas";

Reaction.registerPackage({
  graphQL: {
    resolvers,
    schemas
  },
  mutations,
  label: "Contact Form",
  name: "contact-form",
  icon: "fa fa-envelope",
  autoEnable: true
});
