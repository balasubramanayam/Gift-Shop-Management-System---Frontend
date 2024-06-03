// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import AdminNavbar from "./AdminNavbar";
// function UpdateOrder() {
//   const { id } = useParams();
//   const navigator = useNavigate();
//   const [order, setOrder] = useState({
//     id: "",
//     status: "",
//   });
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetchOrder();
//   }, []);

//   const fetchOrder = async () => {
//     try {
//       const response = await axios.get(`http://localhost:2001/getByOrderId/${id}`);
//       setOrder(response.data);
//     } catch (error) {
//       console.error("Error fetching order:", error);
//     }
//   };

//   const handleStatusChange = (e) => {
//     setOrder(e.target.value);
//   };
  

//   const updateOrderStatus = async (updatedOrder) => {
//     try {
//       console.log("Updated Order:", updatedOrder);
//       await axios.put(`http://localhost:2001/updateOrderStatus/${updatedOrder.id}`, {
//         status: updatedOrder.status,
//       });
//       setMessage("Order status updated successfully");
//       navigator("/orderdetails");
//     } catch (error) {
//       console.error("Error updating order status:", error);
//       setMessage("Error updating order status");
//     }
//   };
  
  

//   return (
//     <div>
// <AdminNavbar/>
//       <div className="container-fluid">
//         <div style={{marginTop:'10%'}}>
//         <h1 className="text-center">Update Order Status</h1>
//         <div className="row justify-content-center ">
//           <div className="col-4">
//             <div className="card mt-5">
//               <div className="card-body">
//                 <h2>Order Id: {order.id}</h2> 
//                 <h2>Order Status: {order.status}</h2>
//                 <select
//                   required
//                   value={order.status}
//                   onChange={handleStatusChange}
//                   className="form-select"
//                 >
//                   <option value="">Select Status</option>
//                   <option value="Pending Delivery">Pending Delivery</option>
//                   <option value="Delivered">Delivered</option>
//                   <option value="Rejected">Rejected</option>
//                 </select>
//                 <button
//   onClick={() => {
//     console.log("Clicked Order:", order);
//     updateOrderStatus({ id: order.id, status: order.status });
//   }}
//   className="btn btn-primary btn-sm mt-3"
// >
//   Update
// </button>



//               </div>
//             </div>
//           </div>
//         </div>
//         {message && <p>{message}</p>}
//       </div>
//     </div></div>
//   );
// }

// export default UpdateOrder;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

function UpdateOrder() {
  const { id } = useParams();
  const navigator = useNavigate();
  const [order, setOrder] = useState({
    id: "",
    status: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`http://localhost:2001/getByOrderId/${id}`);
      setOrder(response.data);
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  const handleStatusChange = (e) => {
    setOrder({ ...order,  status:e.target.value });
  };
  const updateOrderStatus = async () => {
    try {
      await axios.put(`http://localhost:2001/updateOrderStatus/${order.id}`, {
        status: order.status,
      });
      alert("Order status updated successfully");
      navigator("/orderdetails");
    } catch (error) {
      console.error("Error updating order status:", error);
      setMessage("Error updating order status");
    }
  };
  

  return (
    <div>
      <AdminNavbar />
      <div className="container-fluid">
        <div style={{ marginTop: "10%" }}>
          <h1 className="text-center">Update Order Status</h1>
          <div className="row justify-content-center ">
            <div className="col-4">
              <div className="card mt-5">
                <div className="card-body">
                  <h2>Order Id: {order.id}</h2>
                  <h2>Order Status: {order.status}</h2>
                  <select
                    required
                    value={order.status}
                    onChange={handleStatusChange}
                    className="form-select"
                  >
                    <option value="">Select Status</option>
                    <option value="Pending Delivery">Pending Delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                  <button
                    onClick={() => updateOrderStatus(order)}
                    className="btn btn-primary btn-sm mt-3"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default UpdateOrder;
