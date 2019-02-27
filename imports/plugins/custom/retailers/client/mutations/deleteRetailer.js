import gql from "graphql-tag";

export default gql`
  mutation deleteRetailer($input: DeleteRetailerInput!) {
    deleteRetailer(input: $input) {
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
