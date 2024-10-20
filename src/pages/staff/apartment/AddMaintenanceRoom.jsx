import { Button, Checkbox, Form, Input } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./AddMaintenanceRoom.css";
function AddMaintenanceRoom() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/staff/apartment");
  };
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="maintenance-room-wrapper">
      <h1 className="maintenance-room-title">Building Information</h1>
      <div className="maintenance-room-container">
        <p className="maintenance-room-add">Add Maintenance Room</p>
        <div className="maintenance-room-form">
          <Form
            name="form"
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
            <Form.Item label="Room:" name="room">
              <Input />
            </Form.Item>
            <Form.Item label="Work:" name="work">
              <Input />
            </Form.Item>
            <Form.Item label="Contractor:" name="contractor">
              <Input />
            </Form.Item>
            <Form.Item label="Cost:" name="cost">
              <Input />
            </Form.Item>
            <Form.Item label="Done::" name="done">
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
