import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import HomeNavbar from "./HomeNavbar";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function SignupPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phonenumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSignup = async () => {
    try {
     
      const requiredFields = ["firstName", "lastName", "email", "password", "confirmPassword", "phonenumber", "address", "city", "state", "zipCode", "country"];
      const newErrors = {};
      for (const field of requiredFields) {
        if (!formState[field]) {
          newErrors[field] = "This field is required.";
        }
      }

      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formState.email)) {
        newErrors.email = "Please enter a valid email address.";
      }

      
      if (formState.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters long.";
      }

      if (formState.phonenumber.length < 10) {
        newErrors.phonenumber = "Mobile Number must be at 10 digits";
      }

     
      const passwordRegex = /[\W_]/; 
      if (!passwordRegex.test(formState.password)) {
        newErrors.password = "Password must contain at least one special character.";
      }

     
      if (formState.password !== formState.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      setErrors(newErrors);

      
      if (Object.keys(newErrors).length > 0) {
        return;
      }

      
      const response = await axios.post("http://localhost:2001/register", {
        ...formState,
      });

      console.log(response.data);
      alert("Successfully Registered")
      navigate("/userlogin");
    } catch (error) {
      console.error("Signup failed:", error.message);
      
    }
  };

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "", 
    });
  };

  return (
    <div>
      <div
        className="container-fluid backgound bg-white"
        style={{ gridColumn: "span 12" }}
      >
        <HomeNavbar />
        <div className="d-flex justify-content-center align-items-center ">
          <div
            style={{
              width: "25%",
              marginTop: "8%",
              gridColumn: "span 4 / span 4",
            }}
          >
            <h5 className="mb-3 bg-white text-center">Sign Up</h5>
            <div
              style={{
                height: "300px",
                borderRadius: "5px",
                marginBottom: "20px",
              }}
            >
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="First Name"
                  value={formState.firstName}
                  type="text"
                  name="firstName"
                  onChange={handleInputChange}
                />
                {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Last Name"
                  value={formState.lastName}
                  type="text"
                  name="lastName"
                  onChange={handleInputChange}
                />
                {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Email Address"
                  value={formState.email}
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>

              <div className="mb-3">
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                  required
                  name="password"
                  onChange={handleInputChange}
                  style={{ paddingRight: "50px" }}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    backgroundColor: "transparent",
                    border: "none",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: "100",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}

            <div className="mb-3">
              <div className="input-group">
                <input
                  className="form-control"
                  placeholder="Confirm Password"
                  type="password"
                  value={formState.confirmPassword}
                  name="confirmPassword"
                  onChange={handleInputChange}
                  required
                />
                 </div></div>
                {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
             
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Mobile Number"
                  value={formState.phonenumber}
                  type="text"
                  name="phonenumber"
                  onChange={handleInputChange}
                  required
                />
                {errors.phonenumber && <p className="text-danger">{errors.phonenumber}</p>}
              </div>
            </div>
          </div>
          <div
            className="ms-3"
            style={{
              width: "25%",
              marginTop: "9%",
              gridColumn: "span 4 / span 4",
            }}
          >
            <div
              style={{
                height: "280px",
                borderRadius: "5px",
                marginBottom: "20px",
              }}
            >
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Address"
                  value={formState.address}
                  type="text"
                  name="address"
                  onChange={handleInputChange}
                  required
                />
                {errors.address && <p className="text-danger">{errors.address}</p>}
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="City"
                  value={formState.city}
                  type="text"
                  name="city"
                  onChange={handleInputChange}
                  required
                />
                {errors.city && <p className="text-danger">{errors.city}</p>}
              </div>
              <div className="mb-3">
                <input
                  className="form-control "
                  placeholder="State"
                  value={formState.state}
                  type="text"
                  name="state"
                  onChange={handleInputChange}
                  required
                />
                {errors.state && <p className="text-danger">{errors.state}</p>}
              </div>
              <div className="mb-3">
              <input
                  className="form-control"
                  placeholder="Zip Code"
                  value={formState.zipCode}
                  type="text"
                  name="zipCode"
                  onChange={handleInputChange}
                  required
                />
                {errors.zipCode && <p className="text-danger">{errors.zipCode}</p>}
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Country"
                  value={formState.country}
                  type="text"
                  name="country"
                  onChange={handleInputChange}
                  required
                />
                {errors.country && <p className="text-danger">{errors.country}</p>}
              </div>
              <div className="row">
                <div className="col-5">
                  <button
                    className="btn btn-sm d-block mx-auto mb-3"
                    style={{
                      height: "34px",
                      width: "80%",
                      backgroundColor: "#27235c",
                      color: "white",
                    }}
                    onClick={handleSignup}
                  >
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      className="green-icon"
                    />
                    <span>Sign Up</span>
                  </button>
                </div>

                <div className="col">
                  Already Register? <a href="/userlogin">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
