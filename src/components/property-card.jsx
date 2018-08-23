import React from 'react';
import '../styles/property-card.css';

const PropertyCard = (props) => (
  <div className="property-card">
    <div className="title">
      <span>
        {props.title}
      </span>
    </div>
    <div className="type">
      <span>
        {props.type}
      </span>
    </div>
  </div>
);

export default PropertyCard;
