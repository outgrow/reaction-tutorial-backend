import Logger from "@reactioncommerce/logger";
import Reaction from "/imports/plugins/core/core/server/Reaction";

export default async function submitContactForm(context, input) {
  Logger.info("submitContactForm was called with input", input);

  return Reaction.Email.send({
    from: Reaction.getShopEmail(),
    replyTo: input.email,
    to: Reaction.getShopEmail(),
    subject: `Contact form${input.subject ? ` — ${input.subject}` : ""}`,
    html: input.message
  });
}
