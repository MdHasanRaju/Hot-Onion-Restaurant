import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemRoute = () => {
    const myStyle = {
        color:"red",
        fontSize:"bold", 
    }

    return (
      <div className="container d-flex justify-content-center">
        <NavLink activeStyle={myStyle} className="ms-4 text-bold " to="/breakfast">BreakFast
        </NavLink>
        <NavLink activeStyle={myStyle} className="ms-4 text-bold " to="/lunch">
          Lunch
        </NavLink>
        <NavLink activeStyle={myStyle} className="ms-4 text-bold " to="/dinner">
          Dinner
        </NavLink>
      </div>
    );
};

export default ItemRoute;