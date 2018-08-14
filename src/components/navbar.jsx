import React from 'react';
import '../styles/navbar.css';

const Navbar = ({}) => (
  <div className="Navbar">
    <div className="logo">
      <i className="fas fa-globe-americas" />
    </div>
    <div className="nav">
      <ul>
        <li className="item">
          <i className="fas fa-home" />
        </li>
        <li className="item">
          <i className="fab fa-fort-awesome" />
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
