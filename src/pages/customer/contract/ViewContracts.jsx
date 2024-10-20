import { useEffect, useState } from "react";
import { Table, Modal, message } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import removeVietnameseTones from "../../../utils/RemoveVietnameseTones";
import "../../../assets/css/ViewContracts.css";
import axios from "../../../services/CustomizeAxios";
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
function ViewContracts() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedId, setSelectedId] = useState();

  const serviceNames = {
    1: "Maintenance service",
    2: "Device supply service",
  };

  const handleClickDetail = (record) => {
    navigate(`/contract/detail/${record.contract_id}`);
  };
  const handleAdd = () => {
    navigate("/contract/add");
  };

  const handleEdit = (record) => {
    navigate(`/contract/edit/${record.contract_id}`);
  };
  const handleOpenDeleteModal = (record) => {
    setIsModalOpen(true);
    setSelectedId(record.contract_id);
  };
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/contracts/${selectedId}`);
      if (res) {
        setIsModalOpen(false);
        message.success("Xóa thành công");
        setData(data.filter((item) => item.contract_id !== selectedId));
      } else {
        message.error("Xóa thất bại");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/contracts");
      if (res) {
        setData(res.data);
      } else {
        console.log("Lỗi");
      }
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
          removeVietnameseTones(serviceNames[item.service_id]).includes(
            removeVietnameseTones(searchValue)
          )
        )
      );
    }
  }, [searchValue]);

  const columns = [
    {
      title: "ID",
      dataIndex: "contract_id",
    },
    {
      title: "Service",
      dataIndex: "service_id",
      render: (service_id) => serviceNames[service_id],
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
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
        <div style={{ display: "flex", gap: "8px" }}>
          <Icon
            className="contract-icon--pointer"
            onClick={() => handleClickDetail(record)}
            icon="iconamoon:eye-thin"
          />
          <Icon
            className="contract-icon--pointer"
            onClick={() => handleEdit(record)}
            icon="mage:edit"
          />
          <Icon
            className="contract-icon--pointer"
            onClick={() => handleOpenDeleteModal(record)}
            icon="iconoir:xmark"
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="contract-wrapper">
        <h1 className="contract-title">Contract</h1>
        <div className="contract-container">
          <div className="contract-search">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="contract-search__input"
              type="text"
              placeholder="Enter keywords"
            />
          </div>

          <div className="contract-table">
            <div className="contract-table-action">
              <p className="contract-table-action__management">
                List of contracts
              </p>
              <button
                onClick={handleAdd}
                className="contract-table-action__add"
              >
                Add
              </button>
            </div>
            <Table
              rowKey={"contract_id"}
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

          {/* <div className="contract-footer">
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
        <div className="contract-delete-wrapper">
          <p className="contract-delete-title">Are you sure delete?</p>
          <div className="contract-delete-actions">
            <button
              onClick={() => setIsModalOpen(false)}
              className="contract-table-action__add"
            >
              No
            </button>
            <button
              onClick={handleDelete}
              className="contract-table-action__add"
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ViewContracts;
