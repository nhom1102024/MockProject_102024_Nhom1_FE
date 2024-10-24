import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "../../../assets/css/Candidates.css";
import {
  AndroidOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { message, Space, Table } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Candidates = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const handleDetail = (record) => {
  //   navigate("/details-candidates/${record.candidates_id}");
  // };

  //create
  const handleAddCandidates = () => {
    navigate("/add-candidates");
  };

  //delete
  const handleDeleteCandidates = async (candidates_id) => {
    try {
      await axios.delete(
        `https://6717a6b8b910c6a6e0294a3e.mockapi.io/candidate/${candidates_id}`
      );
      message.success("Candidates deleted successfully");
      fetchData();
    } catch (error) {
      console.log(error);
      message.error("Failed to delete holiday");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://6717a6b8b910c6a6e0294a3e.mockapi.io/candidate`
      );
      if (res) {
        setData(data);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
      message.error("Failed loading data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
          <div style={{ display: "flex", gap: "8px" }}>
            <Icon
              className="employee__icon"
              icon="iconamoon:eye-thin"
              // onClick={handleDetail(record)}
            />
            <Icon
              className="employee__icon"
              // onClick={() => handleEdit(record)}
              icon="mage:edit"
            />
            <Icon
              className="employee__icon"
              onClick={() => handleDeleteCandidates(record.candidates_id)}
              icon="iconoir:xmark"
            />
          </div>
        </Space>
      ),
    },
  ];

  // const data = [
  //   {
  //     key: 1,
  //     id: "1",
  //     image: <AndroidOutlined />,
  //     name: "Le Van A",
  //     gmail: "levana@gmail.com",
  //     phone: "0123456789",
  //     candidates_position: "Head of the partment",
  //     status: "Processing",
  //   },
  //   {
  //     key: 2,
  //     id: "2",
  //     image: <AndroidOutlined />,
  //     name: "Le Van A",
  //     gmail: "levana@gmail.com",
  //     phone: "0123456789",
  //     candidates_position: "Head of the partment",
  //     status: "Processing",
  //   },
  //   {
  //     key: 3,
  //     id: "3",
  //     image: <AndroidOutlined />,
  //     name: "Le Van A",
  //     gmail: "levana@gmail.com",
  //     phone: "0123456789",
  //     candidates_position: "Head of the partment",
  //     status: "Processing",
  //   },
  //   {
  //     key: 4,
  //     id: "4",
  //     image: <AndroidOutlined />,
  //     name: "Le Van A",
  //     gmail: "levana@gmail.com",
  //     phone: "0123456789",
  //     candidates_position: "Head of the partment",
  //     status: "Processing",
  //   },
  //   {
  //     key: 5,
  //     id: "5",
  //     image: <AndroidOutlined />,
  //     name: "Le Van A",
  //     gmail: "levana@gmail.com",
  //     phone: "0123456789",
  //     candidates_position: "Head of the partment",
  //     status: "Processing",
  //   },
  // ];

  return (
    <div>
      <h1 className="title">Manage Candidates</h1>
      <div className="candidate">
        <h3>List of Candidates</h3>
        <div className="search-box">
          <div className="boxx">
            <input type="text" placeholder="Enter keywords..." />
            <SearchOutlined />
          </div>
          <button onClick={handleAddCandidates}>
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
    </div>
  );
};

export default Candidates;
