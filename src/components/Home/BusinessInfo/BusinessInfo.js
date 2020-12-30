import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker,  faPhone} from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'opening Hours',
        description: 'We are open 7 hours',
        icon: faClock,
        background: 'primary'

    },

    {
        title: ' Visit our location',
        description: 'Brooklin, Ny 1000, USA',
        icon: faMapMarker,
        background: 'dark'
        
    },

    {
        title: 'Call Us Now',
        description: '+152365563652',
        icon: faPhone,
        background: 'primary'
        
    }
];
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
               infosData.map(info => <InfoCard info={info}></InfoCard>)     
            }
            </div>
        </section>
    );
};

export default BusinessInfo;