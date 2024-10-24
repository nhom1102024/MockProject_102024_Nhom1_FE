import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/css/Login.css";

function Login() {
  const roles = {
    1: "admin",
    2: "staff",
    3: "customer",
  };
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const res = await axios.get(
        "https://6719c2d77fc4c5ff8f4e62b2.mockapi.io/api/employees"
      );
      const matchedUser = res.data.find(
        (user) =>
          user.userName === values.userName && user.password === values.password
      );

      if (matchedUser) {
        message.success("Login success");
        localStorage.setItem("role", roles[matchedUser.role_id]);
        navigate(0);
      } else {
        message.error("Login fail");
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
            <p className="login-header__greeting">Xin chào! Bắt đầu nào</p>
            <p className="login-header__title">Đăng nhập để tiếp tục</p>
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
                wrapperCol={{
                  offset: 10,
                  span: 8,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="login-footer">
            Nếu chưa có tài khoản, <a href={"/register"}>Đăng ký</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
