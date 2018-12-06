import Logger from "@reactioncommerce/logger";

export default async function submitContactForm(context, input) {
  Logger.info("submitContactForm was called with input", input);
  return false;
}
