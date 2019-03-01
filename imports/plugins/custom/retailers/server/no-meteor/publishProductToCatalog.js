export default function publishProductToCatalog(catalogProduct, { context, product, shop, variants }) {
  catalogProduct.variants = catalogProduct.variants.map((catalogProductVariant) => {
    const options = catalogProductVariant.options.map((catalogOption) => {
      const matchingOption = variants.filter((option) => option._id === catalogOption._id);

      if (matchingOption[0].retailers !== undefined) {
        return {
          ...catalogOption,
          retailers: matchingOption[0].retailers
        };
      }

      return catalogOption;
    });

    return {
      ...catalogProductVariant,
      options
    };
  })
}
