import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./AddService.css";
function AddService() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/staff/services");
  };

  const onFinish = (values) => {
    const { name } = values;
    console.log(name);

    console.log(values);
  };

  return (
    <div className="service-wrapper">
      <h1 className="service-title">Technical Systems</h1>
      <div className="service-container">
        <p className="service-add">Add Account</p>
        <div className="service-form">
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

export default AddService;