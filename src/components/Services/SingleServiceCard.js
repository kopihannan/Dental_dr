import React from 'react';

const SingleServiceCard = ({ service }) => {
    const { name, description, image } = service;
    return (
        <div className='flex justify-center'>
            <div className="card w-80 bg-base-100 shadow-md">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-md" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-semibold text-slate-800">{name}</h2>
                    <p className='font-medium text-sm text-gray-700'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceCard;