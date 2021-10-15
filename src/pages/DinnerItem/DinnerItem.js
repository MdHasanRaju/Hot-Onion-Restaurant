import React from 'react';

const DinnerItem = ({dinner}) => {
    const { name, img, price, id } = dinner;

    return (
      <div className="col-lg-4">
        <div className="card hover p-3">
          <div>
            <img height="320px" src={img} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${price}</p>
          </div>
        </div>
      </div>
    );
};

export default DinnerItem;