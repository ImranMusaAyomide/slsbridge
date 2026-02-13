import React from 'react';
import './HeroSection.css';
import heroImage from './assets/heroimg.svg'; 
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="badge-text">Trust 24/7</span>
          </div>
          
          <div className="hero-subheading">
            Housing for all humans
          </div>

          <h1 className="hero-title">
            Secure a place with Zero issue .
          </h1>

          <p className="hero-description">
            Modern House designed around your comfort. 
            From small let place to an advance setting.
            Visit a clean, simple and street free agent.
          </p>

          <button className="hero-cta">
            Contact Us
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src={heroImage} 
              alt="Modern luxury house with pool" 
              className="hero-img"
            />
            <div className="image-overlay"></div>
          </div>
          
          <div className="floating-stars">
            <div className="star-item star-1"><i className="fa-solid fa-star"></i></div>
            <div className="star-item star-2"><i className="fa-solid fa-star"></i></div>
            <div className="star-item star-3"><i className="fa-solid fa-star"></i></div>
            <div className="star-item star-4"><i className="fa-solid fa-star"></i></div>
            <div className="star-item star-5"><i className="fa-solid fa-star"></i></div>
            <div className="star-item star-6"><i className="fa-solid fa-star"></i></div>
            <div className="star-item star-7"><i className="fa-solid fa-star"></i></div>
            <div className="star-item star-8"><i className="fa-solid fa-star"></i></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;