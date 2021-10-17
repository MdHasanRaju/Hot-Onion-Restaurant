import React, { useEffect, useState } from 'react';
import LunchDetails from '../LunchDetails/LunchDetails';
import LunchItem from '../LunchItem/LunchItem';

const LunchItems = () => {
    const [lunches, setLunches] = useState([]);

    useEffect(() => {
        fetch('./lunchData.json')
        .then(res => res.json())
        .then(data => setLunches(data))
    } ,[])

    return (
      <div>
        <h2 className="text-center">Lunch Items: {lunches.length}</h2>
        <div className="row container mx-auto g-4">
          {lunches.map((lunch) => (
            <LunchItem key={lunch.id} lunch={lunch}></LunchItem>
          ))}
        </div>
          
      </div>
    );
};

export default LunchItems;