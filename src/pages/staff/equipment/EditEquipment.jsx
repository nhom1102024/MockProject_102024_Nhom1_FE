import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { Icon } from "@iconify/react";
import { useParams, useNavigate } from "react-router-dom";
import "./AddEquipment";

const EditEquipment = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate("/staff/Equipment");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://67137ecf6c5f5ced66269a9d.mockapi.io/api/listequipment/${id}`
        );
        form.setFieldsValue({
          name: res.data.name,
          status: res.data.status,
          scheduled: res.data.scheduled,
          maintenance: res.data.maintenance,
          company_name: res.data.company_name,
          price: res.data.price,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const onFinish = async (values) => {
    console.log("Form values:", values);
    try {
      await axios.put(
        `https://67137ecf6c5f5ced66269a9d.mockapi.io/api/listequipment/${id}`,
        values
      );
      navigate("/staff/Equipment");
    } catch (error) {
      console.error("Error updating equipment:", error);
    }
  };
  return (
    <div className="equipment-wrapper">
      <h1 className="equipment-title">Technical Systems</h1>
      <div className="equipment-container">
        <p className="equipment-add">Edit Account</p>
        <div className="equipment-form">
          <Form
            name="form"
            form={form}
            onFinish={onFinish}
            colon={false}
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{ width: 800 }}
            layout={"horizontal"}
            autoComplete="off"
          >
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Input />
            </Form.Item>
            <Form.Item label="Scheduled Maintenace" name="scheduled">
              <Input />
            </Form.Item>
            <Form.Item label="Company Maintenace" name="maintenance">
              <Input />
            </Form.Item>
            <Form.Item label="Company:" name="company_name">
              <Input />
            </Form.Item>
            <Form.Item label="Price" name="price">
              <Input />
            </Form.Item>
            <div className="equipment-actions">
              <button onClick={handleUpdate} className="equipment-btn">
                Return
              </button>
              <button className="equipment-btn">Confirm</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditEquipment;
