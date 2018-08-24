import React from 'react';
import '../styles/property-card.css';

const PropertyCard = (props) => (
  <div className="property-card">
    <div className="hero">
      <i className="fas fa-home" />
    </div>
    <div className="title">
      <span>
        uewygsdjhb{props.title}
      </span>
    </div>
    <div className="type">
      <span>
        {props.type}wlkejbsadkjbsa - wlkejbsadkjbsa{props.city}
      </span>
    </div>
    <div className="bathrooms">
      <span>
        <i className="fas fa-bath" />
      </span>
      <span className="bathroom-props">
        kjewsabdc{props.bathrooms}
      </span>
    </div>
    <div className="bedrooms">
      <span>
        <i className="fas fa-bed" />
      </span>
      <span className="bedroom-props">
        lwkensdalkcn{props.bedrooms}
      </span>
    </div>
    <div className="price">
      <span>
        <i className="fas fa-pound-sign" />
      </span>
      <span className="price-props">
        lkendsalknc{props.price}
      </span>
    </div>
    <a href="mailto:hello@surreal-estate.com?Subject=I%20Want%20This%20Property!" target="_top">
      <button className="email">
        <i className="far fa-envelope" />Email
      </button>
    </a>
  </div>
);

export default PropertyCard;
