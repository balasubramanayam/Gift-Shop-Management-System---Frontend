import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const FileUploadForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const navigator = useNavigate();
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);

    try {
      console.log(formData);
      await axios.post("http://localhost:2001/insertgifts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Gift uploaded successfully!");
      alert("Gift uploaded successfully!");

      navigator("/admingiftall");
    } catch (error) {
      console.error("Error uploading gift:", error);
      setMessage("An error occurred while uploading the gift.");
    }
  };
  return (
    <div>
      <AdminNavbar />
      <div className="d-flex justify-content-center align-items-center   backgound">
        <div
          style={{ width: "30%", marginTop: "3.4%" }}
          className="border rounded-lg"
        >
          <div className="container-fluid ">
            <h2 className="mb-4 text-center">Add Gift</h2>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Name:</label>
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <label>Price:</label>
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      value={price}
                      name="price"
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>
                  <label>Description:</label>
                  <div>
                    <textarea
                      className="form-control"
                      value={description}
                      name="description"
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <label>Select Image:</label>
                  <div>
                    <input
                      className="form-control"
                      type="file"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <button
                    className="btn btn-sm d-block mx-auto"
                    style={{
                      height: "34px",
                      width: "35%",
                      backgroundColor: "#27235c",
                      color: "white",
                    }}
                    type="submit"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadForm;
