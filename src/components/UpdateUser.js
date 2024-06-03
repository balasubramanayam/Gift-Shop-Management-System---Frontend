import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeNavbar from "./HomeNavbar";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const [updatedUser, setUpdatedUser] = useState({
    userId:"",
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    password: "",
    confirmPassword: ""
  });
  const { id } = useParams();
 const navigate = useNavigate()

  useEffect(() => {
    
    axios
      .get(`http://localhost:2001/getuser/${id}`)
      .then((response) => setUpdatedUser(response.data))
      .catch((error) => console.log(error));
  }, [id]); 

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:2001/updateUser/${updatedUser.userId}`, updatedUser);
      alert("Your Profile Updated Successfully");
      navigate("/userdetails");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  return (
    <div> <HomeNavbar />
      <div
        className="container-fluid backgound bg-white"
        style={{ gridColumn: "span 12" }}
      >
        <div className="d-flex justify-content-center align-items-center ">
          <div
            style={{
              width: "25%",
              marginTop: "8%",
              gridColumn: "span 4 / span 4",
            }}
          >
           
            <div
              style={{
                height: "320px",
                borderRadius: "5px",
                marginBottom: "20px",
              }}
            >
                 <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Id"
                  value={updatedUser.userId}
                  type="text"
                 disabled
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="First Name"
                  value={updatedUser.firstName}
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Last Name"
                  value={updatedUser.lastName}
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Email Address"
                  value={updatedUser.email}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter password"
                  value={updatedUser.password}
                  name="password"
                  onChange={handleChange}
                  style={{ paddingRight: "50px" }}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Confirm Password"
                  type="password"
                  value={updatedUser.confirmPassword}
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Mobile Number"
                  value={updatedUser.phonenumber}
                  type="text"
                  name="phonenumber"
                  onChange={handleChange}
                  required
                />
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
                  value={updatedUser.address}
                  type="text"
                  name="address"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="City"
                  value={updatedUser.city}
                  type="text"
                  name="city"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control "
                  placeholder="State"
                  value={updatedUser.state}
                  type="text"
                  name="state"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Zip Code"
                  value={updatedUser.zipCode}
                  type="text"
                  name="zipCode"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Country"
                  value={updatedUser.country}
                  type="text"
                  name="country"
                  onChange={handleChange}
                  required
                />
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
                    onClick={handleSave}
                  >
                    <span>Update</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
