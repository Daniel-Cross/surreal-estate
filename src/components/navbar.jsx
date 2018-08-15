import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({}) => (
  <div className="Navbar">
    <div className="logo">
      <i className="fas fa-globe-americas" />
      SURREAL ESTATE
    </div>
    <div className="nav">
      <ul>
        <Link className="item" to="/"><i className="fas fa-home" /> View Properties</Link>
        <Link className="item" to="/add-property"><i className="fab fa-fort-awesome" /> Add New Property</Link>
      </ul>
    </div>
  </div>
);

export default Navbar;
