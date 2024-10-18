import React from "react";
import "./r_Holiday.css";
import { Table } from "antd";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Describe",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    date: "17/02/2024",
    description: "hihi",
  },
  {
    key: 2,
    date: "17/02/2024",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    date: "17/02/2024",
    description: "This not expandable",
  },
];

const r_holiday = () => {
  return (
    <div>
      <h1 className="title">Register for a Holiday</h1>
      <div className="holiday">
        <div>
          <div className="header_i">
            <div className="s_date">
              <label className="l_date">Select Date: </label>
              <input type="date" className="i_date" />
            </div>
            <div className="des">
              <label className="l_des">Describe: </label>
              <input type="text" className="i_des" />
              {/* <textarea name="i_des" id="" className="i_des"></textarea> */}
            </div>
          </div>
          <button className="b_holiday">Submit</button>
        </div>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default r_holiday;
