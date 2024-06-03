import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import "../App.css";
function AdminGiftList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:2001/giftall");
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2001/deleteImage/${id}`);
      fetchImages();
      alert("Successfully Deleted Gift Item")
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container-fluid ">
        <div style={{ margin: "8%" }} className="row justify-content-center ">
          <h1 className="text-center">Gift List Details</h1>
          {images.map((image, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={`data:image/jpeg;base64,${image.image}`}
                  alt={image.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-footer">
                  <h5 className="card-title">{image.name}</h5>
                  <p className="card-text">{image.description}</p>
                  <p className="card-text">Rs {image.price}/-</p>
                  <div className="btn-group" role="group" aria-label="Actions">
                    <Link
                      to={`/update/${image.id}`}
                      style={{
                        height: "34px",
                        width: "40%",
                        backgroundColor: "#27235c",
                        color: "white",
                      }}
                      className="btn btn-sm d-block mx-auto mb-3"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-sm btn-danger d-block mx-auto "
                      style={{
                        height: "34px",
                        width: "40%",
                        
                        color: "white",
                      }}
                      onClick={() => handleDelete(image.id)}
                    >
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminGiftList;
