import Logger from "@reactioncommerce/logger";

export default async function submitContactForm(context) {
  Logger.info("submitContactForm was called with context", context);
  return false;
}
