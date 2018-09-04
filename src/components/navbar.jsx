import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const Navbar = props => {
  let showButton;

  if (!props.userID) {
    showButton = (
      <FacebookLogin
        appId="2245734235706702"
        fields="name,email,picture"
        callback={props.onLogin}
      />
    );
  } else {
    showButton = (
      <button className="signOut">
        <img src={props.picture} />
        Sign Out
      </button>
    );
  }

  return (
    <div className="Navbar">
      <div className="logo">
        <i className="fas fa-globe-americas" />
        <span className="header">Surreal Estate</span>
      </div>
      <div className="nav">
        <ul>
          <Link className="item" to="/">
            <i className="fas fa-home" /> View Properties
          </Link>
          <Link className="item" to="/add-property">
            <i className="fab fa-fort-awesome" /> Add New Property
          </Link>
          <span>{showButton}</span>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
