import React from "react";
import { Mutation } from "react-apollo";
import addRetailerMutation from "../mutations/addRetailer";

export default (Component) => (
  class AddRetailer extends React.Component {
    render() {
      return (
        <Mutation mutation={addRetailerMutation}>
          {(addRetailer) => (
            <Component addRetailer={addRetailer} {...this.props} />
          )}
        </Mutation>
      );
    }
  }
);
