import { Form, Input, message, Select, DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { useNavigate } from "react-router-dom";
import axios from "../../../services/CustomizeAxios";
import "../../../assets/css/Addcontract.css";
function Addcontract() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/contract");
  };
  const onFinish = async (values) => {
    const startDate = values.startDate.format("DD/MM/YYYY");
    const endDate = values.endDate.format("DD/MM/YYYY");
    let service;
    if (values.service_id === "Maintenance service") {
      service = 1;
    } else {
      service = 2;
    }
    try {
      const res = await axios.post("/api/contracts", {
        ...values,
        service_id: service,
        startDate: startDate,
        endDate: endDate,
      });
      if (res) {
        navigate("/contract");
        message.success("Thêm thành công");
      } else {
        message.error("Thêm thất bại");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contract-wrapper">
      <h1 className="contract-title">Contract</h1>
      <div className="contract-container">
        <p className="contract-add">Add Contract</p>
        <div className="contract-form">
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
            <Form.Item label="Service" name="service_id">
              <Select
                style={{ width: "100%" }}
                options={[
                  {
                    label: "Maintenance service",
                    value: "Maintenance service",
                  },
                  {
                    label: "Device supply service",
                    value: "Device supply service",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Start Date" name="startDate">
              <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item label="End Date" name="endDate">
              <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item label="Contract Terms" name="contractTerms">
              <Input />
            </Form.Item>
            <Form.Item label="Special Terms" name="specialTerms">
              <Input />
            </Form.Item>
            <Form.Item label="Amount" name="amount">
              <Input />
            </Form.Item>
            <Form.Item
              label="Status"
              name="status"
              initialValue="Active"
              hidden
            >
              <Input />
            </Form.Item>
            <div className="contract-actions">
              <button onClick={handleBack} className="contract-btn">
                Return
              </button>
              <button className="contract-btn">Confirm</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Addcontract;
