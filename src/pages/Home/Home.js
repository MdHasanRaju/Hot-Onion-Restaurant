import React from 'react';
import Banner from '../Banner/Banner';
import ItemRoute from '../ItemRoute/ItemRoute';
import LunchItems from '../LunchItems/LunchItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ItemRoute></ItemRoute>
            <LunchItems></LunchItems>
        </div>
    );
};

export default Home;