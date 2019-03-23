import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { registerOperatorRoute } from "/imports/client/ui";
import { Settings } from "./containers";

registerOperatorRoute({
  isNavigationLink: true,
  isSetting: true,
  mainComponent: Settings,
  path: "/google-sheets",
  // eslint-disable-next-line react/display-name
  SidebarIconComponent: (props) => <FontAwesomeIcon icon={faTable} {...props} />,
  sidebarI18nLabel: "admin.settings.googleSheetConnector"
});
