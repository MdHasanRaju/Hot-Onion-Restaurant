import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/logo2.png';

const Header = () => {
  const {user, logout} = useAuth();

    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/home">
            <img width="125px" src={img} alt="" />
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fs-4">
              <i className="fas fa-shopping-cart"></i>
            </span>
            <Link to="/login">
              <button className="btn btn-success ms-2 border-0">Login</button>
            </Link>
            {
              user?.email && <Link to="/home"><button  className="mx-2" onClick={logout}>log out</button></Link>
            }
            <Link to="/register">
              <button className="btn btn-danger ms-2 border-0 rounded-pill">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    );
};

export default Header;