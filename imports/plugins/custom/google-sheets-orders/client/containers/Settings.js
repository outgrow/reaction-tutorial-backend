import React, { Component } from "react";
import i18next from "i18next";
import { Meteor } from "meteor/meteor";
import { composeWithTracker } from "@reactioncommerce/reaction-components";
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
    return (
      <SettingsComponent
        onSubmit={this.handleSubmit}
        settings={this.props.settings}
      />
    );
  }
}

function composer(props, onData) {
  if (Reaction.Subscriptions.Packages.ready()) {
    const packageInfo = Reaction.getPackageSettings("google-sheets-orders");

    onData(null, {
      settings: packageInfo.settings
    });
  }
}

export default composeWithTracker(composer)(Settings);
