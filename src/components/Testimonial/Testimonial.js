import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import quates from '../../assets/icons/quote.svg';
import Comment from './Comment';


const Testimonial = () => {
    const testimonial = [
        {
            id: 1,
            name: 'Harry Kane',
            discription: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'Mirpur',
            image: people1
        },
        {
            id: 2,
            name: 'Alister Cook',
            discription: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'Gulshan',
            image: people2
        },
        {
            id: 3,
            name: 'Alex Healse',
            discription: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'Bannani',
            image: people3
        },
    ]
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='font-bold text-cyan-500'>Testimonial</h3>
                    <h2 className='font-semibold text-2xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-32' src={quates} alt="" />
                </div>
            </div>
            <div className='mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        testimonial.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;