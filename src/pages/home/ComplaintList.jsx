import React from "react";
import { Table, Button, Input, Layout } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import HeaderAdmin from "../../components/admin/header/Header";
import SideBarAdmin from "../../components/admin/sidebar/SideBar";
import "./ComplaintList.css";

const { Content } = Layout;

// Dữ liệu mẫu
const data = [
  { id: 1, name: "John Doe", type: "Noise Disturbance", date: "01/10/2024", address: "123 Elm Street", status: "Pending" },
  { id: 2, name: "Jane Smith", type: "Water Leakage", date: "02/10/2024", address: "456 Oak Street", status: "In Progress" },
  { id: 3, name: "Emily Johnson", type: "Garbage Collection", date: "03/10/2024", address: "789 Pine Road", status: "Resolved" },
  { id: 4, name: "Michael Brown", type: "Illegal Parking", date: "05/10/2024", address: "321 Maple Avenue", status: "Pending" },
  { id: 5, name: "Sarah Lee", type: "Power Outage", date: "06/10/2024", address: "654 Cedar Street", status: "In Progress" },
  { id: 6, name: "David Wilson", type: "Unmaintained Trees", date: "07/10/2024", address: "432 Willow Lane", status: "Pending" },
];

// Cột của bảng
const columns = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Customer Name", dataIndex: "name", key: "name" },
  { title: "Complaint Type", dataIndex: "type", key: "type" },
  { title: "Date Submitted", dataIndex: "date", key: "date" },
  { title: "Address", dataIndex: "address", key: "address" },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => (
      <span style={{ color: text === "Resolved" ? "green" : text === "In Progress" ? "orange" : "red" }}>
        {text}
      </span>
    ),
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <div>
        <Button type="link" icon={<EditOutlined />} />
        <Button type="link" icon={<DeleteOutlined />} />
      </div>
    ),
  },
];

const ComplaintList = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
   
      <Layout style={{ marginLeft: 200 }}>

        <Content className="content-wrapper">
          <div className="complaint-list-container">
            <h2>Maintenance service</h2>
            <Input.Search
              placeholder="Enter keywords..."
              style={{ width: 400, marginBottom: 20 }}
            />

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <h3>Complaint list</h3>
              <Button type="primary">Add</Button>
            </div>

            <Table
              dataSource={data}
              columns={columns}
              rowKey="id"
              pagination={{ pageSize: 10, total: data.length, showSizeChanger: true }}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ComplaintList;
