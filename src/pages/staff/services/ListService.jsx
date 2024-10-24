import { useEffect, useState } from "react";
import { Table, Pagination, Modal } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ListService.css";

const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return (
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <Icon icon="ri:arrow-left-line" />
        <a style={{ marginLeft: "12px", color: "#000" }}>Previous</a>
      </div>
    );
  }
  if (type === "next") {
    return (
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <a style={{ marginRight: "12px", color: "#000" }}>Next</a>
        <Icon icon="ri:arrow-right-line" />
      </div>
    );
  }
  return originalElement;
};
function ListService() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/staff/services/add");
  };

  const handleEdit = (record) => {
    navigate(`/staff/services/edit/${record.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://671919fd7fc4c5ff8f4c710e.mockapi.io/ServiceList"
        );

        if (res.data && res.status === 200) {
          setData(res.data);
        } else {
          console.log("Không có data");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Service Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Service fee/month",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Customers",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Icon onClick={() => handleEdit(record)} icon="lucide:edit" />
          <Icon onClick={() => setIsModalOpen(true)} icon="tabler:trash" />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="service-wrapper">
        <h1 className="service-title">Service Management</h1>
        <div className="service-container">
          <div className="service-search">
            <input
              className="service-search__input"
              type="text"
              placeholder="Enter keywords"
            />
          </div>

          <div className="service-table">
            <div className="service-table-action">
              <p className="service-table-action__management">Service List</p>
              <button onClick={handleAdd} className="service-table-action__add">
                Add
              </button>
            </div>
            <Table
              rowKey={"id"}
              dataSource={data}
              columns={columns}
              pagination={false}
            />
          </div>
          <Pagination
            style={{ marginTop: "64px" }}
            align="center"
            defaultCurrent={1}
            total={50}
            itemRender={itemRender}
          />
        </div>
      </div>
      <Modal
        style={{
          top: 60,
        }}
        open={isModalOpen}
        getContainer={false}
        footer={false}
        closable={false}
      >
        <div className="delete-wrapper">
          <p className="delete-title">Are you sure delete?</p>
          <div className="delete-actions">
            <button
              onClick={() => setIsModalOpen(false)}
              className="service-table-action__add"
            >
              No
            </button>
            <button className="service-table-action__add">Yes</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ListService;
