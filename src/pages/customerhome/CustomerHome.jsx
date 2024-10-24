// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CustomerHome.css";
import buildingImage from "../../assets/image/building.jpg";

const CustomerHome = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const fetchApartments = async () => {
    try {
      const response = await axios.get(
        "https://6711ba674eca2acdb5f58cfd.mockapi.io/api/apartments"
      );
      setApartments(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching apartments:", error);
      setError("Unable to fetch apartments data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, []);

  if (loading) {
    return <div>Loading apartments...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleRentalClick = (apartment) => {
    navigate("/rent-anapartment", { state: { apartment } }); // Chuyển thông tin căn hộ
  };

  return (
    <div>
      <h1 className="header-title">Home Page</h1>
      <div className="apartment-list">
        {apartments.map((apartment, index) => (
          <div key={index} className="apartment-card">
            <img
              className="apartment-image"
              src={apartment.image || buildingImage}
              alt={apartment.name}
            />
            <div className="apartment-info">
              <h2>{apartment.name}</h2>
              <p>
                <strong>Rent: </strong>${apartment.rent}
              </p>
              <p>
                <strong>Square Feet: </strong>
                {apartment.size}
              </p>
              <p>
                <strong>Bed / Bath: </strong>
                {apartment.bed} bd / {apartment.bath} ba
              </p>
              <p>
                <strong>Available: </strong>
                {apartment.available}
              </p>
            </div>
            <button
              className="rental-button"
              onClick={() => handleRentalClick(apartment)}
            >
              Rental
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerHome;
