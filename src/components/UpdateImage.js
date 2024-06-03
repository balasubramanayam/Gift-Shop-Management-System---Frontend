import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import '../App.css'
function UpdateImage() {
  const { id } = useParams();
  const [image, setImage] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    image: null
  });
  const [message, setMessage] = useState('');
 const navigator = useNavigate();
  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    try {
      const response = await axios.get(`http://localhost:2001/getById/${id}`);
      setImage(response.data);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setImage(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setImage(prevState => ({
      ...prevState,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', image.name);
    formData.append('price', image.price);
    formData.append('description', image.description);
    formData.append('image', image.image);
  
    try {
      await axios.put(`http://localhost:2001/updategift/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Image updated successfully!');
      alert("updated successfully!")
      navigator("/admingiftall");
    } catch (error) {
      console.error('Error updating image:', error);
      setMessage('An error occurred while updating the image.');
    }
  };
  

  return (
    <div>
    <AdminNavbar/>
    <div className="d-flex justify-content-center align-items-center   backgound">
      <div style={{ width: "30%", marginTop: '3.4%' }} className="border  rounded-lg">
        <div className="container-fluid">
          
          
          <h2 className="mb-4 text-center">Update Gift Item</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <div>
                  <input
                    className="form-control"
                    type="text"
                    name='name'
                    value={image.name}
                    onChange={(e) => handleChange(e, 'name')}
                    required
                  />
                </div>
                <label>Price:</label>
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name='price'
                    value={image.price}
                    onChange={(e) => handleChange(e, 'price')}
                    required
                  />
                </div>
                <label>Description:</label>
                <div>
                  <textarea
                    className="form-control"
                    name='description'
                    value={image.description}
                    onChange={(e) => handleChange(e, 'description')}
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
              <div style={{marginTop:"20px"}}>
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
                  Update Image
                </button>
              </div>
            </form>
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
 
  
  );
}

export default UpdateImage;
