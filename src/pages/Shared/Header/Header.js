import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/logo2.png';

const Header = () => {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <img width="125px" src={img} alt="" />
          <div className="d-flex justify-content-between align-items-center">
            <span className="fs-4">
              <i className="fas fa-shopping-cart"></i>
            </span>
            <button className="btn btn-success ms-2 border-0">Login</button>
            <Link to="/register">
              <button className="btn btn-danger ms-2 border-0 rounded-pill">Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    );
};

export default Header;