import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">⚡ UMA</div>

      {/* Menu Button for Mobile */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/About'>About</Link></li>
        <li><Link to ="/Projects">Projects</Link></li>
        <li><Link to ="/Contact-me">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
