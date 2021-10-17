import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './LunchItem.css';

const LunchItem = ({lunch}) => {
    const {name, img, price, id} = lunch;
    const history = useHistory();

    // const handleId = id => {
    //   history.push(`/lunchdetails/${id}`);
    // }

    return (
      <div className="col-lg-4 ">
        <div className="card hover p-3">
          <div>
            <img height="310px" src={img} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${price}</p>
            <Link to={`/lunchdetails/${id}`}>see details</Link>
          </div>
        </div>
      </div>
    );
};

export default LunchItem;