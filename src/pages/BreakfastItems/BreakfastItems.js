import React, { useEffect, useState } from 'react';
import BreakfastItem from '../BreakfastItem/BreakfastItem';

const BreakfastItems = () => {
    const [breakfasts, setBreakfasts] = useState([]);

    useEffect(() => {
        fetch('./breakfastData.json')
        .then(res => res.json())
        .then(data => setBreakfasts(data));
    } ,[])

    return (
        <div>
            <h2>Breakfast Items: {breakfasts.length}</h2>
            <div className="row container mx-auto g-4">
                {
                    breakfasts.map(breakfast => <BreakfastItem
                        key={breakfast.id}
                        breakfast={breakfast}
                        ></BreakfastItem>)
                }
            </div>
        </div>
    );
};

export default BreakfastItems;