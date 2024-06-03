import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GetAll from "./components/GetAll";
import FileUploadForm from "./components/FileUploadForm";
import UpdateImage from "./components/UpdateImage";
import AdminGiftList from "./components/AdminGiftList";
import GiftDetails from "./components/GiftDetails";
import UserLoginPage from "./components/UserLoginPage";
import SignupPage from "./components/SignupPage";
import AdminLoginPage from "./components/AdminLoginPage";
import GetAllUser from "./components/GetAllUser";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import About from "./components/About";
import HomeNavbar from "./components/HomeNavbar";
import Home from "./components/Home";
import Payment from "./components/Payment";

import UpdateOrder from "./components/UpdateOrder";
import AdminOrder from "./components/AdminOrder";

import Orders from "./components/Orders";
import UpdateUser from "./components/UpdateUser";
import UserDetails from "./components/UserDetails";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homenavbar" element={<HomeNavbar />} />
          <Route path="/about" element={<About />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/userlogin" element={<UserLoginPage />} />
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Upload" element={<FileUploadForm />} />
          <Route path="/getAll" element={<GetAll />} />
          <Route path="/update/:id" element={<UpdateImage />} />
          <Route path="/admingiftall" element={<AdminGiftList />} />
          <Route path="/allusers" element={<GetAllUser />} />
          <Route path="/gift-details/:id" element={<GiftDetails />} />
          <Route path="/adminnavbar" element={<AdminNavbar />} />
          <Route path="/cart" element={<Cart />} />
         
          <Route path="/payment" element={< Payment/>} />
          <Route path="/updateOrder/:id" element={< UpdateOrder/>} />
          <Route path="/orderdetails" element={< AdminOrder/>} />
       
          <Route path="/userOrder" element={< Orders/>} />
          <Route path="/updateUser/:id" element={< UpdateUser/>} />
          <Route path="/userdetails" element={< UserDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
