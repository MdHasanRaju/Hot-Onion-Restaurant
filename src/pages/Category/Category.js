import React from 'react';
import img1 from '../../images/extra/adult-blur-blurred-background-687824.png';
import img2 from '../../images/extra/chef-cook-food-33614.png';
import img3 from '../../images/extra/architecture-building-city-2047397.png';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
      <div className="container py-4">
        <div className="row w-75">
          <h3>Why you choose us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            unde quidem pariatur maiores deleniti animi nesciunt totam nulla sed
          </p>
        </div>
        <div className="row g-4">
          <div style={{ borderRadius: "10px" }} className="col-lg-4 hover p-3 ">
            <img className="w-100 h-75" src={img1} alt="" />
            <div className="d-flex mt-2">
              <div className="ps-2">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="ms-2">
                <h6>Fast delivery</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link className="fw-bolder">see details</Link>
              </div>
            </div>
          </div>
          <div style={{ borderRadius: "10px" }} className="col-lg-4 hover p-3">
            <img className="w-100 h-75" src={img2} alt="" />
            <div className="d-flex mt-2">
              <div className="ps-2">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="ms-2">
                <h6>A Good Auto Responder</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link className="fw-bolder">see details</Link>
              </div>
            </div>
          </div>
          <div style={{ borderRadius: "10px" }} className="col-lg-4 p-3 hover">
            <img className="w-100 h-75" src={img3} alt="" />
            <div className="d-flex mt-2">
              <div className="ps-2">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="ms-2">
                <h6>Home Delivery</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link className="fw-bolder">see details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Category;