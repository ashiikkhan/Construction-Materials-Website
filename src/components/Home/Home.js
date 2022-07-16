import React from 'react';
import Slider from '../Slider/Slider';

const Home = () => {
  return (
    <div className=''>
      <h2 className='text-center text-3xl font-medium md:text-4xl md:font-semibold text-gray-600 p-2 m-4'>
        We Deals with the Future of Construction
      </h2>
      <div className=''>
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Home;
