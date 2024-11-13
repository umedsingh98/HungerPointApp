import React from "react";
import "./navbar.css";
import { assets } from "../../assets/assets.js";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={assets.logo} alt="logo" />
        <h2>
          Hunger<span id="point">Point</span>
        </h2>
      </div>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
