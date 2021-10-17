import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const BreakfastDetails = () => {
    const {breakfastId} = useParams();
    const [details, setDetails] = useState({});
    console.log(breakfastId);

    useEffect(() => {
      fetch("/breakfastData.json")
        .then((res) => res.json())
        .then((data) => {
          const p = data?.find((d) => d.id === breakfastId);
          setDetails(p);
        });
    }, [breakfastId]);

    return (
      <div className="my-3">
        <div className="card mx-auto" style={{ width: "18rem" }}>
          <img src={details.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-text">{details.name}</h5>
            <p className="card-text">{details.desc}</p>
            <p className="card-text">${details.price}</p>
          </div>
        </div>
      </div>
    );
};

export default BreakfastDetails;