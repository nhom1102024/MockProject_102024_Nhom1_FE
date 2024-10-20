import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./AddEquipment.css";
function AddEquipment() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/staff/equipment");
  };

  const onFinish = (values) => {
    const { name } = values;
    console.log(name);

    console.log(values);
  };

  return (
    <div className="equipment-wrapper">
      <h1 className="equipment-title">Technical Systems</h1>
      <div className="equipment-container">
        <p className="equipment-add">Add Account</p>
        <div className="equipment-form">
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
            //   onFinishFailed={onFinishFailed}
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
            <Form.Item label="Company Maintenace" name="company_maintenace">
              <Input />
            </Form.Item>
            <Form.Item label="Company:" name="company_name">
              <Input />
            </Form.Item>
            <Form.Item label="Price" name="price">
              <Input />
            </Form.Item>
            <div className="equipment-actions">
              <button onClick={handleBack} className="equipment-btn">
                Return
              </button>
              <button className="equipment-btn">Confirm</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddEquipment;
