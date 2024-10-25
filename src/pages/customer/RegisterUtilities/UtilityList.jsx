import React from "react";
import { Layout, Button, Table } from "antd";
import "./UtilityList.css";

const { Content } = Layout;

const dataSource = [
  {
    key: "1",
    utilityType: "Electricity",
    provider: "Company A",
    contractNo: "12345",
    startDate: "01/01/2024",
    endDate: "01/01/2025",
    rate: "$100",
  },
  {
    key: "2",
    utilityType: "Water",
    provider: "Company A",
    contractNo: "67890",
    startDate: "01/01/2024",
    endDate: "01/01/2025",
    rate: "$50",
  },
  {
    key: "3",
    utilityType: "Gas",
    provider: "Company A",
    contractNo: "11223",
    startDate: "01/01/2024",
    endDate: "01/01/2025",
    rate: "$75",
  },
];

const columns = [
  {
    title: "Utility Type",
    dataIndex: "utilityType",
    key: "utilityType",
  },
  {
    title: "Provider",
    dataIndex: "provider",
    key: "provider",
  },
  {
    title: "Contract No.",
    dataIndex: "contractNo",
    key: "contractNo",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
  },
  {
    title: "Actions",
    key: "actions",
    render: () => <a href="#">Unsubscribe</a>,
  },
];

function UtilityList() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Content style={{ padding: "20px" }}>
        <div className="utility-list-container">
          <h2>Utility List</h2>
          <Button type="primary" style={{ marginBottom: "20px" }}>
            Add Utility
          </Button>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </Content>
    </Layout>
  );
}

export default UtilityList;
