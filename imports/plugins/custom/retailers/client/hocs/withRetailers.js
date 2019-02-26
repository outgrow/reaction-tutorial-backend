import React from "react";
import { Query, withApollo } from "react-apollo";
import { retailers } from "../queries";

const withRetailers = (Component) => {
  const WithRetailers = (initialProps) => (
    <Query query={retailers}>
      {({ loading, data }) => {
        const props = {
          isLoading: loading,
          ...data,
          ...initialProps
        };

        return <Component {...props} />;
      }}
    </Query>
  );

  return withApollo(WithRetailers);
};

export default withRetailers;
