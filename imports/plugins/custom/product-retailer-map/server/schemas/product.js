import {
  CatalogVariantSchema,
  ProductVariant,
  VariantBaseSchema
} from "/imports/collections/schemas";

const retailerField = {
  retailers: {
    type: Array,
    optional: true
  },
  "retailers.$": {
    type: String
  }
};

CatalogVariantSchema.extend(retailerField);
ProductVariant.extend(retailerField);
VariantBaseSchema.extend(retailerField);
