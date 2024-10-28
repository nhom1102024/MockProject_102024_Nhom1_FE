import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "../../../assets/css/Candidates.css";
import { AndroidOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Modal, Space, Table, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Candidates = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);
  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);
  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddCandidadtes = () => {
    navigate("/add-candidates");
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gmail",
      dataIndex: "gmail",
      key: "gmail",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Candidates Position",
      dataIndex: "candidates_position",
      key: "candidates_position",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Space size="small">
          <Button onClick={showModal} color="primary" variant="outlined">
            Edit
          </Button>
          <Button color="danger" variant="outlined">
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: 1,
      id: "1",
      image: <AndroidOutlined />,
      name: "Le Van A",
      gmail: "levana@gmail.com",
      phone: "0123456789",
      candidates_position: "Head of the partment",
      status: "Processing",
    },
    {
      key: 2,
      id: "2",
      image: <AndroidOutlined />,
      name: "Le Van A",
      gmail: "levana@gmail.com",
      phone: "0123456789",
      candidates_position: "Head of the partment",
      status: "Processing",
    },
    {
      key: 3,
      id: "3",
      image: <AndroidOutlined />,
      name: "Le Van A",
      gmail: "levana@gmail.com",
      phone: "0123456789",
      candidates_position: "Head of the partment",
      status: "Processing",
    },
    {
      key: 4,
      id: "4",
      image: <AndroidOutlined />,
      name: "Le Van A",
      gmail: "levana@gmail.com",
      phone: "0123456789",
      candidates_position: "Head of the partment",
      status: "Processing",
    },
    {
      key: 5,
      id: "5",
      image: <AndroidOutlined />,
      name: "Le Van A",
      gmail: "levana@gmail.com",
      phone: "0123456789",
      candidates_position: "Head of the partment",
      status: "Processing",
    },
  ];

  return (
    <div>
      <h1 className="title">Manage Candidates</h1>
      <div className="candidate">
        <h3>List of Candidates</h3>
        <div className="search-box">
          <div className="candidates-search">
            <input
              // value={searchValue}
              // onChange={(e) => setSearchValue(e.target.value)}
              className="candidates-search__input"
              type="text"
              placeholder="Enter keywords..."
            />
          </div>
          <button className="candidate-add" onClick={handleAddCandidadtes}>
            <p className="icon">
              <PlusOutlined />
            </p>
            Add
          </button>
        </div>

        <div className="table">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
      <div>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div>
            <h2>Detail Information</h2>
            <div>
              <Form
                form={form}
                name="horizontal_login"
                layout="inline"
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item shouldUpdate>
                  {() => (
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={
                        !clientReady ||
                        !form.isFieldsTouched(true) ||
                        !!form
                          .getFieldsError()
                          .filter(({ errors }) => errors.length).length
                      }
                    >
                      Log in
                    </Button>
                  )}
                </Form.Item>
              </Form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Candidates;
