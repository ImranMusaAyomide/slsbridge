import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section with Image */}
        <div className="footer-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200" 
            alt="Business handshake"
            className="footer-image"
          />
        </div>

        {/* Footer Content */}
        <div className="footer-content">
          {/* Left Side - Social and Branding */}
          <div className="footer-left">
            <div className="footer-social">
              <a href="#facebook" className="social-link" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#twitter" className="social-link" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>

            <div className="footer-brand">
  
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="footer-right">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About Us</a>
            <a href="#service" className="footer-link">Service</a>
            <a href="#blog" className="footer-link">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;