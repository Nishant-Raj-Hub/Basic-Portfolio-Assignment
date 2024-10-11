import React, { useState } from "react";
import assignment from "../../assets/img/assignment.png";
import "./NavBar.css";
import menu from "../../assets/img/menu.png";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); 
  };

  return (
    <div className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="logo">
        <img src={assignment} alt="Logo" />
      </div>

      <div className="menu-icon" onClick={toggleNav}>
        <img src={menu} alt="Menu" />
      </div>

      <div className={`rightSideNav ${isNavVisible ? "active" : ""}`}>
        <Link to="/" onClick={toggleNav}>Home</Link>
        <Link to="#about" onClick={toggleNav}>About</Link>
        <Link to="#portfolio" onClick={toggleNav}>Portfolio</Link>
        <Link to="#contact" onClick={toggleNav}>Say Hi!</Link>

        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
