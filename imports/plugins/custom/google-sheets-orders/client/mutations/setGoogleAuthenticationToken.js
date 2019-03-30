import gql from "graphql-tag";

export default gql`
  mutation setGoogleAuthenticationToken($input: SetGoogleAuthenticationTokenInput!) {
    setGoogleAuthenticationToken(input: $input) {
      token
    }
  }
`;
