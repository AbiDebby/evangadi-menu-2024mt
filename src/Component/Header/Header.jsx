import React from "react";
import "../Header/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-title-container">
        <h1 className="header-title">Evangadi Restaurants</h1>
        <div className="header-title-underline"></div>
      </div>
      <nav className="header-nav">
        <ul className="header-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
