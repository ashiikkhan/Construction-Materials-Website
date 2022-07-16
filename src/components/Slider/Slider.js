import React, { useState } from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/outline';

const Slider = () => {
  const sliderImages = [
    {
      id: '1',
      img: './assets/sliderImages/1.jpg',
    },
    {
      id: '2',
      img: './assets/sliderImages/2.jpg',
    },
    {
      id: '3',
      img: './assets/sliderImages/3.jpg',
    },
  ];
  let count = 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnNextClick = () => {
    count = (currentIndex + 1) % sliderImages.length;
    setCurrentIndex(count);
  };
  const handleOnPreviousClick = () => {
    const imagesLength = sliderImages.length;
    count = (currentIndex + imagesLength - 1) % imagesLength;
    setCurrentIndex(count);
  };

  return (
    <div>
      <div className='select-none flex justify-center items-center'>
        <div className='w-full md:w-11/12 grid grid-cols-12 justify-items-center items-center p-2'>
          <button
            onClick={handleOnPreviousClick}
            className='bg-red-400 text-white p-2 rounded-full hover:scale-110 hidden md:block'>
            <ChevronDoubleLeftIcon className='h-5  w-5 md:h-6 md:w-6  active:scale-125 active:bg-white md:hover:scale-125 '></ChevronDoubleLeftIcon>
          </button>
          <img
            className='shadow-2xl shadow-red-200 col-span-10 col-start-1 col-end-13 md:col-start-2 md:col-end-12 w-full h-64 md:w-11/12 md:h-[26rem]'
            src={sliderImages[currentIndex].img}
            alt=''
          />
          <button
            onClick={handleOnNextClick}
            className='bg-red-400 text-white p-2 rounded-full hover:scale-110 hidden md:block'>
            <ChevronDoubleRightIcon className='h-5 w-5 md:h-6 md:w-6  active:scale-125 active:bg-white md:hover:scale-125 '></ChevronDoubleRightIcon>
          </button>
        </div>
      </div>
      {/* button for mobile screen  */}
      <div className='flex justify-center items-center'>
        <button
          onClick={handleOnPreviousClick}
          className='p-2 mx-4 bg-red-300  rounded-full active:rounded-full hover:rounded-full active:bg-red-200 hover:bg-red-200 md:hidden'>
          <ChevronDoubleLeftIcon className='h-5 w-5 md:h-6 md:w-6 text-white  active:scale-125 active:bg-red-200 md:hover:scale-125'></ChevronDoubleLeftIcon>
        </button>
        <button
          onClick={handleOnNextClick}
          className='p-2 mx-4 bg-red-300 rounded-full active:rounded-full hover:rounded-full active:bg-red-200 hover:bg-red-200  md:hidden'>
          <ChevronDoubleRightIcon className='h-5 w-5 md:h-6 md:w-6 text-white active:scale-125 active:bg-red-200 md:hover:scale-125'></ChevronDoubleRightIcon>
        </button>
      </div>
    </div>
  );
};

export default Slider;
