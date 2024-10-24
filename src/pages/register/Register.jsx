import { useState } from "react";
import { Button, Form, Input, Checkbox, message } from "antd";
import "../../assets/css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const res = await axios.post(
        "https://6719c2d77fc4c5ff8f4e62b2.mockapi.io/api/employees",
        {
          ...values,
          role_id: 3,
        }
      );
      if (res) {
        message.success("Register success");
        navigate("/");
      } else {
        message.error("Register fail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="login-wrapper">
        <div className="login">
          <div className="login-header">
            <p className="login-header__greeting">Đăng ký</p>
          </div>
          <div className="login-form">
            <Form
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              layout={"horizontal"}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="userName"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 10,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="login-footer">
            Nếu đã có tài khoản, <a href={"/"}>Đăng nhập</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
