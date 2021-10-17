import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner text-center d-flex justify-content-center align-items-center">
        <div>
          <h1>Best Food Waiting For Your Belly</h1>
          <div className="input-group w-75 mb-3 mx-auto">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Search Food Items"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button style={{marginLeft:"-35px"}}
              className="input-group-text btn btn-danger rounded-pill w-25"
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