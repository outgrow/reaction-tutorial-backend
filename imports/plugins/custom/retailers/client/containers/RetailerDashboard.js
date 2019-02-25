import React, { Component } from "react";
import PropTypes from "prop-types";
import { Components, registerComponent } from "@reactioncommerce/reaction-components";
import { withRetailers } from "../hocs";
import { RetailerDashboard } from "../components";

class RetailerDashboardContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    retailers: PropTypes.array
  };

  render() {
    const { isLoading, retailers } = this.props;

    if (isLoading) {
      return <Components.Loading />;
    }

    return <RetailerDashboard retailers={retailers} />;
  }
}

registerComponent("RetailerDashboard", RetailerDashboardContainer, [withRetailers]);

export default withRetailers(RetailerDashboardContainer);
