import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import { Icon } from "@iconify/react";
import { useParams, useNavigate } from "react-router-dom";
import "./AddMaintenanceRoom.css";
function AddMaintenanceRoom() {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/staff/apartment");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://67137ecf6c5f5ced66269a9d.mockapi.io/api/listapartment/${id}`
        );
        form.setFieldsValue({
          date: res.data.date,
          workdone: res.data.workdone,
          contractor: res.data.contractor,
          cost: res.data.cost,
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
        `https://67137ecf6c5f5ced66269a9d.mockapi.io/api/listapartment/${id}`,
        values
      );
      navigate("/staff/equipment");
    } catch (error) {
      console.error("Error updating equipment:", error);
    }
  };

  return (
    <div className="maintenance-room-wrapper">
      <h1 className="maintenance-room-title">Building Information</h1>
      <div className="maintenance-room-container">
        <p className="maintenance-room-add">Edit Maintenance Room</p>
        <div className="maintenance-room-form">
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
            <Form.Item label="Date:" name="date">
              <Input />
            </Form.Item>
            <Form.Item label="Kork Done:" name="workdone">
              <Input />
            </Form.Item>
            <Form.Item label="Contractor:" name="contractor">
              <Input />
            </Form.Item>
            <Form.Item label="Cost:" name="cost">
              <Input />
            </Form.Item>
            <Form.Item label="Done:" name="done">
              <Checkbox />
            </Form.Item>
            <div className="maintenance-room-actions">
              <button
                type="button"
                onClick={handleBack}
                className="maintenance-room-btn"
              >
                Return
              </button>
              <button className="maintenance-room-btn">Confirm</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddMaintenanceRoom;
