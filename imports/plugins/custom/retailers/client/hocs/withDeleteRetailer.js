import React from "react";
import { Mutation } from "react-apollo";
import deleteRetailerMutation from "../mutations/deleteRetailer";

export default (Component) => (
  class DeleteRetailer extends React.Component {
    render() {
      return (
        <Mutation mutation={deleteRetailerMutation}>
          {(deleteRetailer) => (
            <Component deleteRetailer={deleteRetailer} {...this.props} />
          )}
        </Mutation>
      );
    }
  }
);
