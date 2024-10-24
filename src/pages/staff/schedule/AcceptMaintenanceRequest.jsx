import { useNavigate, useParams } from "react-router-dom";
import { Form, Select, Input, DatePicker, Button, message } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import "../../../assets/css/AcceptMaintenanceRequest.css";
import { useEffect } from "react";
import axios from "axios";
function AcceptMaintenanceRequest() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleReturn = () => {
    navigate("/schedule");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://6719c2d77fc4c5ff8f4e62b2.mockapi.io/api/maintenances/${id}`
        );
        if (res) {
          const startDate = dayjs(res.data.startDate, "DD/MM/YYYY");
          const endDate = dayjs(res.data.endDate, "DD/MM/YYYY");
          form.setFieldsValue({
            employee_id: res.data.employee_id,
            description: res.data.description,
            address: "181 Thanh thuy",
            note: res.data.note,
            nameMaintenance: res.data.nameMaintenance,
            startDate: startDate,
            endDate: endDate,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onFinish = async (values) => {
    const startDate = values.startDate.format("DD/MM/YYYY");
    const endDate = values.endDate.format("DD/MM/YYYY");
    try {
      const res = await axios.put(
        `https://6719c2d77fc4c5ff8f4e62b2.mockapi.io/api/maintenances/${id}`,
        {
          ...values,
          startDate: startDate,
          endDate: endDate,
        }
      );
      if (res) {
        navigate("/schedule");
        message.success("Accept success");
      } else {
        message.error("Accept fail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="maintenance-wrapper">
        <h1 className="maintenance-title">Maintenance Schedule</h1>
        <div className="maintenance-container">
          <p className="maintenance-container__title">
            Accept Maintenance Request
          </p>
          <div className="maintenance-form">
            <Form
              name="form"
              form={form}
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
              <Form.Item label="Customer Name" name="employee_id">
                <Input disabled />
              </Form.Item>

              <Form.Item label="Request" name="description">
                <Input disabled />
              </Form.Item>
              <Form.Item label="Address" name="address">
                <Input disabled />
              </Form.Item>
              <Form.Item label="Note" name="note">
                <Input disabled />
              </Form.Item>
              <Form.Item label="Maintenance service" name="nameMaintenance">
                <Select
                  style={{ width: "100%" }}
                  options={[
                    {
                      label: "Air Conditioner",
                      value: "Air Conditioner",
                    },
                    {
                      label: "Heater",
                      value: "Heater",
                    },
                    {
                      label: "Elevator",
                      value: "Elevator",
                    },
                    {
                      label: "Generator",
                      value: "Generator",
                    },
                    {
                      label: "Plumbing Check",
                      value: "Plumbing Check",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Start date" name="startDate">
                <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
              </Form.Item>
              <Form.Item label="End date" name="endDate">
                <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
              </Form.Item>
              <Form.Item label="Status" name="status">
                <Select
                  style={{ width: "100%" }}
                  options={[
                    {
                      label: "error",
                      value: "error",
                    },
                    {
                      label: "processing",
                      value: "processing",
                    },
                    {
                      label: "success",
                      value: "success",
                    },
                  ]}
                />
              </Form.Item>

              <div className="maintenance-actions">
                <button onClick={handleReturn} className="maintenance-btn">
                  Return
                </button>

                <Button
                  className="maintenance-btn"
                  type="primary"
                  htmlType="submit"
                >
                  Accept
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcceptMaintenanceRequest;
