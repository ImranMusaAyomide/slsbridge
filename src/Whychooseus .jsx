import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: 'fa-solid fa-handshake',
      title: 'Local expertise with national reach'
    },
    {
      id: 2,
      icon: 'fa-solid fa-user-tie',
      title: 'Dedicated agent who listen'
    },
    {
      id: 3,
      icon: 'fa-solid fa-camera',
      title: 'Transparent Process'
    },
    {
      id: 4,
      icon: 'fa-solid fa-location-dot',
      title: 'Award winning customer service'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="why-container">
        {/* Who Are We Section */}
        <div className="who-are-we-section">
          <div className="who-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800" 
              alt="Team meeting discussing property"
              className="who-image"
            />
          </div>
          
          <div className="who-content">
            <h2 className="who-title">Who Are We</h2>
            <p className="who-subtitle">Trust SLS Housing Advisors For Decade</p>
            <p className="who-description">
              SLS Housing Advisor has built a reputation for reliability, integrity, and 
              expertise honed over the years. With decades of experience in the 
              housing and real estate sector, SLS is committed to guiding clients through 
              every stage of their property journey — from consultation and property 
              selection to final acquisition and beyond.
            </p>
            <button className="learn-more-btn">
              learn More
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Why Choose US Section */}
        <div className="why-choose-section">
          <h2 className="why-title">Why Choose US</h2>
          <p className="why-description">
            Our long-standing presence in the industry reflects our dedication to transparency, 
            professionalism, and delivering housing solutions you can confidently rely on.
          </p>

          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <p className="feature-title">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;