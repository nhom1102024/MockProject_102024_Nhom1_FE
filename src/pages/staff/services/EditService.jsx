import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import { Icon } from "@iconify/react";
import { useParams, useNavigate } from "react-router-dom";
import "./AddService.css";
function EditService() {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/staff/services");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://671919fd7fc4c5ff8f4c710e.mockapi.io/ServiceList/${id}`
        );
        form.setFieldsValue({
          name: res.data.name,
          price: res.data.price,
          description: res.data.description,
          status: res.data.status,
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
        `https://671919fd7fc4c5ff8f4c710e.mockapi.io/ServiceList/${id}`,
        values
      );
      navigate("/staff/services");
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  return (
    <div className="service-wrapper">
      <h1 className="service-title">Building Information</h1>
      <div className="service-container">
        <p className="service-add">Edit Maintenance Room</p>
        <div className="service-form">
          <Form
            name="form"
            form={form}
            colon={false}
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{ width: 800 }}
            layout={"horizontal"}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item label="Service Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Service fee" name="price">
              <Input />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input />
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Input />
            </Form.Item>
            <div className="service-actions">
              <button onClick={handleBack} className="service-btn">
                Cancel
              </button>
              <button className="service-btn">Save</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default EditService;
