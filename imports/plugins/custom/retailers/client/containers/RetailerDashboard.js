import React, { Component } from "react";
import PropTypes from "prop-types";
import { Components, registerComponent } from "@reactioncommerce/reaction-components";
import { withAddRetailer, withRetailers } from "../hocs";
import { RetailerDashboard } from "../components";

class RetailerDashboardContainer extends Component {
  static propTypes = {
    addRetailer: PropTypes.func,
    isLoading: PropTypes.bool,
    retailers: PropTypes.array
  };

  handleAddRetailer = async (values) => {
    const updatedRetailerList = await this.props.addRetailer({
      input: values
    });

    console.log("updated retailer list", updatedRetailerList);
  };

  render() {
    const { isLoading, retailers } = this.props;

    if (isLoading) {
      return <Components.Loading />;
    }

    return (
      <RetailerDashboard
        onAddRetailer={this.handleAddRetailer}
        retailers={retailers}
      />
    );
  }
}

registerComponent("RetailerDashboard", RetailerDashboardContainer, [
  withAddRetailer,
  withRetailers
]);

export default withAddRetailer(withRetailers(RetailerDashboardContainer));
