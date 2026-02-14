import React from 'react';
import './BuyerBonus.css';

const BuyerBonus = () => {
  return (
    <section className="buyer-bonus">
      <div className="buyer-container">
        {/* Left Image */}
        <div className="buyer-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800" 
            alt="Modern luxury house with pool"
            className="buyer-image"
          />
        </div>

        {/* Right Content */}
        <div className="buyer-content">
          <h2 className="buyer-title">
            Spring Buyer Bonus - Up to $5000 in
          </h2>
          <h3 className="buyer-subtitle">Closing Credits</h3>
          
          <p className="buyer-description">
            Buy a home with Home Realty before June 30th and receive up to 
            $30,000 toward
          </p>

          <div className="buyer-features">
            <div className="feature-check">
              <i className="fa-solid fa-circle-check"></i>
              <span>Applies to homes priced $400k+</span>
            </div>
            <div className="feature-check">
              <i className="fa-solid fa-circle-check"></i>
              <span>Multiyear, refereed under.</span>
            </div>
          </div>

          <div className="buyer-actions">
            <button className="schedule-tour-btn">
              Schedule tour
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="smart-broker-btn">
              Smart Broker
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyerBonus;