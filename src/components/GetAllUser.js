import React, { useState, useEffect } from "react";
import axios from "axios";

import AdminNavbar from "./AdminNavbar";
function GetAllUser() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2001/getAllUser")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);   

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want to delete this user?");
    if (confirm) {
      axios.delete(`http://localhost:2001/deleteUser/${id}`).then(() => {
        window.location.reload();
        alert("Deleted successfully");
      });
    }
  };

  return (
    <div>
    <AdminNavbar />
    <div className="container-fluid">
      <div style={{marginTop:'7%'}} >
      <h1 className="text-center ">Users Details</h1>
  
      <div className="row">
        {data.map((d, i) => (
          <div key={i} className="col-lg-4 mb-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">{d.firstName} {d.lastName}</h5>
                <p className="card-text "><strong>Email:</strong> {d.email}</p>
                <p className="card-text"><strong>Phone Number:</strong> {d.phonenumber}</p>
                <p className="card-text"><strong>Address:</strong> {d.address}</p>
                <p className="card-text"><strong>City:</strong> {d.city}</p>
                <p className="card-text"><strong>State:</strong> {d.state}</p>
                <p className="card-text"><strong>PinCode:</strong> {d.zipCode}</p>
                <p className="card-text"><strong>Country:</strong> {d.country}</p>
                <button
                  onClick={(e) => handleDelete(d.userId)}
                  className="btn btn-danger btn-sm mt-3"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  </div>
  
  );
}

export default GetAllUser;
