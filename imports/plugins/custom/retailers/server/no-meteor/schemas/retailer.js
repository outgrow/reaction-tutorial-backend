import SimpleSchema from "simpl-schema";
import { registerSchema } from "@reactioncommerce/schemas";

const Retailer = new SimpleSchema({
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

registerSchema("Retailers", Retailer);

export default Retailer;
