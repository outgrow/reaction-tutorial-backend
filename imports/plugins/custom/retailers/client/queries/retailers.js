import gql from "graphql-tag";

export default gql`
  query {
    retailers {
      name,
      latitude,
      longitude
    }
  }
`
