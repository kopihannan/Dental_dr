import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import SingleServiceCard from './SingleServiceCard';

const Services = () => {

    const services = [
        {
            id: '1',
            name: 'Fluoride Treatment',
            description: 'The Local Hospital A&E will typically not conduct an Emergency Tooth Extraction',
            image: fluoride,
        },
        {
            id: '2',
            name: 'Cavity Filling',
            description: 'The Local Hospital A&E will typically not conduct an Emergency Tooth Extraction',
            image: cavity,
        },
        {
            id: '3',
            name: 'Teeth Whitening',
            description: 'The Local Hospital A&E will typically not conduct an Emergency Tooth Extraction',
            image: whitening,
        },
    ]

    return (
        <div className='my-16'>
            <div className='text-center my-7'>
                <h3 className='text-xl font-bold text-cyan-500'> OUR SERVICES</h3>
                <h1  className='text-3xl font-medium text-slate-700 mt-2'>Services We Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    services.map(service => <SingleServiceCard service={service} key={service.id}></SingleServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;