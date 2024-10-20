import React, { useState } from "react";
import { Button, Input, Checkbox, Select, Form } from "antd";
import "./ListBuilding.css";

const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return (
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <Icon icon="ri:arrow-left-line" />
        <a style={{ marginLeft: "12px", color: "#000" }}>Previous</a>
      </div>
    );
  }
  if (type === "next") {
    return (
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <a style={{ marginRight: "12px", color: "#000" }}>Next</a>
        <Icon icon="ri:arrow-right-line" />
      </div>
    );
  }
  return originalElement;
};
const { Option } = Select;
function ListBuilding() {
  return (
    <div className="ListBuilding">
      <h1>List</h1>
    </div>
  );
}

export default ListBuilding;
