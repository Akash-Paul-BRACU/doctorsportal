import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import FeatureService from '../FeatureService/FeatureService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <Doctor></Doctor>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;