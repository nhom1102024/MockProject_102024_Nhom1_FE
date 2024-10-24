import React from "react";
import "../../../assets/css/AddCandidates.css";
import {
  Button,
  ConfigProvider,
  DatePicker,
  Flex,
  Form,
  Input,
  Radio,
  Select,
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const AddCandidates = () => {
  return (
    <div>
      <h1 className="title-add">Manage Candidates</h1>
      <div className="candidate-add">
        <div className="image-input">
          <img src="#" />
        </div>
        <div>
          <Form
            name="form"
            colon={false}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 18,
            }}
            style={{ width: 800 }}
            layout={"horizontal"}
            // onFinish={onFinish}
            //   onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Full Name" name="fullName">
              <Input />
            </Form.Item>
            <Form.Item label="Sex" name="sex">
              <Flex vertical gap="middle">
                <Radio.Group
                  block
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
                  defaultValue="Male"
                />
              </Flex>
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Identifier" name="identifier">
              <Input />
            </Form.Item>
            <Form.Item label="Date of birth" name="dateOfBirth">
              <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>

            <Form.Item label="Work Experience" name="workexp">
              <Input />
            </Form.Item>

            <Form.Item label="Status" name="status" initialValue="Active">
              <Select
                // style={{ width: "100%" }}
                options={[
                  { label: "Active", value: "Active" },
                  { label: "Inactive", value: "Inactive" },
                  { label: "Pending", value: "Pending" },
                ]}
              />
            </Form.Item>
            <div className="button-can">
              <ConfigProvider componentSize={"small"}>
                <Flex gap="small" wrap>
                  <Button color="primary" variant="solid">
                    Browser
                  </Button>
                  <Button color="danger" variant="solid">
                    Remove
                  </Button>
                </Flex>
              </ConfigProvider>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddCandidates;
