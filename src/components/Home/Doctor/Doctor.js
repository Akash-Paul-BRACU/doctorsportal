import React from 'react';
import DoctorPic from '../../../images/DoctorPic.png';
import DoctorInfo from '../DoctorInfo/DoctorInfo';
import {faPhone} from '@fortawesome/free-solid-svg-icons'
const doctorData = [
    {
        name:'Dr.Caudi',
        image: DoctorPic,
        contact: '01862648528',
        icon: faPhone
        
},
{
    name:'Dr.Caudi',
    image: DoctorPic,
    contact: '01862648528',
    icon: faPhone
},
{
    name:'Dr.Caudi',
    image: DoctorPic,
    contact: '01862648528',
    icon: faPhone
}
]
const Doctor = () => {
    return (
        <div>
            <div>
                <h3 className="text-center my-5" style={{color:'#1CC7C1'}}>Our Doctors</h3>
            </div>
            <div className="d-flex ">
            
            {
                    doctorData.map(doctor => <DoctorInfo doctor={doctor}></DoctorInfo>)
                }
            
                
            </div>
        </div>
    );
};

export default Doctor;