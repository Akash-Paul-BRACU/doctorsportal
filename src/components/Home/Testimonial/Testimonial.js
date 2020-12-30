import React from 'react';
import William from '../../../images/William.png';
import Ema from '../../../images/Ema.png';
import Watson from '../../../images/Watson.png';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse minus quod, ea, modi eum officiis at cupiditate minima, est nihil. Unde facere ut dignissimos culpa. Repudiandae minus facilis voluptatum!',
        name:'William',
        city:'california',
        img: William

    },
    {
        quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sunt incidunt cumque dolores itaque eligendi rerum sint a est, impedit veritatis minima laboriosam vel aliquam dolorum recusandae. Ab, neque!',
        name:'Ema',
        city:'california',
        img: Ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe modi debitis repellat fugit doloremque iste aspernatur ipsa quam, architecto commodi repudiandae possimus consequatur rem!',
        name:'Watson',
        city:'california',
        img: Watson
    }
]
const Testomonial = () => {
    return (
        <div className="testimonial-container mt-5">
            <div style={{marginLeft:'100px'}}>
                <h5 style={{color:'#1CC7C1'}}>Testimonial</h5>
                <h2>What's our patients says</h2>
            </div>

            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
                    testimonialData.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
                }
            </div>
            
        </div>
        </div>
    );
};

export default Testomonial;