import React from 'react';
import doctor from '../../assets/images/doctor.png';
import bg from '../../assets/images/appointment.png'

const DrAppoinment = () => {
    return (
        <div  style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} className="hero my-40">
            <div className="hero-content flex-col lg:flex-row-reverse px-40">
                <img src={doctor} className="w-1/2 -mt-32 rounded-lg hidden lg:block" alt=''/>
                <div className=''>
                    <h3 className="text-md font-bold text-cyan-500">APPOINMENT</h3>
                    <h1 className='text-2xl font-medium pb-4 text-white'>Make an appointment Today</h1>
                    <p className="pb-5 text-justify text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn border-none bg-gradient-to-r from-sky-500 to-indigo-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DrAppoinment;