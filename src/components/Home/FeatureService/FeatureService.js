import React from 'react';
import FeaturePicture from '../../../images/FeaturePicture.png';
const FeatureService = () => {
    return (
        <div className="feature-container mt-5 row ">
            <div className="col-md-6">
            <img style={{height:'400px', width:'350px', marginLeft:'200px'}} src={FeaturePicture} alt="pic"/>
            
            </div>
            <div className="col-md-6 ">
                <h1 style={{width:'400px'}} className="mt-3 mb-5">Exceptional Dental Care, on Your Terms</h1>
                <p style={{width:'500px'}} className="text-secondary mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, magnam enim eos impedit eligendi ipsam nam, adipisci sit obcaecati dolores, blanditiis commodi itaque ea exercitationem officia delectus consequatur non repellendus.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};

export default FeatureService;