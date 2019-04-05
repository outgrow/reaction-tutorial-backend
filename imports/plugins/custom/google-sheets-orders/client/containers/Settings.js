import React, { Component } from "react";
import i18next from "i18next";
import { Meteor } from "meteor/meteor";
import { compose, withApollo } from "react-apollo";
import { withRouter } from "react-router";
import { Reaction } from "/client/modules/core/";
import Logger from "/client/modules/logger";
import SettingsComponent from "../components/SettingsComponent";

class Settings extends Component {
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

  render() {
    const { settings } = Reaction.getPackageSettings("google-sheets-orders");

    return (
      <SettingsComponent
        onSubmit={this.handleSubmit}
        settings={settings}
      />
    );
  }
}

export default compose(
  withApollo,
  withRouter
)(Settings);
