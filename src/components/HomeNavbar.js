import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGift,faInfoCircle, faUser, faStore } from '@fortawesome/free-solid-svg-icons';
import '../Home.css';

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const HomeNavbar = () => {
  return (
    <nav className='navbar navbar-expand-lg  fixed-top'>
      <ul>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/userlogin">
            <FontAwesomeIcon icon={faUser} />
            <span>User</span>
          </Link>
        </li>
        <li>
          <Link to="/adminlogin">
            <FontAwesomeIcon icon={faStore} />
            <span>Admin Panel</span>
          </Link>
        </li>  </ul>
<ul>
        <li>
        <div style={{fontSize:'150%' ,marginTop:'2px',marginLeft:'70px'}} className='text-white '>
        <FontAwesomeIcon icon={faGift}  />  <strong>  Gift Shop Management System</strong> 
        </div>
        </li></ul>
    
    </nav>
  );
};

export default HomeNavbar;
