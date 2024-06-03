// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Navbar from "./Navbar";

// function GiftDetails() {
//   const [gift, setGift] = useState(null);

//   const { id } = useParams();
 
//   useEffect(() => {
//     const fetchGiftDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:2001/getById/${id}`
//         );
//         setGift(response.data);
//       } catch (error) {
//         console.error("Error fetching gift details:", error);
//       }
//     };

//     fetchGiftDetails();
//   }, [id]);
   
  

//   const addToCart = async () => {
//     try {
//       const userId = sessionStorage.getItem("userId");
//       if (!userId || isNaN(parseInt(userId))) {
//         console.error("Invalid userId:", userId);
//         return;
//       }
  
//       const giftId = parseInt(id);
//       const quantity = 1;
  
//       const cart = {
//         user: {
//           userId: parseInt(userId),
//         },
//         giftList: {
//           id: giftId,
//         },
//         quantity,
//       };
//       await axios.post("http://localhost:2001/addCart", cart);
      
     
//     } catch (error) {
      
      
//       console.error("Error adding to cart:", error);
//     }
//   };
  
//   return (
//     <div>
//       <Navbar />
//       <div className="container-fluid mt-5">
//         <form>
//           <div className="row justify-content-center">
//             {gift && (
//               <>
//                 <div className="col-md-3 mt-3">
//                   <div className="card">
//                     <div
//                       style={{
//                         maxWidth: "300px",
//                         margin: "auto",
//                       }}
//                     >
//                       <img
//                         className="img-fluid shadow mt-4"
//                         src={`data:image/jpeg;base64,${gift.image}`}
//                         alt={gift.name}
//                       />
//                     </div>
//                     <div className="card-body">
//                       <h2 style={{ color: "#27235c" }}>
//                         <strong>{gift.name}</strong>
//                       </h2>
//                       <p style={{ color: "#27235c" }}>
//                         <strong>
//                           Price: <i class="fa fa-inr"></i> {gift.price}/-
//                         </strong>
//                       </p>
//                       <p style={{ color: "#27235c" }}>
//                         <strong>Description: {gift.description}</strong>
//                       </p>
//                       <div className="d-flex justify-content-between">
//                         <button
//                           className="btn btn-sm d-block mx-auto mb-3"
//                           style={{
//                             height: "34px",
//                             width: "40%",
//                             backgroundColor: "#27235c",
//                             color: "white",
//                           }}
//                           onClick={addToCart}
//                         >
//                           Add Cart
//                         </button>

//                         <button
//                           style={{
//                             height: "34px",
//                             width: "40%",
//                             backgroundColor: "#27235c",
//                             color: "white",
//                           }}
//                           className="btn btn-sm d-block mx-auto mb-3"
                        
//                         >
//                           Cancel
//                         </button>
//                       </div>
                      
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default GiftDetails;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function GiftDetails() {
  const [gift, setGift] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchGiftDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2001/getById/${id}`
        );
        setGift(response.data);
      } catch (error) {
        console.error("Error fetching gift details:", error);
      }
    };

    fetchGiftDetails();
  }, [id]);

  const addToCart = async () => {
    try {
      const userId = sessionStorage.getItem("userId");
      if (!userId || isNaN(parseInt(userId))) {
        console.error("Invalid userId:", userId);
        return;
      }

      const giftId = parseInt(id);
      const quantity = 1;

      const cart = {
        user: {
          userId: parseInt(userId),
        },
        giftList: {
          id: giftId,
        },
        quantity,
      };
      await axios.post("http://localhost:2001/addCart", cart);

      setShowSuccessMessage(true);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-5">
        {showSuccessMessage && (
          <div  className="alert  alert-success text-center" role="alert">
            Item added to cart successfully!
          </div>
        )}
        <form>
          <div className="row justify-content-center">
            {gift && (
              <>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <div
                      style={{
                        maxWidth: "300px",
                        margin: "auto",
                      }}
                    >
                      <img
                        className="img-fluid shadow mt-4"
                        src={`data:image/jpeg;base64,${gift.image}`}
                        alt={gift.name}
                      />
                    </div>
                    <div className="card-body">
                      <h2 style={{ color: "#27235c" }}>
                        <strong>{gift.name}</strong>
                      </h2>
                      <p style={{ color: "#27235c" }}>
                        <strong>
                          Price: <i className="fa fa-inr"></i> {gift.price}/-
                        </strong>
                      </p>
                      <p style={{ color: "#27235c" }}>
                        <strong>Description: {gift.description}</strong>
                      </p>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-sm d-block mx-auto mb-3"
                          style={{
                            height: "34px",
                            width: "40%",
                            backgroundColor: "#27235c",
                            color: "white",
                          }}
                          onClick={addToCart}
                        >
                          Add Cart
                        </button>

                        <button
                          style={{
                            height: "34px",
                            width: "40%",
                            backgroundColor: "#27235c",
                            color: "white",
                          }}
                          className="btn btn-sm d-block mx-auto mb-3"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default GiftDetails;
