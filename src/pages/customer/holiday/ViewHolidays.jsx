import React, { useEffect, useState } from "react";
import "../../../assets/css/Holiday.css";
import { Table, message } from "antd";
import { Icon } from "@iconify/react";
import axios from "axios";

const ViewHolidays = () => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
      render: (text, record) => (
        <a onClick={() => handleDelete(record.id)}>Delete</a> // Gọi hàm delete
      ),
    },
  ];

  //create
  const postData = async () => {
    try {
      const res = await axios.post(
        `https://6717a6b8b910c6a6e0294a3e.mockapi.io/holiday`,
        {
          date,
          description,
        }
      );
      message.success("Holiday added successfully");
      setDate("");
      setDescription("");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  //read

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://6717a6b8b910c6a6e0294a3e.mockapi.io/holiday`
      );
      if (res) {
        setData(res.data);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
      message.error("Failed to load Holiday");
    } finally {
      setLoading(false);
    }
  };

  //delete
  const handleDelete = async (holiday_id) => {
    try {
      await axios.delete(
        `https://6717a6b8b910c6a6e0294a3e.mockapi.io/holiday/${holiday_id}`
      );
      message.success("Holiday deleted succesfully");
      fetchData();
    } catch (error) {
      console.log(error);
      message.error("Failed to delete holiday");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="title">Register for a Holiday</h1>
      <div className="holiday">
        <div>
          <div className="header_i">
            <div className="s_date">
              <label className="l_date">Select Date: </label>
              <input
                type="date"
                className="i_date"
                value={date} //bind value to state
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="des">
              <label className="l_des">Describe: </label>
              <input
                type="text"
                className="i_des"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <button className="b_holiday" type="submit" onClick={postData}>
            Submit
          </button>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            loading={loading}
            rowKey="holiday_id"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewHolidays;
