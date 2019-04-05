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

    if (!fields.projectId || fields.projectId.length === 0) {
      errors.push({
        message: "A Google project ID is required.",
        name: "projectId"
      });
    }

    if (!fields.privateKeyId || fields.privateKeyId.length === 0) {
      errors.push({
        message: "A Google private key ID is required.",
        name: "privateKeyId"
      });
    }

    if (!fields.privateKey || fields.privateKey.length === 0) {
      errors.push({
        message: "A Google private key is required.",
        name: "privateKey"
      });
    }

    if (!fields.clientEmail || fields.clientEmail.length === 0) {
      errors.push({
        message: "A Google service account client e-mail is required.",
        name: "clientEmail"
      });
    }

    if (!fields.clientId || fields.clientId.length === 0) {
      errors.push({
        message: "A Google service account client ID is required.",
        name: "clientId"
      });
    }

    if (!fields.authUri || fields.authUri.length === 0) {
      errors.push({
        message: "A Google authentication URI is required.",
        name: "authUri"
      });
    }

    if (!fields.tokenUri || fields.tokenUri.length === 0) {
      errors.push({
        message: "A Google token URI is required.",
        name: "tokenUri"
      });
    }

    if (!fields.authProviderX509CertUrl || fields.authProviderX509CertUrl.length === 0) {
      errors.push({
        message: "A Google authentication provider x509 certificate URL is required.",
        name: "authProviderX509CertUrl"
      });
    }

    if (!fields.clientX509CertUrl || fields.clientX509CertUrl.length === 0) {
      errors.push({
        message: "A Google client x509 certificate URL is required.",
        name: "clientX509CertUrl"
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
              <Field name="googleCredentialObject" label="Google Credential JSON" labelFor="googleCredentialObject-input">
                <TextInput id="googleCredentialObject-input" name="googleCredentialObject" shouldAllowLineBreaks />
                <ErrorsBlock names={["googleCredentialObject"]} />
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
