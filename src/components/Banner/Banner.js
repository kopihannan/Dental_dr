import React from 'react';
import banner from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div  style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} className="hero py-20 banner">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <img src={banner} className=" rounded-lg shadow-2xl w-full lg:w-1/2" alt='' />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className=" px-10 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;