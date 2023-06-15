import React from "react";
import HubComponent from "../components/hub/HubComponent";

export default function HubList() {
  return (
    <div className="container">
        <h1 className="h4">Hubs list</h1>
      <div className="row">
        <HubComponent />
        <HubComponent />
        <HubComponent />
        <HubComponent />
      </div>
    </div>
  );
}
