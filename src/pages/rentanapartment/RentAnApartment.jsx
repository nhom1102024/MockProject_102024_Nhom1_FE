// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./RentAnApartment.css";
import buildingImage from "../../assets/image/building.jpg";

const ApartmentRent = () => {
  const location = useLocation(); // Lấy thông tin location
  const { apartment } = location.state || {}; // Lấy thông tin căn hộ từ state

  return (
    <div className="apartment-rent-container">
      <div className="apartment-rent-header">
        <h1>Rent an Apartment</h1>
      </div>
      <div className="apartment-rent-content">
        <div className="apartment-rent-card">
          <img
            className="apartment-rent-image"
            src={apartment?.image || buildingImage} // Sử dụng ảnh từ căn hộ
            alt="Apartment"
          />
          <div className="apartment-rent-info">
            <h2>{apartment?.name || "Apartment C101"}</h2>{" "}
            {/* Hiển thị tên căn hộ */}
            <p>
              <strong>Rent:</strong> ${apartment?.rent || "5,500"}
            </p>
            <p>
              <strong>Square Feet:</strong> {apartment?.size || "1,518"}
            </p>
            <p>
              <strong>Bed / Bath:</strong> {apartment?.bed || "3"} bd /{" "}
              {apartment?.bath || "2"} ba
            </p>
            <p>
              <strong>Available:</strong> {apartment?.available || "Now"}
            </p>
          </div>
          <div className="apartment-rent-pet-policy">
            <h3>Pet Policy</h3>
            <ul>
              <li>Cats not allowed</li>
              <li>Dogs not allowed</li>
            </ul>
          </div>
        </div>

        <div className="apartment-rent-form">
          <h2>Introduction</h2>
          <p>
            Welcome to this beautifully maintained {apartment?.bed} bedroom,{" "}
            {apartment?.bath} bathroom apartment.
          </p>

          <form>
            <div className="apartment-rent-form-group">
              <label>Apartment: </label>
              <span>{apartment?.name || "C101"}</span>
            </div>
            <div className="apartment-rent-form-group">
              <label>Name of scheduler: </label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="apartment-rent-form-group">
              <label>Phone number: </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="apartment-rent-form-group">
              <label>Email: </label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="apartment-rent-form-group">
              <label>Date: </label>
              <input type="date" required />
            </div>
            <button type="submit" className="apartment-rent-btn-submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApartmentRent;
