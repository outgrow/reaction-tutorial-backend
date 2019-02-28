import gql from "graphql-tag";

export default gql`
  mutation updateRetailersForVariant($input: UpdateRetailersForVariantInput!) {
    updateRetailersForVariant(input: $input) {
      productId
      optionId
      retailers
    }
  }
`;
