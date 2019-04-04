import gql from "graphql-tag";

export default gql`
  mutation setGoogleAuthenticationCode($input: SetGoogleAuthenticationCodeInput!) {
    setGoogleAuthenticationCode(input: $input) {
      token
    }
  }
`;
