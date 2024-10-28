import React, { useState } from "react";
import "./AddCandidates.css";
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
import { useNavigate } from "react-router-dom";
import {
  CloudUploadOutlined,
  DeleteOutlined,
  FileImageOutlined,
} from "@ant-design/icons";
dayjs.extend(customParseFormat);

const AddCandidates = () => {
  const navigate = useNavigate();

  const handleCandidates = () => {
    navigate("/candidates");
  };
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  return (
    <div>
      <h1 className="title-add-candidates">Manage Candidates</h1>
      <div className="add-candidates">
        <div className="image-input">
          <form onClick={() => document.querySelector(".input-field").click()}>
            <input
              type="file"
              accept="image/*"
              className="input-field"
              hidden
              onChange={({ target: { files } }) => {
                files[0] && setFileName(files[0].name);
                if (files) {
                  setImage(URL.createObjectURL(files[0]));
                }
              }}
            />
            {image ? (
              <img src={image} width={140} height={140} alt={fileName} />
            ) : (
              <CloudUploadOutlined className="icon-cloud" />
            )}
          </form>
          <section className="sec-file-name">
            <FileImageOutlined />
            <span className="upload-content">
              <div className="text-p">
                <p> {fileName}</p>
              </div>
              <DeleteOutlined
                onClick={() => {
                  setFileName("No selected file");
                  setImage(null);
                }}
              />
            </span>
          </section>
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
                  <Button
                    color="primary"
                    variant="solid"
                    onClick={handleCandidates}
                  >
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
