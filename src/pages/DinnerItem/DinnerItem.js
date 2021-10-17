import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DinnerItem = ({dinner}) => {
    const { name, img, price, id, } = dinner;

    return (
      <div onClick="" className="col-lg-4">
        <div className="card hover p-3">
          <div>
            <img height="320px" src={img} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${price}</p>
            <Link to={`/dinnerdetails/${id}`}>see details</Link>
          </div>
        </div>
      </div>
    );
};

export default DinnerItem;