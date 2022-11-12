import React from 'react';
import Banner from '../Banner/Banner';
import DetailsCard from '../DetaisCard/DetailsCard';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DetailsCard></DetailsCard>
            <Services></Services>
        </div>
    );
};

export default Home;