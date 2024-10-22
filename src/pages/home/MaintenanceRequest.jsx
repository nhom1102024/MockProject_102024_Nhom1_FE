import React from "react";
import { Input, Button, Form, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import HeaderAdmin from "../../components/admin/header/Header"; 
import SideBarAdmin from "../../components/admin/sidebar/SideBar";
import "./MaintenanceRequest.css";

const MaintenanceRequest = () => {
  return (
    <div className="maintenance-request-container">
      <h2>Create Maintenance Request</h2>
      <Form layout="vertical">
        <Form.Item label="Customer Name">
          <Input placeholder="Enter customer name" />
        </Form.Item>
        <Form.Item label="Building">
          <Input placeholder="Enter building name" />
        </Form.Item>
        <Form.Item label="Address">
          <Input placeholder="Enter address" />
        </Form.Item>

        <h3>Maintenance Details</h3>
        <div className="maintenance-details">
          <Form.Item label="Photo">
            <Upload>
              <Button icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Please describe the problem" className="problem-description">
            <Input.TextArea rows={4} placeholder="Describe the problem" />
          </Form.Item>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Maintenance Request
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MaintenanceRequest;
