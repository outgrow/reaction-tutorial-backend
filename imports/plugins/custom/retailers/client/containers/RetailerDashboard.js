import React, { Component } from "react";
import PropTypes from "prop-types";
import { Components, registerComponent } from "@reactioncommerce/reaction-components";
import { withRetailers } from "../hocs";

class RetailerDashboard extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    retailers: PropTypes.array
  };

  render() {
    const { isLoading, retailers } = this.props;

    if (isLoading) {
      return <Components.Loading />;
    }
    return (
      <div>
        <h1>Retailers</h1>
        <ul>
          {retailers.map((retailer) => (
            <li key={retailer.name}>{retailer.name} - Pos: {retailer.latitude}, {retailer.longitude}</li>
          ))}
        </ul>
      </div>
    )
  }
}

registerComponent("RetailerDashboard", RetailerDashboard, [withRetailers]);

export default withRetailers(RetailerDashboard);
