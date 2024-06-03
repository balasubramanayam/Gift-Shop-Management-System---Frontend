import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import "../App.css";
import HomeNavbar from "./HomeNavbar";
function AdminLoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigator = useNavigate();

  const handleLogin = async () => {
    try {
      if (!credentials.email || !credentials.password) {
        setError("Please enter both email and password.");
        return;
      }
      const response = await axios.post(
        "http://localhost:2001/admin",
        credentials
      );
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        alert("Login Successful");
        navigator("/admingiftall");
      } else {
        console.error("Login failed:", response.status);
        setError("Invalid email or password.");
      }
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      setError("Invalid Email or password.");
    }
  };
  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
     <HomeNavbar/>
      <div className="d-flex justify-content-center align-items-center  backgound">
        <div
          style={{ width: "30%" ,marginTop:'5%'}}
          className="border  rounded-lg"
        >
          <div className="p-3">
            {error && <p className="text-danger text-center">{error}</p>}
            <h2 className="mb-4 text-center">Admin Login</h2>
            <label>Email</label>
            <input
              className="form-control mb-4"
              placeholder="Email"
              id="email"
              value={credentials.email}
              type="email"
              name="email"
              onChange={handleInputChange}
            />
            <div className="mb-3">
              <label>Password</label>
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
            <button
              className="btn btn-sm d-block mx-auto mb-3"
              style={{
                height: "34px",
                width: "40%",
                backgroundColor: "#27235c",
                color: "white",
              }}
              onClick={handleLogin}
            >
               <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="green-icon"
                  />
             <span>Sign in</span> 
            </button>
            
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginPage;
