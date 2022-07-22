import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-red-600 p-6 '>
      <div className=' flex flex-col gap-3  md:flex-row '>
        <div className=' text-center  md:text-left'>
          <Link to='/'>
            <h3 className='text-3xl md:text-4xl p-4 font-semibold text-white md:w-2/3'>
              tahsin Enterprise.
            </h3>
            <p className='text-md md:text-xl text-white px-4 '>
              We are dedicated to give the good products to our customers.
            </p>
          </Link>
        </div>
        <div className='text-white flex md:flex-row flex-col justify-around items-center md:w-1/2'>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/ourteam'>Our Team</Link>
        </div>
      </div>
      <hr className='' />
      <h2 className='text-white p-4 text-center'>
        Copyright reserved by tahsin Enterprise
      </h2>
    </div>
  );
};

export default Footer;
