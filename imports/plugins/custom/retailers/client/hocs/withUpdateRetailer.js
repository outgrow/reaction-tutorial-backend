import React from "react";
import { Mutation } from "react-apollo";
import updateRetailerMutation from "../mutations/updateRetailer";

export default (Component) => (
  class UpdateRetailer extends React.Component {
    render() {
      return (
        <Mutation mutation={updateRetailerMutation}>
          {(updateRetailer) => (
            <Component updateRetailer={updateRetailer} {...this.props} />
          )}
        </Mutation>
      );
    }
  }
);
