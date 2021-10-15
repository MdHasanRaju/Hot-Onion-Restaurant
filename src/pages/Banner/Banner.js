import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner text-center d-flex justify-content-center align-items-center">
        <div>
          <h1>Best Food Waiting For Your Belly</h1>
          <div className="input-group w-50 mb-3 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search Food Items"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button
              className="input-group-text btn btn-danger"
              id="basic-addon2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;