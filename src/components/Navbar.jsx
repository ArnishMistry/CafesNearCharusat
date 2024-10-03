// import React from 'react';
import logo from "../../images/newlogo.jpg"; // Assuming you have the logo

const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li id="item">
          <a href="#">Home</a>
        </li>
        <li id="item">
          <a href="#">Contact Us</a>
        </li>
        <li id="item">
          <a href="login.html">Sign up</a>
        </li>
        <li id="item">
          <a href="login.html">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
