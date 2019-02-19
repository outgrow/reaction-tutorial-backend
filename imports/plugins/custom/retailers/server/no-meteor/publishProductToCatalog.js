import Logger from "@reactioncommerce/logger";

export default function publishProductToCatalog(catalogProduct, { context, product, shop, variants }) {
  Logger.debug("catalogProduct", catalogProduct);
  Logger.debug("variants", variants);
}
