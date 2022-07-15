import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Products', link: '/products' },
    { id: 3, name: 'Our Team', link: '/ourteam' },
  ];
  return (
    <div className='flex justify-between items-center bg-red-600 px-6 md:px-10 py-7'>
      <div className='w-5/7 md:w-1/2 lg:w-3/5'>
        <Link to='/'>
          <h2 className='text-3xl  md:text-4xl font-bold before:block before:absolute before:bg-white before:-inset-1 before:-skew-y-3 relative inline-block p-1'>
            <span className='relative text-red-600'>tahsin Enterprise.</span>
          </h2>
        </Link>
      </div>
      <div className='w-2/7 md:w-1/2 lg:w-2/5 flex justify-end md:hidden relative'>
        <div onClick={() => setOpen(!open)} className='h-10 w-10 text-white'>
          {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>
      </div>
      <div
        className={`w-2/5 absolute flex flex-col md:w-1/2 md:static md:flex md:flex-row justify-around text-white ${
          open
            ? 'top-24 right-0 bg-red-600 transition ease-in-out duration-500'
            : 'top-[-8rem] right-0 transition ease-in-out duration-500'
        }`}>
        {routes.map((route) => (
          <Link
            key={route.id}
            to={route.link}
            className='font-medium py-1 px-6 lg:px-8 md:rounded-md transition ease-in-out delay-50 hover:text-red-600 hover:bg-white hover:delay-50  hover:ease-in-out'>
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
