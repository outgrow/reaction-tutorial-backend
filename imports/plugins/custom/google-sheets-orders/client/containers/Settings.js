import React, { Component } from "react";
import i18next from "i18next";
import { Meteor } from "meteor/meteor";
import queryString from "query-string";
import { compose, withApollo } from "react-apollo";
import { withRouter } from "react-router";
import { Reaction } from "/client/modules/core/";
import Logger from "/client/modules/logger";
import SettingsComponent from "../components/SettingsComponent";
import { googleAuthenticationUrl } from "../queries";
import { setGoogleAuthenticationCode } from "../mutations";

class Settings extends Component {
  componentDidMount() {
    const params = queryString.parse(this.props.history.location.search);

    const { code } = params;
    const { client } = this.props;

    if (code !== undefined && code.length > 0) {
      client.mutate({
        mutation: setGoogleAuthenticationCode,
        variables: {
          input: {
            code
          }
        }
      });
    }
  }

  handleSubmit = (settings) => new Promise((resolve, reject) => {
    Meteor.call("package/update", "google-sheets-orders", "settings", settings, (err, res) => {
      if (err) {
        Logger.error(err);
        Alerts.toast(`${i18next.t("admin.settings.settingsSaveFailure")} ${err}`, "error");
        reject(err);
      } else {
        Alerts.toast(i18next.t("admin.settings.settingsSaveSuccess"), "success");
        resolve(res);
      }
    });
  });

  handleRedirectToGoogle = async () => {
    const { client } = this.props;

    const { data } = await client.query({ query: googleAuthenticationUrl });

    window.open(data.googleAuthenticationUrl.url)
  };

  render() {
    const { settings } = Reaction.getPackageSettings("google-sheets-orders");

    return (
      <SettingsComponent
        onSubmit={this.handleSubmit}
        onRedirectToGoogle={this.handleRedirectToGoogle}
        settings={settings}
      />
    );
  }
}

export default compose(
  withApollo,
  withRouter
)(Settings);
