import { Table, Pagination } from "antd";
import { Icon } from "@iconify/react";
import "./ListEmployee.css";
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
  const dataSource = [
    {
      id: "932385",
      name: "John Doe",
      date: "1/10/1987",
      nationality: "USA",
      phone: "",
      position: "Admin",
      status: "Active",
    },
    {
      id: "932385",
      name: "John Doe",
      date: "1/10/1987",
      nationality: "USA",
      phone: "",
      position: "Admin",
      status: "Active",
    },
    {
      id: "932385",
      name: "John Doe",
      date: "1/10/1987",
      nationality: "USA",
      phone: "",
      position: "Admin",
      status: "Active",
    },
    {
      id: "932385",
      name: "John Doe",
      date: "1/10/1987",
      nationality: "USA",
      phone: "",
      position: "Admin",
      status: "Active",
    },
  ];

  const columns = [
    {
      title: "",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date of birth",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: "Phone number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
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
          <Icon icon="iconamoon:eye-thin" />
          <Icon icon="material-symbols-light:download" />
          <Icon icon="iconoir:xmark" />
        </div>
      ),
    },
  ];
  return (
    <div className="employee-wrapper">
      <h1 className="employee-title">Human Resources Management</h1>
      <div className="employee-container">
        <div className="employee-search">
          <input
            className="employee-search__input"
            type="text"
            placeholder="Enter keywords"
          />
        </div>

        <div className="employee-table">
          <div className="employee-table-action">
            <p className="employee-table-action__management">Management list</p>
            <button className="employee-table-action__add">Add</button>
          </div>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
        <Pagination
          style={{ marginTop: "64px" }}
          align="center"
          defaultCurrent={1}
          total={50}
          itemRender={itemRender}
        />
        <div className="employee-footer">
          <button className="btn btn--action">Action</button>
          <button className="btn btn--lock">Lock</button>
        </div>
      </div>
    </div>
  );
}

export default ListEmployee;
