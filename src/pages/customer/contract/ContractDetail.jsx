import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../services/CustomizeAxios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../../../assets/css/ContractDetail.css";
function ContractDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/contracts/${id}`);
        if (res) {
          setData([res.data]);
        } else {
          console.log("Lỗi");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const exportPDF = async () => {
    const input = document.getElementById("contract-detail-body");
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("contract.pdf");
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="contract-detail-wrapper">
          <p className="contract-detail-title">Contract</p>
          <div className="contract-detail-container">
            <div id="contract-detail-body">
              <div className="contract-detail-body-container">
                <p className="contract-detail__id">
                  Contract #HD{item.contract_id}
                </p>
                <div className="contract-detail-info">
                  <p className="contract-info-value">
                    <span className="contract-info-label">Service:</span>
                    <span>
                      {item.service_id === 1
                        ? "Maintenance service"
                        : "Device supply service"}
                    </span>
                  </p>
                  <p className="contract-info-value">
                    <span className="contract-info-label">Start Date:</span>
                    <span>{item.startDate}</span>
                  </p>
                  <p className="contract-info-value">
                    <span className="contract-info-label">End Date:</span>
                    <span>{item.endDate}</span>
                  </p>
                  <p className="contract-info-value">
                    <span className="contract-info-label">Contract value:</span>
                    <span>{item.amount}</span>
                  </p>
                  <p className="contract-info-value">
                    <span className="contract-info-label">Status:</span>
                    <span>{item.status}</span>
                  </p>
                  <p className="contract-info-value">
                    <span className="contract-info-label">
                      Contracting Party A:
                    </span>
                    <span>John</span>
                  </p>
                  <p className="contract-info-value">
                    <span className="contract-info-label">
                      Contracting Party B:
                    </span>
                    <span>John Doe</span>
                  </p>
                </div>
                <div className="contract-detail-line"></div>
                <div className="contract-detail-terms">
                  <div className="contract-detail-terms-container">
                    <p className="contract-detail-terms-title">
                      Contract Terms
                    </p>
                    <div className="contract-detail-terms-list">
                      <ul>
                        <li>
                          <p>{item.contractTerms}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="contract-detail-terms-container">
                    <p className="contract-detail-terms-title">Special Terms</p>
                    <div className="contract-detail-terms-list">
                      <ul>
                        <li>
                          <p>{item.specialTerms}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contract-detail-action-wrapper">
              <div className="contract-detail-terms-container">
                <p className="contract-detail-terms-title">Related Documents</p>
                <div className="contract-detail-actions">
                  <button onClick={exportPDF} className="contract-detail-btn ">
                    Download Contract (PDF)
                  </button>
                  <button className="contract-detail-btn ">
                    Maintenance Reports
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ContractDetail;
