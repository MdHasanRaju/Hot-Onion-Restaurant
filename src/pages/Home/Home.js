import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ItemRoute from '../ItemRoute/ItemRoute';
import LunchItems from '../LunchItems/LunchItems';

const Home = () => {
    return (
        <div>
            <LunchItems></LunchItems>
            <Category></Category>
        </div>
    );
};

export default Home;