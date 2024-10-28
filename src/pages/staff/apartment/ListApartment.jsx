import { useEffect, useState } from "react";
import { Table, Pagination, Modal, Form, Input, Radio } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ListApartment.css";

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
function ListApartment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/staff/apartment/add");
  };

  const handleEdit = (record) => {
    navigate(`/staff/apartment/edit/${record.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://67137ecf6c5f5ced66269a9d.mockapi.io/api/listapartment"
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
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Work Done",
      dataIndex: "workdone",
      key: "workdone",
    },
    {
      title: "Contractor",
      dataIndex: "contractor",
      key: "contractor",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
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
      <div className="apartment-wrapper">
        <h1 className="apartment-title">Building Information</h1>
        <div className="apartment-container">
          <div className="apartment-table">
            <div className="apartment-table-action">
              <p className="apartment-table-action__management">Edit</p>
              <div className="apartment-form">
                <Form
                  name="form"
                  colon={false}
                  labelCol={{
                    span: 5,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{ width: 800 }}
                  layout={"horizontal"}
                  autoComplete="off"
                  initialValues={{
                    status: "occupied",
                    area: "Toronto",
                    price: "1000",
                    tenant: "John Doe",
                  }}
                >
                  <div className="row">
                    <div className="col">
                      <Form.Item label="Area: " name="area">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Status: " name="status">
                        <Radio.Group>
                          <Radio value="occupied">Occupied</Radio>
                          <Radio value="available">Available</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </div>
                    <div className="col">
                      <Form.Item label="Rent Price: " name="price">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Tenant: " name="tenant">
                        <Input />
                      </Form.Item>
                    </div>
                  </div>
                  <Form.Item label="Room Design Documents: " name="room_doc">
                    <div className="design-upload">
                      <a className="upload-btn">
                        <Icon icon="material-symbols:upload" />
                        Upload
                      </a>
                      <a href="your-link-here" className="view-link">
                        View link
                      </a>
                    </div>
                  </Form.Item>
                  <Form.Item label="Notes on current Status: " name="notes">
                    <Input />
                  </Form.Item>
                  <div className="apartment-actions">
                    <button className="apartment-btn">Return</button>
                    <button className="apartment-btn">Edit</button>
                  </div>
                </Form>
              </div>
            </div>
            <p className="apartment-table-action__management">
              Room Maintenance History
            </p>
            <button onClick={handleAdd} className="apartment-table-action__add">
              Add
            </button>
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
              className="apartment-table-action__add"
            >
              No
            </button>
            <button className="apartment-table-action__add">Yes</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ListApartment;
