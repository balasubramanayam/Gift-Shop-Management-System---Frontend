import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import AdminNavbar from "./AdminNavbar";



const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [userStats, setUserStats] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:2001/getAllOrders")
      .then((response) => {
        setOrders(response.data);
        calculateUserStats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  const calculateUserStats = (orders) => {
    const stats = {};

    orders.forEach((order) => {
      const userId = order.cart?.user?.userId;
      const totalPrice = order.cart?.totalPrice || 0;
      const totalGifts = order.cart?.totalGifts || 0;

      if (!stats[userId]) {
        stats[userId] = {
          totalPrice: totalPrice,
          totalGifts: totalGifts,
        };
      } else {
        stats[userId].totalPrice += totalPrice;
        stats[userId].totalGifts += totalGifts;
      }
    });

    setUserStats(stats);
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container-fluid">
        <div style={{ marginTop: "8%" }}>
          <h1 className="text-center">User Orders</h1>
          <div className="row">
            {orders.map((order) => (
              <div key={order.id} className="col-4 ">
                <div className="card">
                <div className="col-md-4">
                  <img
                    src={`data:image/jpeg;base64,${order.cart.giftList.image}`}
                    alt={order.cart.giftList.name}
                    className="card-img"
                    style={{
                      width: "55vh",
                      height: "30vh",
                      cursor: "pointer",
                    }}
                  />
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Order ID: {order.id}</h5>
                    {order.cart?.user && (
                      <>
                        <p className="card-text">
                          <strong>Name:</strong>{" "}
                          {order.cart.user.firstName}{" "}
                          {order.cart.user.lastName}
                        </p>
                        <p className="card-text">
                          <strong>Email:</strong> {order.cart.user.email}
                        </p>
                        <p className="card-text">
                          <strong>Address:</strong>{" "}
                          {order.cart.user.address},{" "}
                          {order.cart.user.city}, {order.cart.user.state},{" "}
                          {order.cart.user.country},{" "}
                          {order.cart.user.zipCode}
                        </p>
                      </>
                    )}
                    <p className="card-text">
                      <strong>{order.status}</strong> 
                    </p>
                    {order.cart?.giftList && (
                      <>
                        <p className="card-text">
                          <strong>Gift Name:</strong>{" "}
                          {order.cart.giftList.name}
                        </p>
                        <p className="card-text">
                          <strong>Gift Price:</strong>{" "}
                          {order.cart.giftList.price}
                        </p>
                        <p className="card-text">
                          <strong>Gift Description:</strong>{" "}
                          {order.cart.giftList.description}
                        </p>
                      </>
                    )}
                    <p className="card-text">
                      <strong>Order Date:</strong>{" "}
                      {new Date(order.orderDate).toLocaleString()}
                    </p>
                    {order.cart && (
                      <>
                        <p className="card-text">
                          <strong>Total Price:</strong>{" "}
                          {order.cart.totalPrice}
                        </p>
                        <p className="card-text">
                          <strong>Total Gifts:</strong>{" "}
                          {order.cart.totalGifts}
                        </p>
                      </>
                    )}
                    <Link
                      to={`/updateOrder/${order.id}`} 
                      className="btn btn-primary btn-sm"
                    >
                      Update status
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
