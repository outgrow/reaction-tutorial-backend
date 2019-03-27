/**
 * @name "Query.googleAuthenticationUrl"
 * @method
 * @memberof Catalog/GraphQL
 * @summary Get a generated Google authentication URL
 * @param {Object} _ - unused
 * @param {ConnectionArgs} args - an object of all arguments that were sent by the client
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} The authentication URL wrapped in an object
 */
export default async function googleAuthenticationUrl(_, args, context) {
  return context.queries.googleAuthenticationUrl(context, {});
}

