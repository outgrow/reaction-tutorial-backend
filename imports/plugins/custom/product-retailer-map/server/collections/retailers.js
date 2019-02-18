import { Mongo } from "meteor/mongo";
import Retailer from "../no-meteor/schemas/retailer";

export const Retailers = new Mongo.Collection("Retailers");

Retailers.attachSchema(Retailer);
