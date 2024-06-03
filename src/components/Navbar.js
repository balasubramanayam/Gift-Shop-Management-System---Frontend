// import React from "react";

// function Navbar() {
//   return (
//     <div>
//       <nav
//         style={{ backgroundColor: "#27235c" }}
//         className="navbar navbar-expand-lg  fixed-top"
//       >
//         <div className="container-fluid">
//           <a className="navbar-brand text-white" href="#">
//             Navbar
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a
//                   className="nav-link active text-white"
//                   aria-current="page"
//                   href="#"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active text-white" href="#">
//                   About
//                 </a>
//               </li>
//             </ul>
//              <form class="form-inline d-flex justify-content-center ">
//                 <input
//                   class="form-control"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//                <button
//                   class="btn btn-outline-success ms-2"
//                   type="submit"
//                 >
//                   Search
//                 </button>
//               </form>
//             <ul className="navbar-nav ms-2">
//               <li className="nav-item">
//                 <a className="nav-link active text-white" href="/login">
//                   <i className="fas fa-user"></i> Account
//                 </a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link active text-white" href="/">
//                   <i className="fas fa-sign-out-alt"></i> Logout
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

// import React from "react";

// function Navbar() {
//   return (
//     <div>
//       <nav
//         style={{ backgroundColor: "#27235c" }}
//         className="navbar navbar-expand-lg  fixed-top"
//       >
//         <div className="container-fluid">
//           <a className="navbar-brand text-white" href="#">
//             Navbar
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a
//                   className="nav-link active text-white"
//                   aria-current="page"
//                   href="#"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active text-white" href="#">
//                   About
//                 </a>
//               </li>
//             </ul>
//              <form class="form-inline d-flex justify-content-center ">
//                 <input
//                   class="form-control"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//                <button
//                   class="btn btn-outline-success ms-2"
//                   type="submit"
//                 >
//                   Search
//                 </button>
//               </form>
//             <ul className="navbar-nav ms-2">
//               <li className="nav-item">
//                 <a className="nav-link active text-white" href="/login">
//                   <i className="fas fa-user"></i> Account
//                 </a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link active text-white" href="/">
//                   <i className="fas fa-sign-out-alt"></i> Logout
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active text-white" href="#">
//                   <i className="fas fa-shopping-cart"></i> Cart ({cart.length})
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [cart, setCart] = React.useState([]);

//   const handleCartClick = () => {
//     // You can add your cart logic here
//     console.log("Cart clicked:", cart);
//   };

//   return (
//     <div>
//       <nav style={{ backgroundColor: "#27235c" }} className="navbar navbar-expand-lg  fixed-top">
//         <div className="container-fluid">
//           <Link className="navbar-brand text-white" to="/">
//             Navbar
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active text-white" aria-current="page" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active text-white" to="/about">
//                   About
//                 </Link>
//               </li>
//             </ul>
//             <form className="form-inline d-flex justify-content-center ">
//               <input
//                 className="form-control"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success ms-2" type="submit">
//                 Search
//               </button>
//             </form>
//             <ul className="navbar-nav ms-2">
//               <li className="nav-item">
//                 <Link className="nav-link active text-white" to="/login">
//                   <i className="fas fa-user"></i> Account
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active text-white" to="/">
//                   <i className="fas fa-sign-out-alt"></i> Logout
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <button className="nav-link active text-white" onClick={handleCartClick}>
//                   <i className="fas fa-shopping-cart"></i> Cart ({cart.length})
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faHome,
  faShoppingBag,faClipboardList
} from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


function Navbar() {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchCartCount();
  }, []);

  const fetchCartCount = async () => {
    try {
      const response = await fetch("http://localhost:2001/findAllCart");
      if (response.ok) {
        const cartItems = await response.json();
        const totalCount = cartItems.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
        setCartCount(totalCount);
      } else {
        console.error("Failed to fetch cart items");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };



  const logOut = () => {
    sessionStorage.clear();
    window.location.href = "/";
  }
 

  return (
    <div>
      <nav
        style={{ backgroundColor: "#27235c" }}
        className="navbar navbar-expand-lg  fixed-top"
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/getAll">
            <FontAwesomeIcon icon={faShoppingBag} /> Gift Shopping
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/getAll">
                  <FontAwesomeIcon icon={faGift} /> Gifts
                </Link>
              </li>
             
            </ul>

            <ul className="navbar-nav">
            <li className="nav-item">
          <Link className="nav-link active text-white" to="/userOrder"> 
            <FontAwesomeIcon icon={faClipboardList} /> 
            <span>Order Details</span>
          </Link>
        </li>
        <li className="nav-item">
              <Link className="nav-link active text-white" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} className="red-icon" />{" "}
                Cart ({cartCount})
              </Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link active text-danger" to="/userlogin">
                  <i className="fas fa-user"></i>{" "}
                  {sessionStorage.getItem("firstName")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/userdetails">
                 Profile{" "}
                </Link>
              </li>

              <li className="nav-item">
                <button onClick = {logOut} className="nav-link active text-white">
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
