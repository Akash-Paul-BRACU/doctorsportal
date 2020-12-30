import React from 'react';
import BlogInfo from '../BlogInfo/BlogInfo';
import William from '../../../images/William.png';
import Watson from '../../../images/Watson.png';
const blogData = [
    {
        name:'Rashed Kabir',
        reviewDate: '22 Aug 2018',
        quote: 'Check at least a doctor in a year for your teeth',
        summary: 'It is a long establish fact that by the readable content of a lot layout.The point......'
    },
    {
        name:'Dr. Caudi',
        reviewDate: '23 Aug 2019',
        image: William,
        quote: '2 times of brush in a day can keep you healthy',
        summary: 'It is a long establish fact that by the readable content of a lot layout.The point......'
    },
    {
        name:'Dr. John Mitchel',
        reviewDate: '23 Aug 2019',
        image: Watson,
        quote: 'The tooth cancer is talking a challenge',
        summary: 'It is a long establish fact that by the readable content of a lot layout.The point......'
    }

];
const Blogs = () => {
    return (
<section>
        <div className="mt-5">
            <div className="text-center">
                <h5 className="text-primary text-uppercase">Our Blog</h5>
                <h1>From Our Blog News</h1>
            </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5 card-deck">
            {
                blogData.map(blog => <BlogInfo blog={blog}></BlogInfo>)
            }
        </div>

        </div>
        </div>
        </section>
    );
};

export default Blogs;