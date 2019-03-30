import React, { Component } from "react";
import { Form } from "reacto-form";
import Button from "@reactioncommerce/components/Button/v1";
import ErrorsBlock from "@reactioncommerce/components/ErrorsBlock/v1";
import Field from "@reactioncommerce/components/Field/v1";
import TextInput from "@reactioncommerce/components/TextInput/v1";
import { Card, CardHeader, CardBody } from "/imports/plugins/core/ui/client/components";

class SettingsComponent extends Component {
  handleFormValidate = async (fields) => {
    const errors = [];

    if (!fields.clientId || fields.clientId.length === 0) {
      errors.push({
        message: "A Google OAuth client ID is required.",
        name: "clientId"
      });
    }

    if (!fields.clientSecret || fields.clientSecret.length === 0) {
      errors.push({
        message: "A Google OAuth client secret is required.",
        name: "clientSecret"
      });
    }

    if (!fields.sheetId || fields.sheetId.length === 0) {
      errors.push({
        message: "A Google Docs sheet ID is required.",
        name: "sheetId"
      });
    }

    return errors;
  };

  render() {
    return (
      <div>
        <Card>
          <CardHeader title="Settings" />
          <CardBody padded>
            <Form
              ref={(formRef) => { this.form = formRef; }}
              onSubmit={this.props.onSubmit}
              validator={this.handleFormValidate}
              value={this.props.settings}
            >
              <Field name="clientId" label="Client ID" labelFor="clientId-input">
                <TextInput id="clientId-input" name="clientId" />
                <ErrorsBlock names={["clientId"]} />
              </Field>

              <Field name="clientSecret" label="Client Secret" labelFor="clientSecret-input">
                <TextInput id="clientSecret-input" name="clientSecret" />
                <ErrorsBlock names={["clientSecret"]} />
              </Field>

              <Field name="sheetId" label="Sheet ID" labelFor="sheetId-input">
                <TextInput id="sheetId-input" name="sheetId" />
                <ErrorsBlock names={["sheetId"]} />
              </Field>

              <Button onClick={() => { this.form.submit(); }}>Save</Button>
            </Form>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Login" />
          <CardBody padded>
            <Button onClick={this.props.onRedirectToGoogle}>Log In with Google</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SettingsComponent;
