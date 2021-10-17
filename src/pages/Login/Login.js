import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {email, password, setPassword, setEmail, setError, error,handleEmailChange, handlePasswordChange, handleLoginForm} = useAuth();
    console.log(email, password);

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location?.state?.from || "/home"
    
    const handleFoodAccess = (e) => {
      handleLoginForm(e)
      .then((result) => {
          history.push(redirectUrl)
        })
      .catch(error => {
         setError("This Email has already taken , try with another one");
        setTimeout(() => {
         setError("")
         
        }, 6000);
      })
    }

    return (
      <div className="container d-flex justify-content-center align-items-center">
        <div className="w-25">
          <h2 className="text-primary">Login</h2>
          <form onSubmit={handleFoodAccess}>
            <label htmlFor="name">Name:</label>
            <input className="w-100 mb-2" type="text" id="name" placeholder="Name" />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              onBlur={handleEmailChange}
              className="w-100 mb-2"
              type="email"
              id=""
              placeholder="Email"
              required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              onBlur={handlePasswordChange}
              className="w-100"
              type="password"
              id=""
              placeholder="Password"
              required
            />
            <br />
            <br />
            <br />
            <input
              className=" bg-danger border-0 btn-outline-light rounded-1 w-100"
              type="submit"
              value="Submit"
            />
          </form>
          <div>------------or-------------</div>
          <p>
            <span>
              Create New Account?<Link to="/register"> Sign up</Link>
            </span>
          </p>
          <span className="text-danger">{error}</span>
          <br />
          <button className="btn btn-danger">Sign In With Google</button>
        </div>
      </div>
    );
};

export default Login;