import React, { Component } from "react";
import { Form } from "reacto-form";
import Button from "@reactioncommerce/components/Button/v1";
import ErrorsBlock from "@reactioncommerce/components/ErrorsBlock/v1";
import Field from "@reactioncommerce/components/Field/v1";
import TextInput from "@reactioncommerce/components/TextInput/v1";
import { Card, CardHeader, CardBody, CardGroup, ListItem } from "/imports/plugins/core/ui/client/components";

class SettingsComponent extends Component {
  handleFormValidate = async (fields) => {
    const errors = [];

    if (!fields.apiKey || fields.apiKey.length === 0) {
      errors.push({
        message: "A Google API Key is required.",
        name: "apiKey"
      });
    }

    if (!fields.token || fields.token.length === 0) {
      errors.push({
        message: "An authentication token is required.",
        name: "token"
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
          <CardHeader title="Google Sheets Connector" />
          <CardBody padded>
            <Form
              ref={(formRef) => { this.form = formRef; }}
              onSubmit={this.props.onSubmit}
              validator={this.handleFormValidate}
              value={this.props.settings}
            >
              <Field name="apiKey" label="API Key" labelFor="apiKey-input">
                <TextInput id="apiKey-input" name="apiKey" />
                <ErrorsBlock names={["apiKey"]} />
              </Field>

              <Field name="token" label="Authentication Token" labelFor="token-input">
                <TextInput id="token-input" name="token" />
                <ErrorsBlock names={["token"]} />
              </Field>

              <Field name="sheetId" label="Sheet ID" labelFor="sheetId-input">
                <TextInput id="sheetId-input" name="sheetId" />
                <ErrorsBlock names={["sheetId"]} />
              </Field>

              <Button onClick={() => { this.form.submit(); }}>Save</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SettingsComponent;
