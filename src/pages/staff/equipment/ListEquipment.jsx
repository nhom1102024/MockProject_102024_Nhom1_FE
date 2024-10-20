import { useEffect, useState } from "react";
import { Table, Pagination, Modal } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ListEquipment.css";

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
function ListEquipment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/staff/equipment/add");
  };

  const handleEdit = (record) => {
    navigate(`/staff/equipment/edit/${record.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://67137ecf6c5f5ced66269a9d.mockapi.io/api/listequipment"
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
      title: "",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "System",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Scheduled Maintenance",
      dataIndex: "scheduled",
      key: "scheduled",
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
      <div className="equipment-wrapper">
        <h1 className="equipment-title">Technical Systems</h1>
        <div className="equipment-container">
          <div className="equipment-search">
            <input
              className="equipment-search__input"
              type="text"
              placeholder="Enter keywords"
            />
          </div>

          <div className="equipment-table">
            <div className="equipment-table-action">
              <p className="equipment-table-action__management">
                Technical Systems
              </p>
              <button
                onClick={handleAdd}
                className="equipment-table-action__add"
              >
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
              className="equipment-table-action__add"
            >
              No
            </button>
            <button className="equipment-table-action__add">Yes</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ListEquipment;
