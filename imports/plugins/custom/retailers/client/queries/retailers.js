import gql from "graphql-tag";

export default gql`
  query retailers {
    retailers {
      name
      latitude
      longitude
    }
  }
`
