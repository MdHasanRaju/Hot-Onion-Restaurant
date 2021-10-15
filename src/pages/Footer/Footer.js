import React from 'react';
import img from '../../images/logo2.png';

const Footer = () => {
    return (
      <div className="bg-dark text-white mt-3 pt-5 pb-2">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-6 ">
              <div className="text-start">
                <img className="w-25" src={img} alt="" />
              </div>
            </div>
            <div className="col-lg-3 text-start">
              <p>About Online Food</p>
              <p>Read Our Blog</p>
              <p>Sign Up To Deliver</p>
              <p>Add Your Restaurant</p>
            </div>
            <div className="col-lg-3 text-start">
              <p>Get Help</p>
              <p>Read FAQ's</p>
              <p>View All Cities</p>
              <p>Restaurants Near Me</p>
            </div>
          </div>
          <div className="row g-3 mt-3">
            <div className="col-lg-6 text-start">
              <p>
                Copy Right <span className="text-danger fw-bolder ">Online Food</span>
              </p>
            </div>
            <div className="col-lg-6">
              <span className="ms-3">Privacy Policy</span>
              <span className="ms-3">Terms of Use</span>
              <span className="ms-3">pricing</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;