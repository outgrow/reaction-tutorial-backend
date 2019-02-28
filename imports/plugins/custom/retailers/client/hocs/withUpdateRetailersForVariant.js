import React from "react";
import { Mutation } from "react-apollo";
import updateRetailersForVariantMutation from "../mutations/updateRetailersForVariant";

export default (Component) => (
  class UpdateRetailer extends React.Component {
    render() {
      return (
        <Mutation mutation={updateRetailersForVariantMutation}>
          {(updateRetailersForVariant) => (
            <Component updateRetailersForVariant={updateRetailersForVariant} {...this.props} />
          )}
        </Mutation>
      );
    }
  }
);
