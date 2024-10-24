// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/admin/Header.jsx";
import "./AddContract.css";

const AddContract = () => {
  const [contractData, setContractData] = useState({
    name: "",
    employee: "",
    fileContract: null,
    companyMaintenance: "",
    issuedBy: "",
    issuedDate: "",
    endDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContractData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setContractData((prevData) => ({
      ...prevData,
      fileContract: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu hợp đồng mới:", contractData);

    navigate("/list-employee-contract");
  };

  return (
    <div className="homepage">
      <div className="main-layout">
        <div className="right-section">
          <HeaderAdmin /> {}
          <div className="tab-header">
            <span className="tab-title">Add Contract</span>
          </div>
          <div className="content">
            <div className="form-container">
              <p className="form-title">New Contract</p>
              <form className="contract-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contractData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="employee">Employee:</label>
                  <input
                    type="text"
                    id="employee"
                    name="employee"
                    value={contractData.employee}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fileContract">File Contract:</label>
                  <input
                    type="file"
                    id="fileContract"
                    name="fileContract"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="companyMaintenance">
                    Company Maintenance:
                  </label>
                  <input
                    type="text"
                    id="companyMaintenance"
                    name="companyMaintenance"
                    value={contractData.companyMaintenance}
                    onChange={handleChange}
                    placeholder="Enter company maintenance"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="issuedBy">Issued By:</label>
                  <input
                    type="text"
                    id="issuedBy"
                    name="issuedBy"
                    value={contractData.issuedBy}
                    onChange={handleChange}
                    placeholder="Enter issued by"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="issuedDate">Issued Date:</label>
                  <input
                    type="date"
                    id="issuedDate"
                    name="issuedDate"
                    value={contractData.issuedDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="endDate">End Date:</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={contractData.endDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="button-group">
                  <button
                    type="button"
                    className="btn-return"
                    onClick={() => navigate("/list-employee-contract")}
                  >
                    Return
                  </button>
                  <button type="submit" className="btn-confirm">
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContract;
