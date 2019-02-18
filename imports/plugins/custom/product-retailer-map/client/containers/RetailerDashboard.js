import React, { Component } from "react";
import { registerComponent } from "@reactioncommerce/reaction-components";

class RetailerDashboard extends Component {
  render() {
    return (
      <h1>Hello, World!</h1>
    );
  }
}

registerComponent("RetailerDashboard", RetailerDashboard);

export default RetailerDashboard;
