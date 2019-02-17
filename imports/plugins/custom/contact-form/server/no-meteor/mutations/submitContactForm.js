import Logger from "@reactioncommerce/logger";
import Reaction from "/imports/plugins/core/core/server/Reaction";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function submitContactForm(context, input) {
  Logger.info("submitContactForm was called with input", input);

  const emailConfiguration = Reaction.Email.getMailConfig();
  const isConfigurationWorking = await Reaction.Email.verifyConfig(emailConfiguration);

  if (!isConfigurationWorking) {
    // Early return with an error
    throw new ReactionError("invalid-configuration", "E-mail configuration isn't working.");
  }

  Reaction.Email.send({
    from: Reaction.getShopEmail(),
    replyTo: input.email,
    to: Reaction.getShopEmail(),
    subject: `Contact form${input.subject ? ` — ${input.subject}` : ""}`,
    html: input.message
  });

  return false;
}
