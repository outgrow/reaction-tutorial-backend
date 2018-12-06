export default async function submitContactForm(parentResult, { input }, context) {
  const { clientMutationId = null } = input;

  const hasError = await context.mutations.submitContactForm(context, input);

  return {
    hasError,
    clientMutationId
  }
}
