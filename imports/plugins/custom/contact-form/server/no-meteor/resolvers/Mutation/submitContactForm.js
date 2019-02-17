export default async function submitContactForm(parentResult, { input }, context) {
  const { clientMutationId = null } = input;

  await context.mutations.submitContactForm(context, input);

  return {
    clientMutationId
  }
}
