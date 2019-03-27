import gql from "graphql-tag";

export default gql`
  query googleAuthenticationUrl {
    googleAuthenticationUrl {
      url
    }
  }
`
