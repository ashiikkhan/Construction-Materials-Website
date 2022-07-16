import React from 'react';
import useProductData from '../../hooks/useProductData';
import useTeamData from '../../hooks/useTeamData';
import Slider from '../Slider/Slider';

const Home = () => {
  const [products, setProducts] = useProductData();
  const [team, setTeam] = useTeamData();
  const shortArr = team.slice(0, 3);
  console.log(shortArr);
  return (
    <div className=''>
      <h2 className='text-center text-3xl font-medium md:text-4xl md:font-semibold text-gray-600 p-2 m-4'>
        We Deals with the Future of Construction
      </h2>
      <div className='mb-5'>
        <Slider></Slider>
      </div>
      <div className='my-20'>
        <h2 className='text-center text-3xl font-medium md:text-4xl md:font-semibold text-gray-600 p-2 m-4'>
          Our Products
        </h2>

        <div className='text-center'>
          <div className='grid grid-cols-1 md:grid-cols-3  md:justify-items-center md:grid-rows-8'>
            {products.map((product) => (
              <>
                <div className='p-5 md:p-6 m-4 bg-white shadow-xl shadow-red-200  '>
                  <div>
                    <img
                      src={product.img}
                      alt=''
                      className='w-72 h-64 mx-auto md:w-80 md:h-64'
                    />
                    <h3 className='text-3xl text-gray-500 text-center p-2 '>
                      {product.name}
                    </h3>
                  </div>
                </div>
              </>
            ))}
          </div>
          <button className=' p-4 m-6 rounded-2xl shadow-2xl shadow-red-200 text-white bg-red-400 hover:scale-110 transition duration-300'>
            Go to Products Page
          </button>
        </div>
      </div>
      <div className='my-20 text-center'>
        <h2 className='text-center text-3xl font-medium md:text-4xl md:font-semibold text-gray-600 p-2 m-4'>
          Our Team
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3  md:justify-items-center '>
          {shortArr.map((m) => (
            <div className='p-5 md:p-6 m-4 bg-white shadow-xl shadow-red-200  '>
              <img
                src={m.img}
                alt='team-members'
                className='w-72 h-64 mx-auto md:w-80 md:h-64'
              />
              <div className='p-4 text-center'>
                <h2 className='text-2xl text-gray-500'>{m.name}</h2>
                <h6 className='text-lg text-gray-400'>{m.designation}</h6>
              </div>
            </div>
          ))}
        </div>
        <button className=' p-4 m-6 rounded-2xl shadow-2xl shadow-red-200 text-white bg-red-400 hover:scale-110 transition duration-300'>
          All Team Members
        </button>
      </div>
    </div>
  );
};

export default Home;
