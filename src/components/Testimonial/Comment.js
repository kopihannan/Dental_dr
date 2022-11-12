import React from 'react';

const Comment = ({ comment }) => {
    const { name, discription, image, address } = comment;
    return (
        <div className='px-7 py-5 bg-gray-50 shadow-md rounded-md my-14'>
            <div className=' text-justify'>
                <p className='font-medium text-sm'>{discription}</p>
            </div>
            <div className='flex items-center pt-6'>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt='' />
                    </div>
                </div>
                <div className='pl-5'>
                    <h2 className='font-semibold'>{name}</h2>
                    <h4 className='font-medium text-sm'>{address}</h4>
                </div>
            </div>
        </div>
    );
};

export default Comment;