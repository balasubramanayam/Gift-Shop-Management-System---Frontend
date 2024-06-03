// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import "../App.css";
// import HomeNavbar from "./HomeNavbar";
// import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function UserLoginPage() {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);

//   const navigator = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:2001/login",
//         credentials
//       );
//       console.log("Login response:", response);
//       console.log("Login successful:", response.data);
     

//       sessionStorage.setItem("userId", response.data.userId);
//       sessionStorage.setItem("firstName", response.data.firstName);

//       navigator("/dashboard");
//     } catch (error) {
//       console.error(
//         "Login failed:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   const handleInputChange = (e) => {
//     if (e.target.name === "confirmPassword") {
//       setCredentials({
//         ...credentials,
//         [e.target.name]: e.target.value,
//       });
//     } else {
//       setCredentials({
//         ...credentials,
//         [e.target.name]: e.target.value,
//         confirmPassword: credentials.confirmPassword,
//       });
//     }
//   };

//   return (
//     <div>
//       <HomeNavbar />
//       <div className="d-flex justify-content-center align-items-center   backgound">
//         <div
//           style={{ width: "30%", marginTop: "5%" }}
//           className="border border-danger rounded-lg"
//         >
//           <div className="container p-2">
//             <h2 className="mb-4 text-center">Login</h2>
//             <label>Email</label>
//             <input
//               className="form-control mb-4"
//               placeholder="Email address"
//               id="email"
//               value={credentials.email}
//               type="email"
//               name="email"
//               onChange={handleInputChange}
//             />
//             <div className="mb-3">
//               <label>Password</label>
//               <div className="input-group">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="form-control"
//                   placeholder="Enter password"
//                   required
//                   name="password"
//                   onChange={handleInputChange}
//                   style={{ paddingRight: "50px" }}
//                 />
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={() => setShowPassword(!showPassword)}
//                   style={{
//                     position: "absolute",
//                     backgroundColor: "transparent",
//                     border: "none",
//                     right: "10px",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     zIndex: "100",
//                   }}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>
//             <button
//               className="btn btn-sm d-block mx-auto mb-3"
//               style={{
//                 height: "34px",
//                 width: "40%",
//                 backgroundColor: "#27235c",
//                 color: "white",
//               }}
//               onClick={handleLogin}
//             >
//               <FontAwesomeIcon
//                 icon={faArrowAltCircleRight}
//                 className="green-icon"
//               />
//               <span>Sign in</span>
//             </button>
//             <div className="text-center">
//               <p>
//                 Not a member? <a href="/signup">Register</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserLoginPage;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import "../App.css";
// import HomeNavbar from "./HomeNavbar";
// import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function UserLoginPage() {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({ email: "", password: "" });

//   const navigator = useNavigate();

//   const handleInputChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async () => {
//     let emailError = "";
//     let passwordError = "";

//     if (!credentials.email) {
//       emailError = "Please enter your email.";
//     } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(credentials.email)) {
//       emailError = "Please enter a valid email address.";
//     }

//     if (!credentials.password) {
//       passwordError = "Please enter your password.";
//     } else if (credentials.password.length < 6) {
//       passwordError = "Please enter a password with at least 6 characters.";
//     }

//     if (emailError || passwordError) {
//       setErrors({ email: emailError, password: passwordError });
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:2001/login",
//         credentials
//       );
//       console.log("Login response:", response);
//       console.log("Login successful:", response.data);
//       alert("Login Successful");

//       sessionStorage.setItem("userId", response.data.userId);
//       sessionStorage.setItem("firstName", response.data.firstName);

//       navigator("/dashboard");
//     } catch (error) {
//       console.error(
//         "Login failed:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   return (
//     <div>
//       <HomeNavbar />
//       <div className="d-flex justify-content-center align-items-center   backgound">
//         <div
//           style={{ width: "30%", marginTop: "5%" }}
//           className="border  rounded-lg"
//         >
//           <div className=" p-2">
//             <h2 className="mb-4 text-center">Login</h2>
//             <label>Email</label>
//             <input
//               className="form-control mb-4"
//               placeholder="Email address"
//               id="email"
//               value={credentials.email}
//               type="email"
//               name="email"
//               onChange={handleInputChange}
//             />
//             {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
//             <div className="mb-3">
//               <label>Password</label>
//               <div className="input-group">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="form-control"
//                   placeholder="Enter password"
//                   required
//                   name="password"
//                   onChange={handleInputChange}
//                   style={{ paddingRight: "50px" }}
//                 />
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={() => setShowPassword(!showPassword)}
//                   style={{
//                     position: "absolute",
//                     backgroundColor: "transparent",
//                     border: "none",
//                     right: "10px",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     zIndex: "100",
//                   }}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>
//             {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
//             <button
//               className="btn btn-sm d-block mx-auto mb-3"
//               style={{
//                 height: "34px",
//                 width: "40%",
//                 backgroundColor: "#27235c",
//                 color: "white",
//               }}
//               onClick={handleLogin}
//             >
//               <FontAwesomeIcon
//                 icon={faArrowAltCircleRight}
//                 className="green-icon"
//               />
//               <span>Sign in</span>
//             </button>
//             <div className="text-center">
//               <p>
//                 Not a member? <a href="/signup">Register</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserLoginPage;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../App.css";
import HomeNavbar from "./HomeNavbar";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserLoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigator = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validateForm = () => {
    let emailError = "";
    let passwordError = "";

    if (!credentials.email) {
      emailError = "Please enter your email.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(credentials.email)) {
      emailError = "Please enter a valid email address.";
    }

    if (!credentials.password) {
      passwordError = "Please enter your password";
    }
   

    setErrors({ email: emailError, password: passwordError });

    return !emailError && !passwordError;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:2001/login",
        credentials
      );
      console.log("Login response:", response);
      console.log("Login successful:", response.data);
      alert("Login Successful");

      sessionStorage.setItem("userId", response.data.userId);
      sessionStorage.setItem("firstName", response.data.firstName);

      navigator("/dashboard");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      setErrors({ email: "", password: "Incorrect email or password." });
    }
  };

  return (
    <div>
      <HomeNavbar />
      <div className="d-flex justify-content-center align-items-center   backgound">
        <div
          style={{ width: "30%", marginTop: "5%" }}
          className="border  rounded-lg"
        >
          <div className=" p-2">
            <h2 className="mb-4 text-center">Login</h2>
            <label>Email</label>
            <input
              className="form-control mb-4"
              placeholder="Email address"
              id="email"
              value={credentials.email}
              type="email"
              name="email"
              onChange={handleInputChange}
            />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
            <div className="mb-3">
              <label>Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                  required
                  name="password"
                  onChange={handleInputChange}
                  style={{ paddingRight: "50px" }}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    backgroundColor: "transparent",
                    border: "none",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: "100",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
            <button
              className="btn btn-sm d-block mx-auto mb-3"
              style={{
                height: "34px",
                width: "40%",
                backgroundColor: "#27235c",
                color: "white",
              }}
              onClick={handleLogin}
            >
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="green-icon"
              />
              <span>Sign in</span>
            </button>
            <div className="text-center">
              <p>
                Not a member? <a href="/signup">Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLoginPage;

