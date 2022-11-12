import React from 'react';
import clock from '../../assets/icons/clock.svg'
import loacation from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import SingleCard from './SingleCard';

const DetailsCard = () => {
    
    const cards = [
        {
            id: '1',
            name: "Opening Hour",
            description: 'Monday-Sunday, 08:30 - 12:00',
            image: clock,
            bg: 'bg-gradient-to-r from-violet-500 to-fuchsia-500'
        },
        {
            id: '2',
            name: "Visit Our Location",
            description: '89/1, Panthapath, Dhaka-1215, Bangladesh',
            image: loacation,
            bg: 'bg-gradient-to-r from-sky-500 to-indigo-500'
        },
        {
            id: '3',
            name: "Contact Us Now",
            description: '+0773-65824',
            image: phone,
            bg: 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 bg-gray-50'>
            {
                cards.map(card => <SingleCard card={card} key={card.id}></SingleCard>)
            }
        </div>
    );
};

export default DetailsCard;