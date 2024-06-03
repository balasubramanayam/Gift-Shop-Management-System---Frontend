import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function UserDetails() {
  const [userData, setUserData] = useState(null);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`http://localhost:2001/getuser/${userId}`)
      .then((response) => {
        console.log("Response data:", response.data);
        if (response.data && typeof response.data === "object") {
          setUserData(response.data);
        } else {
          console.log("Invalid response data format or empty data.");
        }
      })
      .catch((error) => console.log(error));
  }, [userId]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      axios.delete(`http://localhost:2001/deleteUser/${id}`).then(() => {
        window.location.reload();
        alert("Deleted successfully");
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div style={{ marginTop: "7%" }}>
          <h1 className="text-center">User Details</h1>
          {userData && (
            <div className="row">
              <div className="col-lg-4 ">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-3">{userData.firstName} {userData.lastName}</h5>
                    <p className="card-text"><strong>Email:</strong> {userData.email}</p>
                    <p className="card-text"><strong>Phone Number:</strong> {userData.phonenumber}</p>
                    <p className="card-text"><strong>Address:</strong> {userData.address}</p>
                    <p className="card-text"><strong>City:</strong> {userData.city}</p>
                    <p className="card-text"><strong>State:</strong> {userData.state}</p>
                    <p className="card-text"><strong>PinCode:</strong> {userData.zipCode}</p>
                    <p className="card-text"><strong>Country:</strong> {userData.country}</p>
                    <button
                      onClick={() => handleDelete(userData.userId)}
                      className="btn btn-danger btn-sm mt-3 mr-2"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/updateUser/${userData.userId}`}
                      className="btn btn-primary btn-sm  mt-3 mr-2"
                    >
                      Update
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
