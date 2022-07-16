import React from 'react';
import useProductData from '../../hooks/useProductData';

const Products = () => {
  const [products, setProducts] = useProductData();
  return (
    <div>
      <h2 className='text-2xl font-medium text-center text-gray-700 p-4 my-4 sm:text-3xl md:text-4xl'>
        Construction Materials We Sell
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-8  md:justify-items-center md:grid-rows-8'>
        {products.map((product) => (
          <>
            <div className='p-5 md:p-6 m-4 bg-white shadow-2xl md:col-start-2 md:col-span-6 '>
              <div>
                <img
                  src={product.img}
                  alt=''
                  className='w-72 h-72 mx-auto md:w-[32rem] md:h-80'
                />
                <h3 className='text-3xl text-gray-700 text-center p-2'>
                  {product.name}
                </h3>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Products;
