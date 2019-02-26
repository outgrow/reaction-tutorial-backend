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
  isEnabled: {
    type: Boolean,
    defaultValue: true
  }
});

registerSchema("Retailers", Retailer);

export default Retailer;
