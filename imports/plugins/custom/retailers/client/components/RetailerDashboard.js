import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardGroup, ListItem } from "/imports/plugins/core/ui/client/components";
import { SortableTable } from "/imports/plugins/core/ui/client/components";

class RetailerDashboard extends Component {
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
            { accessor: "enabled", Header: "Enabled" }
          ]}
          filteredFields={["name", "latitude", "longitude", "enabled"]}
          filterType="none"
          showFilter
          isSortable
        />

        <Card>
          <CardHeader title={"Add retailers"} />
          <CardBody padded>
            <h2>Form goes here</h2>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default RetailerDashboard;
