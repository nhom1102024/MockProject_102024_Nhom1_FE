import { useEffect } from "react";
import { Form, Input, message, Select, DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import axios from "../../../services/CustomizeAxios";
import { useNavigate, useParams } from "react-router-dom";
import "../../../assets/css/Addcontract.css";
function Editcontract() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/contracts/${id}`);
        const startDate = dayjs(res.data.startDate, "DD/MM/YYYY");
        const endDate = dayjs(res.data.endDate, "DD/MM/YYYY");
        let service;
        if (res.data.service_id === 1) {
          service = "Maintenance service";
        } else {
          service = "Device supply service";
        }
        if (res) {
          form.setFieldsValue({
            service_id: service,
            startDate: startDate,
            endDate: endDate,
            contractTerms: res.data.contractTerms,
            specialTerms: res.data.specialTerms,
            amount: res.data.amount,
          });
        } else {
          console.log("Lỗi");
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
    let service;
    if (values.service_id === "Maintenance service") {
      service = 1;
    } else {
      service = 2;
    }
    try {
      const res = await axios.put(`/api/contracts/${id}`, {
        ...values,
        service_id: service,
        startDate: startDate,
        endDate: endDate,
      });
      if (res) {
        navigate("/contract");
        message.success("Cập nhật thành công");
      } else {
        message.error("Cập nhật thất bại");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    navigate("/contract");
  };
  return (
    <div className="contract-wrapper">
      <h1 className="contract-title">Contract</h1>
      <div className="contract-container">
        <p className="contract-add">Edit Contract</p>
        <div className="contract-form">
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

export default Editcontract;
