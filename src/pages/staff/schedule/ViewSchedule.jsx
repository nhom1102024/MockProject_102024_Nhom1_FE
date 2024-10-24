import { useState, useEffect } from "react";
import { Badge, Calendar } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../assets/css/ViewSchedule.css";
function ViewSchedule() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/schedule");
  };

  useEffect(() => {
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
    fetchData();
  }, []);
  const getListData = (value) => {
    const formattedDate = value.format("DD/MM/YYYY");
    return data.filter((item) => item.startDate === formattedDate);
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.maintenance_id}>
            <Badge status={item.status} text={item.nameMaintenance} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="maintenance-wrapper">
        <h1 className="maintenance-title">Maintenance Schedule</h1>
        <div className="maintenance-container">
          <div className="maintenance-search">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="maintenance-search__input"
              type="text"
              placeholder="Enter keywords"
            />
            <button
              className="maintenance-search__return"
              onClick={handleReturn}
            >
              Return
            </button>
          </div>
          <div className="maintenance-table">
            <div>
              <p className="maintenance-table__title">Maintenance Schedule</p>
            </div>
            <div>
              <Calendar
                cellRender={dateCellRender}
                headerRender={({ value }) => {
                  const currentMonth = dayjs(value).format("MMMM");
                  const currentYear = dayjs(value).format("YYYY");
                  return (
                    <div style={{ padding: 10, textAlign: "center" }}>
                      <h2>{`${currentMonth} ${currentYear}`}</h2>
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewSchedule;
