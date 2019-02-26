import React, { Component } from "react";
import { Form } from "reacto-form";
import Geosuggest from "react-geosuggest";
import loadGoogleMapsApi from "load-google-maps-api";
import Button from "@reactioncommerce/components/Button/v1";
import Checkbox from "@reactioncommerce/components/Checkbox/v1";
import ErrorsBlock from "@reactioncommerce/components/ErrorsBlock/v1";
import Field from "@reactioncommerce/components/Field/v1";
import TextInput from "@reactioncommerce/components/TextInput/v1";
import { Card, CardHeader, CardBody, CardGroup, ListItem } from "/imports/plugins/core/ui/client/components";
import { SortableTable } from "/imports/plugins/core/ui/client/components";

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
      address: "",
      newRetailer: {}
    };

    this.form = {};
  }

  handleFormSubmit = (values) => {
    this.props.onAddRetailer(values);

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

    if (!fields.latitude || fields.latitude.length <= 0) {
      errors.push({
        message: "Latitude is required.",
        name: "latitude"
      });
    }

    if (!fields.longitude || fields.longitude.length <= 0) {
      errors.push({
        message: "Longitude is required.",
        name: "longitude"
      });
    }

    if (fields.latitude && fields.latitude.length > 0 && isNaN(parseFloat(fields.latitude))) {
      errors.push({
        message: "Latitude has to be a number.",
        name: "latitude"
      });
    }

    if (fields.longitude && fields.longitude.length > 0 && isNaN(parseFloat(fields.longitude))) {
      errors.push({
        message: "Longitude has to be a number.",
        name: "longitude"
      });
    }

    return errors;
  };

  handleAddressSelect = (address) => {
    console.log(address);
  };

  render() {
    const { retailers } = this.props;

    return (
      <div>
        <SortableTable
          data={retailers}
          columnMetadata={[
            { accessor: "name", Header: "Name" },
            { accessor: "latitude", Header: "Latitude" },
            { accessor: "longitude", Header: "Longitude" },
            { accessor: "isEnabled", Header: "Enabled" }
          ]}
          filteredFields={["name", "latitude", "longitude", "isEnabled"]}
          filterType="none"
          showFilter
          isSortable
        />

        <Card>
          <CardHeader title={"Add retailers"} />
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

              <Geosuggest
                googleMaps={googleMapsApi}
                onSuggestSelect={this.handleAddressSelect}
              />

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
