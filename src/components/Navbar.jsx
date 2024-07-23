import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/images/shoe1.jpeg" height={80} />
        </div>
        <ul className="menu-btn">
          <li href="#">Home</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button className="login-btn">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
