import React from 'react';
import './FeaturedProperties.css';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
      title: 'Modern 4 Bedroom Flat.',
      description: 'A beautiful updated family house with a spacious background.',
      price: '$749,000'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      title: 'Modern 4 Bedroom Flat.',
      description: 'A beautiful updated family house with a spacious background.',
      price: '$749,000'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      title: 'Modern 4 Bedroom Flat.',
      description: 'A beautiful updated family house with a spacious background.',
      price: '$749,000'
    }
  ];

  return (
    <section className="featured-properties">
      <div className="featured-container">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="property-image-wrapper">
              <img 
                src={property.image} 
                alt={property.title}
                className="property-image"
              />
            </div>
            
            <div className="property-content">
              <h3 className="property-title">{property.title}</h3>
              <p className="property-description">{property.description}</p>
              
              <div className="property-footer">
                <button className="schedule-btn">
                  Schedule Tour
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
                <span className="property-price">{property.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;