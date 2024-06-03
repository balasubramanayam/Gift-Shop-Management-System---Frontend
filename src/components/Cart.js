// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Cart() {
//   const [cart, setCart] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalProducts, setTotalProducts] = useState(0); // New state for total products
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/cart');
//       if (response.data && Array.isArray(response.data) && response.data.length > 0) {
//         setCart(response.data);
//         calculateTotalPrice(response.data);
//         calculateTotalProducts(response.data);
//       } else {
//         setError('Cart data is missing or empty in the response');
//       }
//     } catch (error) {
//       setError(`Error fetching cart: ${error.message}`);
//       console.error('Error fetching cart:', error);
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     try {
//       await axios.delete(`http://localhost:8080/remove/${itemId}`);
//       fetchCart();
//     } catch (error) {
//       setError(`Error removing item from cart: ${error.message}`);
//       console.error('Error removing item from cart:', error);
//     }
//   };

//   const updateQuantity = async (itemId, newQuantity) => {
//     try {
//       await axios.put(`http://localhost:8080/update/${itemId}`, { quantity: newQuantity });
//       fetchCart();
//     } catch (error) {
//       setError(`Error updating quantity: ${error.message}`);
//       console.error('Error updating quantity:', error);
//     }
//   };

//   const calculateTotalPrice = (cart) => {
//     const total = cart.reduce((acc, item) => acc + (item.giftList.price * item.quantity), 0);
//     setTotalPrice(total);
//   };

//   const calculateTotalProducts = (cart) => {
//     const totalProductsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
//     setTotalProducts(totalProductsCount);
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const handlePlaceOrder = () => {

//     console.log("Order placed!");

//   };

//   return (
//     <div className="container">
//       <h1>Shopping Cart</h1>
//       <div>
//         <p>Total Products: {totalProducts}</p> {/* Display total products */}
//       </div>
//       {cart.map((item) => (
//         <div key={item.id} className="row">
//           <div className="col-md-4">
//             <img
//               src={`data:image/jpeg;base64,${item.giftList.image}`}
//               alt={item.name}
//               className="card-img"
//               style={{ width: "55vh", height: "30vh", cursor: "pointer" }}
//             />
//           </div>
//           <div className="col-md-8">
//             <p>Name: {item.giftList.name}</p>
//             <p>Price: ${item.giftList.price}</p>
//             <p>Description: {item.giftList.description}</p>
//             <p>Quantity: {item.quantity}</p>
//             <button className='btn btn-danger' onClick={() => removeFromCart(item.id)}>Remove</button>
//             <button className='btn btn-success ms-2' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//             <button className='btn btn-warning ms-2' onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
//           </div>

//         </div>
//       ))}
//       <div>
//         <p>Total Price: ${totalPrice}</p>
//       </div>
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button className='btn btn-primary' style={{ width: "50%", maxWidth: "200px" }} onClick={handlePlaceOrder}>Place Order</button>
//       </div>
//     </div>
//   );
// }

// export default Cart;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Cart() {
//   const [cart, setCart] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalGifts, setTotalGifts] = useState(0); // New state for total gifts
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/cart');
//       if (response.data && Array.isArray(response.data) && response.data.length > 0) {
//         setCart(response.data);
//         calculateTotalPriceAndGifts(response.data); // Calculate total price and total gifts
//       } else {
//         setError('Cart data is missing or empty in the response');
//       }
//     } catch (error) {
//       setError(`Error fetching cart: ${error.message}`);
//       console.error('Error fetching cart:', error);
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     try {
//       await axios.delete(`http://localhost:8080/remove/${itemId}`);
//       fetchCart();
//     } catch (error) {
//       setError(`Error removing item from cart: ${error.message}`);
//       console.error('Error removing item from cart:', error);
//     }
//   };

//   const updateQuantity = async (itemId, newQuantity) => {
//     try {
//       // Calculate updated total price and total gifts
//       const updatedTotalPrice = calculateUpdatedTotalPrice(itemId, newQuantity);
//       const updatedTotalGifts = calculateUpdatedTotalGifts(cart, itemId, newQuantity);

//       // Update quantity, total price, and total gifts in the backend
//       await axios.put(`http://localhost:8080/update/${itemId}`, {
//         quantity: newQuantity,
//         totalPrice: updatedTotalPrice,
//         totalGifts: updatedTotalGifts
//       });

//       // Fetch updated cart data
//       fetchCart();
//     } catch (error) {
//       setError(`Error updating quantity: ${error.message}`);
//       console.error('Error updating quantity:', error);
//     }
//   };

//   const calculateTotalPriceAndGifts = (cart) => {
//     const totalPrice = cart.reduce((acc, item) => acc + (item.giftList.price * item.quantity),0 );
//     const totalGifts = cart.reduce((acc, item) => acc + item.quantity, 0);
//     setTotalPrice(totalPrice);
//     setTotalGifts(totalGifts);
//   };

//   const calculateUpdatedTotalPrice = (itemId, newQuantity) => {
//     const item = cart.find((item) => item.id === itemId);
//     const updatedTotalPrice = item.giftList.price * newQuantity;
//     return updatedTotalPrice;
//   };

//   const calculateUpdatedTotalGifts = (cart, itemId, newQuantity) => {
//     const updatedTotalGifts = cart.reduce((acc, item) => {
//       if (item.id === itemId) {
//         return acc + newQuantity;
//       } else {
//         return acc + item.quantity;
//       }
//     }, 0);
//     return updatedTotalGifts;
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container">
//       <h1>Shopping Cart</h1>
//       <div>
//         <p>Total Products: {totalGifts}</p> {/* Display total gifts */}
//       </div>
//       {cart.map((item) => (
//         <div key={item.id} className="row">
//           <div className="col-md-4">
//             <img
//               src={`data:image/jpeg;base64,${item.giftList.image}`}
//               alt={item.giftList.name}
//               className="card-img"
//               style={{ width: "55vh", height: "30vh", cursor: "pointer" }}
//             />
//           </div>
//           <div className="col-md-8">
//             <p>Name: {item.giftList.name}</p>
//             <p>Price: ${item.giftList.price}</p>
//             <p>Description: {item.giftList.description}</p>
//             <p>Quantity: {item.quantity}</p>
//             <button className='btn btn-danger' onClick={() => removeFromCart(item.id)}>Remove</button>
//             <button className='btn btn-success ms-2' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//             <button className='btn btn-warning ms-2' onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
//           </div>

//         </div>
//       ))}
//       <div>
//         <p>Total Price: ${totalPrice}</p>
//       </div>
//     </div>
//   );
// }

// export default Cart;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Cart() {
//   const [cart, setCart] = useState([]);
//   const [error, setError] = useState(null);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalGifts, setTotalGifts] = useState(0);
//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/cart');
//       if (response.data && Array.isArray(response.data) && response.data.length > 0) {
//         setCart(response.data);
//       } else {
//         setError('Cart data is missing or empty in the response');
//       }
//     } catch (error) {
//       setError(`Error fetching cart: ${error.message}`);
//       console.error('Error fetching cart:', error);
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     try {
//       await axios.delete(`http://localhost:8080/remove/${itemId}`);
//       fetchCart();
//     } catch (error) {
//       setError(`Error removing item from cart: ${error.message}`);
//       console.error('Error removing item from cart:', error);
//     }
//   };

//   const updateQuantity = async (itemId, newQuantity) => {
//     try {
//       await axios.put(`http://localhost:8080/update/${itemId}`, {
//         quantity: newQuantity,
//       });
//       fetchCart();
//     } catch (error) {
//       setError(`Error updating quantity: ${error.message}`);
//       console.error('Error updating quantity:', error);
//     }
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//     <div className="container">

//       <h1>Shopping Cart</h1>
//       {cart.map((item) => (
//         <div key={item.id} className="row">
//           <div className="col-md-4">
//             <img
//               src={`data:image/jpeg;base64,${item.giftList.image}`}
//               alt={item.giftList.name}
//               className="card-img"
//               style={{ width: "55vh", height: "30vh", cursor: "pointer" }}
//             />
//           </div>
//           <div className="col-md-8">
//             <p>Name: {item.giftList.name}</p>
//             <p>Price: ${item.giftList.price}</p>
//             <p>Description: {item.giftList.description}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Total Price: ${item.totalPrice}</p>
//             <p>Total Gifts: {item.totalGifts}</p>
//             <button className='btn btn-danger' onClick={() => removeFromCart(item.id)}>Remove</button>
//             <button className='btn btn-success ms-2' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//             <button className='btn btn-warning ms-2' onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
//           </div>
//         </div>

//       ))}
//     </div>
//        <p>Total Gift All Price Price: ${totalPrice}</p>
//        </div>
//   );
// }

// export default Cart;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// function Cart() {
//   const [cart, setCart] = useState([]);
//   const [error, setError] = useState(null);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalGifts, setTotalGifts] = useState(0);
//   const [cartIds, setCartIds] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/cart");
//       if (
//         response.data &&
//         Array.isArray(response.data) &&
//         response.data.length > 0
//       ) {
//         setCart(response.data);
//         calculateTotalPrice(response.data);
//         calculateTotalGifts(response.data);

//         const ids = response.data.map((item) => item.id);
//         setCartIds(ids);
//         console.log(ids);
//       } else {
//         setError("Cart data is empty");
//       }
//     } catch (error) {
//       setError(`Error fetching cart: ${error.message}`);
//       console.error("Error fetching cart:", error);
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     try {
//       await axios.delete(`http://localhost:8080/remove/${itemId}`);
//       fetchCart();
//     } catch (error) {
//       setError(`Error removing item from cart: ${error.message}`);
//       console.error("Error removing item from cart:", error);
//     }
//   };

//   const updateQuantity = async (itemId, newQuantity) => {
//     try {
//       await axios.put(`http://localhost:8080/update/${itemId}`, {
//         quantity: newQuantity,
//       });
//       fetchCart();
//     } catch (error) {
//       setError(`Error updating quantity: ${error.message}`);
//       console.error("Error updating quantity:", error);
//     }
//   };

//   const calculateTotalPrice = (cartItems) => {
//     const total = cartItems.reduce(
//       (acc, item) => acc + item.giftList.price * item.quantity,
//       0
//     );
//     setTotalPrice(total);
//   };

//   const calculateTotalGifts = (cartItems) => {
//     const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//     setTotalGifts(total);
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }


//   const addToOrder = async () => {
//     try {
//       const orderRequests = cartIds.map((cartId) => ({
//         cart: { id: cartId },
//         status: "pending",
//         orderDate: new Date().toISOString(),
//       }));

//       await Promise.all(
//         orderRequests.map((orderRequest) =>
//           axios.post("http://localhost:8080/addOrder", orderRequest)
//         )
//       );

//       alert("Orders added successfully");
//       console.log("Orders added successfully");
//       navigate("/payment");
//     } catch (error) {
//       console.error("Error adding orders:", error);
//       alert("Error adding orders. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="container-fluid">
//        <div className="mt-5">
//         <h1 className="text-center">Shopping Cart</h1>
//         <div className="mt-5">
//         {cart.map((item) => (
//           <div key={item.id} className="row">
//             <div className="col-md-4">
//               <img
//                 src={`data:image/jpeg;base64,${item.giftList.image}`}
//                 alt={item.giftList.name}
//                 className="card-img"
//                 style={{ width: "55vh", height: "30vh", cursor: "pointer" }}
//               />
//             </div>
//             <div className="col-md">
//               <p><strong>Name: {item.giftList.name}</strong></p>
//               <p><strong>Price: Rs {item.giftList.price}/-</strong></p>
//               <p><strong>Description: {item.giftList.description}</strong></p>
//               <p><strong>Quantity: {item.quantity}</strong></p>
//               <p><strong>Total Price: ${item.totalPrice}</strong></p>
//               <p><strong>Total Gifts: {item.totalGifts}</strong></p>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 Remove
//               </button>
//               <button
//                 className="btn btn-success ms-2"
//                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
//               >
//                 +
//               </button>
//               <button
//                 className="btn btn-warning ms-2"
//                 onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                 disabled={item.quantity === 1}
//               >
//                 -
//               </button>
//             </div>
//           </div>
          
//         ))} <div style={{marginLeft:'80%'}}>
//         <p><strong>Total Gift Price's: Rs {totalPrice}/-</strong></p>
//         <p><strong>Total Gifts: {totalGifts}</strong></p>
//       </div>
//       </div></div>
//       <div className="d-flex  justify-content-center">
//         <button className="btn btn-primary" type="submit" onClick={addToOrder}>
//           Place Order
//         </button>
//       </div>
//     </div></div>
//   );
// }

// export default Cart;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";


// function Cart() {
//   const [cart, setCart] = useState([]);
//   const [error, setError] = useState(null);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalGifts, setTotalGifts] = useState(0);
//   const [cartIds, setCartIds] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get("http://localhost:2001/findAllCart");
//       if (
//         response.data &&
//         Array.isArray(response.data) &&
//         response.data.length > 0
//       ) {
//         setCart(response.data);
//         calculateTotalPrice(response.data);
//         calculateTotalGifts(response.data);

//         const ids = response.data.map((item) => item.id);
//         setCartIds(ids);
//         console.log(ids);
//       } else {
//         setError("Cart data is empty");
//       }
//     } catch (error) {
//       setError(`Error fetching cart: ${error.message}`);
//       console.error("Error fetching cart:", error);
//     }
//   };


  
//   const removeFromCart = async (itemId) => {
//     try {
//       await axios.delete(`http://localhost:2001/remove/${itemId}`);
//       setTimeout(() => {
//         window.location.reload(); 
//       }, 1000); 
//     } catch (error) {
//       setError(`Error removing item from cart: ${error.message}`);
//       console.error("Error removing item from cart:", error);
//     }
//   };
  
  

//   const updateQuantity = async (itemId, newQuantity) => {
//     try {
//       await axios.put(`http://localhost:2001/update/${itemId}`, {
//         quantity: newQuantity,
//       });
//       fetchCart();
//     } catch (error) {
//       setError(`Error updating quantity: ${error.message}`);
//       console.error("Error updating quantity:", error);
//     }
//   };

//   const calculateTotalPrice = (cartItems) => {
//     const total = cartItems.reduce(
//       (acc, item) => acc + item.giftList.price * item.quantity,
//       0
//     );
//     setTotalPrice(total);
//   };

//   const calculateTotalGifts = (cartItems) => {
//     const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//     setTotalGifts(total);
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const addToOrder = async () => {
//     try {
//       const orderRequests = cartIds.map((cartId) => ({
//         cart: { id: cartId },
//         status: "Pending delivery",
//         orderDate: new Date().toISOString(),
//       }));

//       await Promise.all(
//         orderRequests.map((orderRequest) =>
//           axios.post("http://localhost:2001/addOrder", orderRequest)
//         )
//       );
//       navigate("/payment");
//     } catch (error) {
//       console.error("Error adding orders:", error);
//       alert("Error adding orders. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container-fluid">
//         <h1 className="text-center">Shopping Cart</h1>
//         {cart.length > 0 ? (
//           <div className="mt-5">
//             {cart.map((item) => (
//               <div key={item.id} className="row mt-5">
//                 <div className="col-md-4">
//                   <img
//                     src={`data:image/jpeg;base64,${item.giftList.image}`}
//                     alt={item.giftList.name}
//                     className="card-img"
//                     style={{
//                       width: "55vh",
//                       height: "30vh",
//                       cursor: "pointer",
//                     }}
//                   />
//                 </div>
//                 <div className="col-md">
//                   <p>
//                     <strong>Name: {item.giftList.name}</strong>
//                   </p>
//                   <p>
//                     <strong>Price: Rs {item.giftList.price}/-</strong>
//                   </p>
//                   <p>
//                     <strong>Description: {item.giftList.description}</strong>
//                   </p>
//                   <p>
//                     <strong>Quantity: {item.quantity}</strong>
//                   </p>
//                   <p>
//                     <strong>Total Price: Rs {item.totalPrice}/-</strong>
//                   </p>
//                   <p>
//                     <strong>Total Gifts: {item.totalGifts}</strong>
//                   </p>
//                   <button
//                     className="btn btn-sm btn-danger"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Remove
//                   </button>
//                   <button
//                     className="btn btn-sm btn-success ms-2"
//                     onClick={() =>
//                       updateQuantity(item.id, item.quantity + 1)
//                     }
//                   >
//                     +
//                   </button>
//                   <button
//                     className="btn btn-sm btn-warning ms-2"
//                     onClick={() =>
//                       updateQuantity(item.id, item.quantity - 1)
//                     }
//                     disabled={item.quantity === 1}
//                   >
//                     -
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div style={{ marginLeft: "80%" }}>
//               <p>
//                 <strong>Total Gift Price's: Rs {totalPrice}/-</strong>
//               </p>
//               <p>
//                 <strong>Total Gifts: {totalGifts}</strong>
//               </p>
//             </div>
//             <div className="d-flex justify-content-center">
//               <button
//                 className="btn btn-primary"
//                 type="submit"
//                 onClick={addToOrder}
//               >
//                 Place Order
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center mt-5">
           
//             <h2>Your cart is empty</h2>
//             <p>Start shopping now to fill it up!</p>
//           </div>
//         )}
//       </div>
//       <footer className="bg-dark text-white p-4 mt-5">
//         <div className="container text-center">
//           <p>&copy; 2024 Gift Shop Management System</p>
//           <p></p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Cart;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


function Cart() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalGifts, setTotalGifts] = useState(0);
  const [cartIds, setCartIds] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:2001/findAllCart");
      if (
        response.data &&
        Array.isArray(response.data) &&
        response.data.length > 0
      ) {
        setCart(response.data);
        calculateTotalPrice(response.data);
        calculateTotalGifts(response.data);

        const ids = response.data.map((item) => item.id);
        setCartIds(ids);
        console.log(ids);
      } else {
        setError("Cart data is empty");
      }
    } catch (error) {
      setError(`Error fetching cart: ${error.message}`);
      console.error("Error fetching cart:", error);
    }
  };


  
  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:2001/remove/${itemId}`);
      setTimeout(() => {
        window.location.reload(); 
      }, 300); 
    } catch (error) {
      setError(`Error removing item from cart: ${error.message}`);
      console.error("Error removing item from cart:", error);
    }
  };
  
  

  const updateQuantity = async (itemId, newQuantity) => {
    try {
      await axios.put(`http://localhost:2001/update/${itemId}`, {
        quantity: newQuantity,
      });
      fetchCart();
    } catch (error) {
      setError(`Error updating quantity: ${error.message}`);
      console.error("Error updating quantity:", error);
    }
  };

  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.giftList.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const calculateTotalGifts = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalGifts(total);
  };

  const addToOrder = async () => {
    try {
      const orderRequests = cartIds.map((cartId) => ({
        cart: { id: cartId },
        status: "Pending delivery",
        orderDate: new Date().toISOString(),
      }));

      await Promise.all(
        orderRequests.map((orderRequest) =>
          axios.post("http://localhost:2001/addOrder", orderRequest)
        )
      );
      navigate("/payment");
    } catch (error) {
      console.error("Error adding orders:", error);
      alert("Error adding orders. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <h1 className="text-center">Shopping Cart</h1>
        {cart.length > 0 ? (
          <div className="mt-5">
            {cart.map((item) => (
              <div key={item.id} className="row mt-5">
                <div className="col-md-4">
                  <img
                    src={`data:image/jpeg;base64,${item.giftList.image}`}
                    alt={item.giftList.name}
                    className="card-img"
                    style={{
                      width: "55vh",
                      height: "30vh",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="col-md">
                  <p>
                    <strong>Name: {item.giftList.name}</strong>
                  </p>
                  <p>
                    <strong>Price: Rs {item.giftList.price}/-</strong>
                  </p>
                  <p>
                    <strong>Description: {item.giftList.description}</strong>
                  </p>
                  <p>
                    <strong>Quantity: {item.quantity}</strong>
                  </p>
                  <p>
                    <strong>Total Price: Rs {item.totalPrice}/-</strong>
                  </p>
                  <p>
                    <strong>Total Gifts: {item.totalGifts}</strong>
                  </p>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="btn btn-sm btn-success ms-2"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="btn btn-sm btn-warning ms-2"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
            <div style={{ marginLeft: "80%" }}>
              <p>
                <strong>Total Gift Price's: Rs {totalPrice}/-</strong>
              </p>
              <p>
                <strong>Total Gifts: {totalGifts}</strong>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={addToOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-5">
           
            <h2>Your cart is empty</h2>
            <p>Start shopping now to fill it up!</p>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" width="50%" height="20%" />
          </div>
        )}
      </div>
      <footer className="bg-dark text-white p-4 mt-5">
        <div className="container text-center">
          <p>&copy; 2024 Gift Shop Management System</p>
          <p></p>
        </div>
      </footer>
    </div>
  );
}

export default Cart;
