import gql from "graphql-tag";

export default gql`
  mutation addRetailer($input: AddRetailerInput!) {
    addRetailer(input: $input) {
      retailers {
        name
        latitude
        longitude
        isEnabled
      }
    }
  }
`;
