import React from 'react';

const TestimonialDetail = ({ testimonial }) => {
    return (

        <div className="col-md-4 text-center">
            <div className="card-deck">
                <div className="card">
                    <div className="card-body">
                        <p className="card-title text-secondary">{testimonial.quote}</p>

                        <div className="d-flex justify-content-center">
                            <div>
                                <img src={testimonial.img} alt="" />
                            </div>
                            <div className="ml-3">
                                <h4 style={{color:'#1CC7C1'}}>{testimonial.name}</h4>
                                <h5 className="text-secondary">{testimonial.city}</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>





    );
};

export default TestimonialDetail;