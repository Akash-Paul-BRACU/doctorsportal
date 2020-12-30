import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const DoctorInfo = ({doctor}) => {
    return (
        <div className="col-md-4 row" style={{paddingLeft:'150px'}}>
            <div class="card-deck">
  <div class="card">
    <img style={{width:'300px'}} src={doctor.image} alt=""/>
    <div class="card-body text-center">
      <h3>{doctor.name}</h3>
      <div className="d-flex justify-content-center">
      <FontAwesomeIcon style={{color:'#1CC7C1', marginTop:'5px'}}  icon={doctor.icon}></FontAwesomeIcon>
      <h5>{doctor.contact}</h5>
      </div>
      
    </div>
  </div>
  
  
</div>
        </div>
    );
};

export default DoctorInfo;