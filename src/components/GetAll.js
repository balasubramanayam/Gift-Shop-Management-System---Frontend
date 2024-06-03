import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift
} from "@fortawesome/free-solid-svg-icons";
function GetAll() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:2001/giftall");
        setImages(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const filteredImages = images.filter(
    (image) =>
      image.name && image.name.toLowerCase().includes(search.toLowerCase())
    
  );

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "5%" }} className="container-fluid ">
        <h1 style={{color:'#27235c'}} className="text-center"><FontAwesomeIcon icon={faGift} />Gifts</h1>
        <div className="row p-3">
          <div className="col-md-12 mb-3">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control mb-3"
              placeholder="Search by name"
            />
          </div>
          {filteredImages.map((image, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card h-100">
                <div style={{color:'#27235c'}} className="card-header text-center">
                 <strong>{image.name}</strong> 
                </div>
                <div className="card-body">
                  <Link to={`/gift-details/${image.id}`}>
                    <img
                      src={`data:image/jpeg;base64,${image.image}`}
                      alt={image.name}
                      className="card-img"
                      style={{
                        width: "62vh",
                        height: "30vh",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                  <div style={{color:'#27235c'}} className="card-text"><strong>Price: ${image.price}/-</strong></div>
                  <div style={{color:'#27235c'}} className="card-text">
                  <strong> Description: {image.description}</strong>
                  </div>
                  <div className="card-footer text-center">
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-dark text-white p-5 mt-5">
        <div className="container text-center">
          <p>&copy; 2024 Gift Shop Management System</p>
        </div>
      </footer>
    </div>
  );
}

export default GetAll;
