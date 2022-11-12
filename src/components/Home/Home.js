import React from 'react';
import Banner from '../Banner/Banner';
import DentalConcepts from '../DentalConcepts/DentalConcepts';
import DetailsCard from '../DetaisCard/DetailsCard';
import DrAppoinment from '../DrAppoinment/DrAppoinment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DetailsCard></DetailsCard>
            <Services></Services>
            <DentalConcepts></DentalConcepts>
            <DrAppoinment></DrAppoinment>
        </div>
    );
};

export default Home;