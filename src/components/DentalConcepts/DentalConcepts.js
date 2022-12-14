import React from 'react';
import treatment from '../../assets/images/treatment.png'

const DentalConcepts = () => {
    return (
        <div className="hero bg-gray-50 py-10 my-10">
            <div className="hero-content flex-col lg:flex-row lg:justify-center px-40">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='pl-12'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn border-none bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalConcepts;