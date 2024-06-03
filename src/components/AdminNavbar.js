import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faUpload,
  faUsers, // Added icon for User Details
  faClipboardList // Added icon for Order Details
} from "@fortawesome/free-solid-svg-icons";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import "../Home.css";

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <ul>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faHome} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/profile">
            <FontAwesomeIcon icon={faUser} />
            <span>Admin</span>
          </Link>
        </li>
        <li>
          <Link to="/adminlogin">
            <FontAwesomeIcon icon={faSignInAlt} />
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </Link>
        </li>
        <li>
          <Link to="/admingiftall"> {/* Assuming this is the link for Order Details */}
            <FontAwesomeIcon icon={faClipboardList} /> {/* Using the faClipboardList icon for Order Details */}
            <span>Gift List Details</span>
          </Link>
        </li>
      </ul>
      <ul style={{ marginLeft: "5%" }}>
        <li>
          <Link to="/Upload">
            <FontAwesomeIcon icon={faUpload} />
            <span>Upload Gift Details</span>
          </Link>
        </li>
        <li>
          <Link to="/allusers"> {/* Assuming this is the link for User Details */}
            <FontAwesomeIcon icon={faUsers} /> {/* Using the faUsers icon for User Details */}
            <span>User Details</span>
          </Link>
        </li>
        <li>
          <Link to="/orderdetails"> {/* Assuming this is the link for Order Details */}
            <FontAwesomeIcon icon={faClipboardList} /> {/* Using the faClipboardList icon for Order Details */}
            <span>Order Details</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
