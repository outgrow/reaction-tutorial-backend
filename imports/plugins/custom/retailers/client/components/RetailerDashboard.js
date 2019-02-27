import React, { Component } from "react";
import { Form } from "reacto-form";
import Geosuggest from "react-geosuggest";
import loadGoogleMapsApi from "load-google-maps-api";
import { Marker } from "react-google-maps";
import Button from "@reactioncommerce/components/Button/v1";
import Checkbox from "@reactioncommerce/components/Checkbox/v1";
import ErrorsBlock from "@reactioncommerce/components/ErrorsBlock/v1";
import Field from "@reactioncommerce/components/Field/v1";
import TextInput from "@reactioncommerce/components/TextInput/v1";
import { Card, CardHeader, CardBody, CardGroup, ListItem } from "/imports/plugins/core/ui/client/components";
import { SortableTable } from "/imports/plugins/core/ui/client/components";
import Map from "./Map";

let googleMapsApi = {};

loadGoogleMapsApi({
  key: "AIzaSyBg2JoG5-Nr0RmgdvE6M2u3-w-CbG_pnRw",
  libraries: ["places"]
}).then((googleMaps) => {
  googleMapsApi = googleMaps;
});

class RetailerDashboard extends Component {
  constructor() {
    super();

    this.state = {
      isEditingRetailerId: "",
      selectedPosition: {},
      newRetailer: {}
    };

    this.form = {};
    this.map = null;
  }

  handleFormSubmit = (values) => {
    const { isEditingRetailerId } = this.state;

    const retailer = {
      ...values,
      latitude: this.state.selectedPosition.location.lat,
      longitude: this.state.selectedPosition.location.lng
    };

    if (retailer.__typename !== undefined) {
      delete retailer.__typename;
    }

    if (typeof isEditingRetailerId === "string" && isEditingRetailerId.length > 0) {
      this.props.onUpdateRetailer({
        ...retailer,
        retailerId: isEditingRetailerId
      })
    } else {
      this.props.onAddRetailer(retailer);
    }

    this.setState({ newRetailer: {} });
  };

  handleFormValidate = async (fields) => {
    const errors = [];

    if (!fields.name || fields.name.length <= 0) {
      errors.push({
        message: "Retailer name is required.",
        name: "name"
      });
    }

    if (!this.state.selectedPosition || !this.state.selectedPosition.location) {
      errors.push({
        message: "Position is required.",
        name: "position"
      });
    }

    return errors;
  };

  handlePositionSelect = (selectedPosition) => {
    this.setState({ selectedPosition });

    if (selectedPosition !== undefined) {
      this.map.panTo(selectedPosition.location);
    }
  };

  handleBeginUpdateRetailer = (retailer) => {
    this.setState({
      isEditingRetailerId: retailer.retailerId,
      newRetailer: retailer,
      selectedPosition: {
        location: {
          lat: retailer.latitude,
          lng: retailer.longitude
        }
      }
    });

    this.map.panTo({ lat: retailer.latitude, lng: retailer.longitude });
  };

  flushSelectedPosition = () => this.setState({ selectedPosition: {} });

  renderSuggestItem = (suggestion) => <p>{suggestion.label}</p>;

  render() {
    const { onDeleteRetailer, retailers } = this.props;

    return (
      <div>
        <SortableTable
          data={retailers}
          columnMetadata={[
            { accessor: "name", Header: "Name" },
            { accessor: "latitude", Header: "Latitude" },
            { accessor: "longitude", Header: "Longitude" },
            {
              accessor: "isEnabled",
              Header: "Enabled",
              Cell: ({ original }) => (
                <span>{original.isEnabled ? "Yes" : "No"}</span>
              )
            },
            {
              accessor: "retailerId",
              Header: "Actions",
              Cell: ({ original }) => (
                <div>
                  <Button actionType="important" onClick={() => this.handleBeginUpdateRetailer(original)}isShortHeight isFullWidth>
                    <i className="fa fa-pencil" />
                  </Button>
                  <Button actionType="danger" onClick={() => onDeleteRetailer(original.retailerId)}isShortHeight isFullWidth>
                    <i className="fa fa-trash-o" />
                  </Button>
                </div>
              )
            }
          ]}
          filteredFields={["name", "latitude", "longitude", "isEnabled"]}
          filterType="none"
          showFilter
          isSortable
        />

        <Card>
          <CardHeader title="Add retailers" />
          <CardBody padded>
            <Form
              ref={(formRef) => { this.form = formRef; }}
              onSubmit={this.handleFormSubmit}
              validator={this.handleFormValidate}
              value={this.state.newRetailer}
            >
              <Field name="name" label="Name" labelFor="name-input">
                <TextInput id="name-input" name="name" />
                <ErrorsBlock names={["name"]} />
              </Field>

              <div className="row">
                <div className="col-md-6">
                  <label className="geosuggest__label">Find an address</label>
                  <Geosuggest
                    placeholder=""
                    googleMaps={googleMapsApi}
                    onSuggestSelect={this.handlePositionSelect}
                    onUpdateSuggests={this.flushSelectedPosition}
                    renderSuggestItem={this.renderSuggestItem}
                  />

                  <ErrorsBlock names={["position"]} />
                </div>
                <div className="col-md-6">
                  <Map
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onMapMounted={(ref) => { this.map = ref; }}
                  >
                    {this.state.selectedPosition && <Marker position={this.state.selectedPosition.location} />}
                  </Map>
                </div>
              </div>

              <Field name="isEnabled">
                <Checkbox name="isEnabled" label="Enabled" />
                <ErrorsBlock names={["isEnabled"]} />
              </Field>

              <Button onClick={() => { this.form.submit(); }}>Save</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default RetailerDashboard;
