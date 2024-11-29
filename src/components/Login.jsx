// import React, { useState } from "react";


// const Signup = () => {
//   const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       console.log("Login Data:", formData);
//     } else {
//       console.log("Signup Data:", formData);
//     }
//     setFormData({ username: "", email: "", password: "" }); // Clear form
//   };

//   return (
//     <div className="app">
//       <h1>{isLogin ? "Login" : "Sign Up"}</h1>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <div>
//             <label>Username:</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Enter username"
//               required
//             />
//           </div>
//         )}
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter email"
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter password"
//             required
//           />
//         </div>
//         <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
//       </form>
//       <p>
//         {isLogin
//           ? "Don't have an account? "
//           : "Already have an account? "}
//         <button onClick={() => setIsLogin(!isLogin)}>
//           {isLogin ? "Sign Up" : "Login"}
//         </button>
//       </p>
//     </div>
//   );
// };

// export default Signup;
