import React from 'react';
import Doctor from '../../../images/Doctor.png';
import './MakeAppointment.css';
const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={Doctor} alt=""/>
                    </div>
                    <div className="col-md-7 mt-5 py-5" style={{paddingLeft:'50px'}}>
                        <h5  className="text-primary  text-uppercase ">APPOINTMENT</h5>
                        <h2 className="mb-5 text-white">Make An Appointment Today</h2>
                        <p className="text-white mb-5 w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laboriosam voluptate tenetur vero qui perspiciatis commodi minus velit in autem?</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;