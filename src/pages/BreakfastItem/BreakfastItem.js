import React from 'react';

const BreakfastItem = ({breakfast}) => {
    const { name, img, price, id } = breakfast;

    return (
      <div class="col-lg-4">
        <div class="card hover p-3">
          <div>
            <img height="320px" src={img} class="card-img-top" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">${price}</p>
          </div>
        </div>
      </div>
    );
};

export default BreakfastItem;