import React from 'react';
import bg from '../../assets/images/appointment.png'

const HomeContact = () => {
    return (
        <section className='py-5 rounded-md' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='text-center my-8'>
                <h4 className='font-bold text-md text-cyan-500'>Contact us</h4>
                <h2 className='font-semibold text-3xl text-white'>Stay Connected With Us</h2>
            </div>
            <div className='flex justify-center text-center mb-3'>
                <form>
                    <input type="email" placeholder="Enter your email" className="input input-bordered input-info w-full max-w-xs mb-3" /> <br/>
                    <input type="text" placeholder="Your Subject" className="input input-bordered input-info w-full max-w-xs mb-3" />
                    <textarea className="textarea textarea-info w-80 mb-3" placeholder="Your Message"></textarea> <br/>
                    <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 border-none w-80 rounded-md">Button</button>
                </form>
            </div>
        </section>
    );
};

export default HomeContact;