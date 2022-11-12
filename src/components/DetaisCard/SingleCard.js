import React from 'react';

const SingleCard = ({ card }) => {
    const { name, description, image, bg } = card;
    return (
        <div className='mb-11'>
            <div className={`flex items-center card card-side ${bg} shadow-xl text-white font-semibold h-40 px-5`}>
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;