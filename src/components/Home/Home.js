import React from 'react';
import banner from '../banner/banner.png';
import './Home.css'

const Home = () => {

    return (
        <div className='w-100 banner-img'>
            <img className='img-fluid' src={banner} alt="" />
        </div>
    );
};

export default Home;