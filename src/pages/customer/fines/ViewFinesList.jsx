// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios"; // Import axios
import "./ViewFinesList.css"; // Sử dụng CSS tương tự

const ViewFinesList = () => {
  const navigate = useNavigate(); // Khởi tạo useNavigate
  const [fines, setFines] = useState([]); // Khởi tạo state cho dữ liệu từ API
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // State cho tìm kiếm
  const itemsPerPage = 9; // Số lượng mục trên mỗi trang

  // Gọi API để lấy dữ liệu từ MockAPI
  useEffect(() => {
    const fetchFines = async () => {
      try {
        const response = await axios.get(
          "https://671911ce7fc4c5ff8f4c5006.mockapi.io/api/viewfineslist"
        );
        setFines(response.data); // Cập nhật dữ liệu vào state fines
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };

    fetchFines();
  }, []);

  // Lọc dữ liệu dựa trên từ khóa tìm kiếm
  const filteredFines = fines.filter((fine) =>
    fine.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Tính tổng số trang
  const totalPages = Math.ceil(filteredFines.length / itemsPerPage);

  // Lấy dữ liệu hiện tại dựa trên trang hiện tại
  const currentData = filteredFines.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Hàm xử lý nút "Previous"
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Hàm xử lý nút "Next"
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <h1 className="header-title">List of Fines</h1>

      {/* Thanh tìm kiếm */}
      <div className="search-filter">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật giá trị tìm kiếm
        />
      </div>

      <table className="fines-table">
        <thead>
          <tr>
            <th>Fine ID</th>
            <th>Violation Description</th>
            <th>Date Issued</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((fine) => (
            <tr key={fine.id}>
              <td>{fine.id}</td>
              <td>{fine.description}</td>
              <td>{fine.dateIssued}</td>
              <td>${fine.amount}</td>
              <td>{fine.dueDate}</td>
              <td>{fine.paymentStatus}</td>
              <td>
                <button
                  className="detail-link"
                  onClick={() =>
                    navigate(`/fine-detail/${fine.id}`, { state: { fine } })
                  }
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phân trang giống với phần ListEmployeeContract */}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          ← Previous
        </button>
        <span>
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index + 1}
              className={`page-number ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </span>
          ))}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default ViewFinesList;
