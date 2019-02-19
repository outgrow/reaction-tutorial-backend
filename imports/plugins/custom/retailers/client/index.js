import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { registerOperatorRoute } from "/imports/client/ui";
import { RetailerDashboard } from "./containers";

registerOperatorRoute({
  isNavigationLink: true,
  isSetting: true,
  mainComponent: RetailerDashboard,
  path: "/retailers",
  // eslint-disable-next-line react/display-name
  SidebarIconComponent: (props) => <FontAwesomeIcon icon={faStoreAlt} {...props} />,
  sidebarI18nLabel: "admin.retailerDashboard.retailers"
});
