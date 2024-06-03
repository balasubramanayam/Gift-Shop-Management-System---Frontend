import React, { useState } from "react";
import {
  FaCreditCard,
  FaRegIdCard,
  FaMoneyCheckAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import "../Payment.css";
import Navbar from "./Navbar";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    accountHolder: "",
    selectedDate: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
   
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      alert("your Sucessfully Ordered Items")
      navigate("/userOrder");
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

 
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
      valid = false;
    }

   
    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required";
      valid = false;
    }

   
    if (!formData.cvv.trim()) {
      newErrors.cvv = "CVV is required";
      valid = false;
    }

  
    if (!formData.accountHolder.trim()) {
      newErrors.accountHolder = "Account holder name is required";
      valid = false;
    }


    if (!formData.selectedDate.trim()) {
      newErrors.selectedDate = "Selected date is required";
      valid = false;
    }

   
    setErrors(newErrors);

    return valid;
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Payment Details</h2>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <FaCreditCard className="icon" />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
            />
            {errors.cardNumber && <div className="text-danger error">{errors.cardNumber}</div>}
          </div>
          <div className="form-group">
            <FaExclamationCircle className="icon" />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date"
              value={formData.expiryDate}
              onChange={handleChange}
            />
            {errors.expiryDate && <div className="text-danger error">{errors.expiryDate}</div>}
          </div>
          <div className="form-group">
            <FaRegIdCard className="icon" />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
            />
            {errors.cvv && <div className="text-danger error">{errors.cvv}</div>}
          </div>
          <div className="form-group">
            <FaRegIdCard className="icon" />
            <input
              type="text"
              name="accountHolder"
              placeholder="Account Holder Name"
              value={formData.accountHolder}
              onChange={handleChange}
            />
            {errors.accountHolder && <div className="text-danger error">{errors.accountHolder}</div>}
          </div>
          <div className="form-group">
            <FaMoneyCheckAlt className="icon" />
            <input
              type="date"
              name="selectedDate"
              value={formData.selectedDate}
              onChange={handleChange}
            />
            {errors.selectedDate && <div className="text-danger error">{errors.selectedDate}</div>}
          </div>

          <div className="form-group">
            <button
              className="btn btn-sm d-block mx-auto mb-3"
              style={{
                height: "45px",
                width: "55%",
                backgroundColor: "#27235c",
                color: "white",
              }}
            >
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="green-icon"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;


