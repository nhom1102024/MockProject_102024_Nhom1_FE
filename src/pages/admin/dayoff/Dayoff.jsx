import React from "react";
import "../../../assets/css/Dayoff.css";
import { Select, Space, Table } from "antd";
import { AndroidOutlined, ChromeOutlined } from "@ant-design/icons";

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
    title: "Staff",
    dataIndex: "staff",
    key: "staff",
  },
  {
    title: "Departments",
    dataIndex: "departments",
    key: "departments",
  },
  {
    title: "Jobs shift",
    dataIndex: "jobs_shift",
    key: "jobs_shift",
  },
  {
    title: "Register for a holiday",
    dataIndex: "register_holiday",
    key: "register_holiday",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: 1,
    id: "1",
    image: <AndroidOutlined />,
    staff: "Le Van A",
    departments: "Housekepping",
    jobs_shift: "Morning",
    register_holiday: "10/10/2024 - 12/10/2024",
  },
  {
    key: 2,
    id: "2",
    image: <AndroidOutlined />,
    staff: "Le Van A",
    departments: "Housekepping",
    jobs_shift: "Morning",
    register_holiday: "10/10/2024 - 12/10/2024",
  },
  {
    key: 3,
    id: "3",
    image: <AndroidOutlined />,
    staff: "Le Van A",
    departments: "Housekepping",
    jobs_shift: "Morning",
    register_holiday: "10/10/2024 - 12/10/2024",
  },
  {
    key: 4,
    id: "4",
    image: <AndroidOutlined />,
    staff: "Le Van A",
    departments: "Housekepping",
    jobs_shift: "Morning",
    register_holiday: "10/10/2024 - 12/10/2024",
  },
  {
    key: 5,
    id: "5",
    image: <AndroidOutlined />,
    staff: "Le Van A",
    departments: "Housekepping",
    jobs_shift: "Morning",
    register_holiday: "10/10/2024 - 12/10/2024",
  },
];
const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

const Dayoff = () => {
  return (
    <div>
      <h1 className="title">Manage Dayoff</h1>
      <div className="dayoff">
        <div className="d_header">
          <div className="g_date">
            <label className="l_date">Workday </label>
            <input type="date" className="i_date" />
          </div>
          <div className="g_status">
            <label className="l_status">Status</label>
            {/* <input type="text" className="i_status" /> */}
            <Select
              className="s_drop"
              labelInValue
              defaultValue={{
                value: "All",
                label: "All",
              }}
              style={{
                width: 120,
              }}
              dropdownStyle={{ border: "none" }}
              onChange={handleChange}
              options={[
                {
                  value: "how",
                  label: "how",
                },
                {
                  value: "about",
                  label: "about",
                },
                {
                  value: "me",
                  label: "me",
                },
              ]}
            />
          </div>
        </div>
        <div className="employee-search">
          <input
            // value={searchValue}
            // onChange={(e) => setSearchValue(e.target.value)}
            className="employee-search__input"
            type="text"
            placeholder="Enter keywords"
          />
        </div>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default Dayoff;
