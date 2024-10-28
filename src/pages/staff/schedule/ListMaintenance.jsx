import { useEffect, useState } from "react";
import { Table } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import _ from "lodash";
import removeVietnameseTones from "../../../utils/RemoveVietnameseTones";
import "../../../assets/css/ListMaintenance.css";
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
function ListMaintenance() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleViewSchedule = () => {
    navigate("/schedule/view");
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://6719c2d77fc4c5ff8f4e62b2.mockapi.io/api/maintenances"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "",
      dataIndex: "maintenance_id",
    },
    {
      title: "Customer",
      dataIndex: "employee_id",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Address",
      dataIndex: "gender",
    },
    {
      title: "Note",
      dataIndex: "note",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <a
          className="maintenance-actions"
          href={`/schedule/${record.maintenance_id}`}
        >
          Accept request
        </a>
      ),
    },
  ];
  return (
    <>
      <div className="maintenance-wrapper">
        <h1 className="maintenance-title">Maintenance Schedule</h1>
        <div className="maintenance-container">
          <div className="maintenance-search">
            <input
              className="maintenance-search__input"
              type="text"
              placeholder="Enter keywords..."
            />
          </div>

          <div className="maintenance-table">
            <div className="maintenance-table-action">
              <p className="maintenance-table-action__management">
                Maintenance Request
              </p>
              <button
                onClick={handleViewSchedule}
                className="maintenance-table-action__add"
              >
                View Schedule
              </button>
            </div>
            <Table
              rowKey={"id"}
              dataSource={data}
              columns={columns}
              pagination={{
                current: 1,
                total: 10,
                pageSize: 10,
                showSizeChanger: true,
                itemRender: itemRender,
                position: ["bottomCenter"],
                style: { marginTop: "64px" },
              }}
              // onChange={}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListMaintenance;
