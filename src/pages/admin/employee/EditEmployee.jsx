import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Input, message, Select, DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import axios from "../../../services/CustomizeAxios";
import "../../../assets/css/AddEmployee.css";
function EditEmployee() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/accounts/${id}`);
        const dateOfBirth = dayjs(res.data.dateOfBirth, "DD/MM/YYYY");
        const startDate = dayjs(res.data.startDate, "DD/MM/YYYY");
        let role;
        if (res.data.role_id === 1) {
          role = "Financial Manager";
        } else {
          role = "Human Resources Manager";
        }
        form.setFieldsValue({
          fullName: res.data.fullName,
          role_id: role,
          dateOfBirth: dateOfBirth,
          gender: res.data.gender,
          address: res.data.address,
          phoneNumber: res.data.phoneNumber,
          email: res.data.email,
          startDate: startDate,
          salary: res.data.salary,
          status: res.data.status,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleReturn = () => {
    navigate("/employee");
  };
  const onFinish = async (values) => {
    const dateOfBirth = values.dateOfBirth.format("DD/MM/YYYY");
    const startDate = values.startDate.format("DD/MM/YYYY");
    const role = values.role_id === "Financial Manager" ? 1 : 2;
    try {
      const res = await axios.put(`/api/accounts/${id}`, {
        ...values,
        role_id: role,
        dateOfBirth: dateOfBirth,
        startDate: startDate,
      });
      if (res) {
        navigate("/employee");
        message.success("Sửa thành công");
      } else {
        message.error("Sửa thất bại");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="employee-wrapper">
      <h1 className="employee-title">Human Resources Management</h1>
      <div className="employee-container">
        <p className="employee-add">Edit Account</p>
        <div className="employee-form">
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
            //   onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Customer Name" name="fullName">
              <Input />
            </Form.Item>
            <Form.Item label="Role" name="role_id">
              <Select
                style={{ width: "100%" }}
                options={[
                  {
                    label: "Financial Manager",
                    value: "Financial Manager",
                  },
                  {
                    label: "Human Resources Manager",
                    value: "Human Resources Manager",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Date of birth" name="dateOfBirth">
              <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item label="Gender" name="gender">
              <Select
                style={{ width: "100%" }}
                options={[
                  {
                    label: "Male",
                    value: "Male",
                  },
                  {
                    label: "Female",
                    value: "Female",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>
            <Form.Item label="Phone Number" name="phoneNumber">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Start Date" name="startDate">
              <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item label="Salary" name="salary">
              <Input />
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Select
                style={{ width: "100%" }}
                options={[
                  {
                    label: "Active",
                    value: "Active",
                  },
                  {
                    label: "Inactive",
                    value: "Inactive",
                  },
                  {
                    label: "Closed",
                    value: "Closed",
                  },
                ]}
              />
            </Form.Item>
            <div className="employee-actions">
              <button onClick={handleReturn} className="employee-btn">
                Return
              </button>

              <Button className="employee-btn" type="primary" htmlType="submit">
                Confirm
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
