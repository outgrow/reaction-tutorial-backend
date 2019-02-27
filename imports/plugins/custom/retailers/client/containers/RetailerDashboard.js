import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { Components, registerComponent } from "@reactioncommerce/reaction-components";
import {
  withAddRetailer,
  withDeleteRetailer,
  withRetailers,
  withUpdateRetailer
} from "../hocs";
import { RetailerDashboard } from "../components";

class RetailerDashboardContainer extends Component {
  static propTypes = {
    addRetailer: PropTypes.func,
    isLoading: PropTypes.bool,
    retailers: PropTypes.array
  };

  constructor() {
    super();

    this.state = {
      retailers: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const { retailers } = this.props;

    if (retailers !== undefined) {
      this.setState({ retailers });
    }
  }

  handleAddRetailer = async (input) => {
    const updatedRetailerList = await this.props.addRetailer({
      variables: {
        input: {
          ...input,
          latitude: parseFloat(input.latitude),
          longitude: parseFloat(input.longitude)
        }
      }
    });

    console.log("updated retailer list", updatedRetailerList);

    this.setState({ retailers: updatedRetailerList.data.addRetailer.retailers });
  };

  handleDeleteRetailer = async (retailerId) => {
    const updatedRetailerList = await this.props.deleteRetailer({
      variables: {
        input: {
          retailerId
        }
      }
    });

    this.setState({ retailers: updatedRetailerList.data.deleteRetailer.retailers });
  };

  handleUpdateRetailer = async (input) => {
    const updatedRetailerList = await this.props.updateRetailer({
      variables: {
        input: {
          ...input,
          latitude: parseFloat(input.latitude),
          longitude: parseFloat(input.longitude)
        }
      }
    });

    console.log("updated retailer list", updatedRetailerList);

    this.setState({ retailers: updatedRetailerList.data.updateRetailer.retailers });
  };

  render() {
    const { isLoading } = this.props;
    const { retailers } = this.state;

    if (isLoading) {
      return <Components.Loading />;
    }

    return (
      <RetailerDashboard
        onAddRetailer={this.handleAddRetailer}
        onDeleteRetailer={this.handleDeleteRetailer}
        onUpdateRetailer={this.handleUpdateRetailer}
        retailers={retailers}
      />
    );
  }
}

registerComponent("RetailerDashboard", RetailerDashboardContainer, [
  withAddRetailer,
  withDeleteRetailer,
  withRetailers,
  withUpdateRetailer
]);

export default compose(
  withAddRetailer,
  withDeleteRetailer,
  withRetailers,
  withUpdateRetailer
)(RetailerDashboardContainer);
