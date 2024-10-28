import { useEffect, useState } from "react";
import { Table, Modal, message } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "../../../services/CustomizeAxios";
import _ from "lodash";
import removeVietnameseTones from "../../../utils/RemoveVietnameseTones";
import "../../../assets/css/ListEmployee.css";
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
function ListEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/employee/add");
  };

  const handleEdit = (record) => {
    navigate(`/employee/edit/${record.employee_id}`);
  };

  const handleShowDelete = (record) => {
    setIsModalOpen(true);
    setSelectedId(record.employee_id);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/accounts/${selectedId}`);
      if (res) {
        setIsModalOpen(false);
        setData(data.filter((item) => item.employee_id !== selectedId));
        message.success("Xóa thành công");
      } else {
        message.error("Xóa thất bại");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/accounts");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!searchValue.trim()) {
      fetchData();
    } else {
      const cloneData = _.cloneDeep(data);
      setData(
        cloneData.filter((item) =>
          removeVietnameseTones(item.fullName).includes(
            removeVietnameseTones(searchValue)
          )
        )
      );
    }
  }, [searchValue]);

  const columns = [
    {
      title: "",
      dataIndex: "employee_id",
    },
    {
      title: "Customer Name",
      dataIndex: "fullName",
    },
    {
      title: "Role",
      dataIndex: "role_id",
      render: (role_id) =>
        role_id === 1 ? "Financial Manager" : "Human Resources Manager",
    },
    {
      title: "Date of birth",
      dataIndex: "dateOfBirth",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Icon className="employee__icon" icon="iconamoon:eye-thin" />
          <Icon
            className="employee__icon"
            onClick={() => handleEdit(record)}
            icon="mage:edit"
          />
          <Icon
            className="employee__icon"
            onClick={() => handleShowDelete(record)}
            icon="iconoir:xmark"
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="employee-wrapper">
        <h1 className="employee-title">Human Resources Management</h1>
        <div className="employee-container">
          <div className="employee-search">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="employee-search__input"
              type="text"
              placeholder="Enter keywords..."
            />
          </div>

          <div className="employee-table">
            <div className="employee-table-action">
              <p className="employee-table-action__management">
                Management list
              </p>
              <button
                onClick={handleAdd}
                className="employee-table-action__add"
              >
                Add
              </button>
            </div>
            <Table
              rowKey={"employee_id"}
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
          {/* <div className="employee-footer">
            <button onClick={handleEdit} className="btn btn--action">
              Action
            </button>
            <button className="btn btn--lock">Lock</button>
          </div> */}
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
        <div className="employee-delete-wrapper">
          <p className="employee-delete-title">Are you sure delete?</p>
          <div className="employee-delete-actions">
            <button
              onClick={() => setIsModalOpen(false)}
              className="employee-table-action__add"
            >
              No
            </button>
            <button
              onClick={handleDelete}
              className="employee-table-action__add"
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ListEmployee;
