import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
// import Signup from './components/Login';
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/signup" element={<Signup />} /> */}

      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;


// https://react.dev/reference/react/Component

// https://codesandbox.io/s/react-counter-class-component-f9cyl
