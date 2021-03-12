import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  


  return (
    <div className="navbar flex justify-between items-center">
      <div className="logo-nav">
        <NavLink to="/">
          <img
            src="https://www.zahironline.com/wp-content/uploads/2016/09/gadjian-logo-zahir-online-337x150.png"
            alt="Gadjian.com"
          />
        </NavLink>
      </div>
      <div className="user-nav flex justify-between items-center">
        <p>
          Hello, <span>Gadjian User</span>
        </p>
        <div className="user-photo-nav"></div>
      </div>
    </div>
  );
}

export default Navbar;
