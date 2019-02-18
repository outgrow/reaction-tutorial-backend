import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  name: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  enabled: {
    type: Boolean,
    default: true
  }
});
