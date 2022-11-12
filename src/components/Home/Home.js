import React from 'react';
import Banner from '../Banner/Banner';
import DentalConcepts from '../DentalConcepts/DentalConcepts';
import DetailsCard from '../DetaisCard/DetailsCard';
import DrAppoinment from '../DrAppoinment/DrAppoinment';
import HomeContact from '../HomeContact/HomeContact';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DetailsCard></DetailsCard>
            <Services></Services>
            <DentalConcepts></DentalConcepts>
            <DrAppoinment></DrAppoinment>
            <Testimonial></Testimonial>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;