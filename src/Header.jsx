import React from 'react';
import Logo from './assets/logo-sls.svg';
import './Header.css';

const Header = ({ onOpenSignup }) => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <div className="logo-icon">
            <img src={Logo} alt="" />
          </div>
        </div>

        <nav className="nav">
          <a href="#service" className="nav-link">Service</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#home" className="nav-link">Home</a>
          <a href="#blog" className="nav-link">Blog</a>
        </nav>

        <button className="cta-button" onClick={onOpenSignup}>
          <i className="fa-solid fa-phone"></i>
          Book A Call
        </button>
      </div>
    </header>
  );
};

export default Header;