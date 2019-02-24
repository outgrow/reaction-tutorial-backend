import React from "react";
import { Query, withApollo } from "react-apollo";
import { retailers } from "../queries";

const withRetailers = (Component) => {
  const WithRetailers = () => (
    <Query query={retailers}>
      {({ loading, data }) => {
        const props = {
          isLoading: loading,
          ...data
        };

        return <Component {...props} />;
      }}
    </Query>
  );

  return withApollo(WithRetailers);
};

export default withRetailers;
