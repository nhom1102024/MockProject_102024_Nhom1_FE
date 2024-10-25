// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FineDetail.css"; // Sử dụng CSS để tùy chỉnh giao diện

const FineDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // Lấy dữ liệu từ state khi điều hướng

  if (!state || !state.fine) {
    return <div>No Fine Detail Available</div>;
  }

  const { fine } = state; // Chi tiết tiền phạt được truyền qua state

  return (
    <div className="fine-detail-container">
      <h2 className="fine-detail-title">Fine Detail</h2>
      <div className="fine-detail-content">
        <p>
          <strong>Fine ID:</strong> {fine.id}
        </p>
        <p>
          <strong>Resident Name:</strong> {fine.residentName}{" "}
          {/* Dùng tên từ API */}
        </p>
        <p>
          <strong>Violation Description:</strong> {fine.description}
        </p>
        <p>
          <strong>Date Issued:</strong> {fine.dateIssued}
        </p>
        <p>
          <strong>Amount:</strong> ${fine.amount}
        </p>
        <p>
          <strong>Due Date:</strong> {fine.dueDate}
        </p>
        <p>
          <strong>Payment Status:</strong> {fine.paymentStatus}
        </p>
        <p>
          <strong>Officer Name:</strong> {fine.officerName}{" "}
          {/* Dùng tên từ API */}
        </p>
        <p>
          <strong>Department:</strong> {fine.department}
        </p>
        <p>
          <strong>Contact:</strong> {fine.contact}
        </p>
      </div>
      <button className="fine-detail-cancel-btn" onClick={() => navigate(-1)}>
        Cancel
      </button>
    </div>
  );
};

export default FineDetail;
