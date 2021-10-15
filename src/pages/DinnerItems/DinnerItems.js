import React, { useEffect, useState } from 'react';
import DinnerItem from '../DinnerItem/DinnerItem';

const DinnerItems = () => {
    const [dinners, setDinners] = useState([]);

    useEffect(() => {
      fetch("./dinnerData.json")
        .then((res) => res.json())
        .then((data) => setDinners(data));
    }, []);

    return (
      <div>
        <h2>Dinner Items: {dinners.length}</h2>
        <div className="row container mx-auto g-4">
          {dinners.map((dinner) => (
            <DinnerItem
              key={dinner.id}
              dinner={dinner}
            ></DinnerItem>
          ))}
        </div>
      </div>
    );
};

export default DinnerItems;