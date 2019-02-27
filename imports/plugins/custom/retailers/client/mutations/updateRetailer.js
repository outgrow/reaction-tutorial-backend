import gql from "graphql-tag";

export default gql`
  mutation updateRetailer($input: UpdateRetailerInput!) {
    updateRetailer(input: $input) {
      retailers {
        name
        latitude
        longitude
        isEnabled
        retailerId
      }
    }
  }
`;
