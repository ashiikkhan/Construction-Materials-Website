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
    <div className='select-none flex justify-center items-center'>
      <div className='w-full md:w-11/12 grid grid-cols-12 justify-items-center p-2'>
        <button onClick={handleOnPreviousClick}>
          <ChevronDoubleLeftIcon className='h-5 w-5 md:h-6 md:w-6 text-red-500 active:scale-125 md:hover:scale-125'></ChevronDoubleLeftIcon>
        </button>
        <img
          className='col-span-10 col-start-2 col-end-12 w-full md:w-11/12 md:h-[26rem]'
          src={sliderImages[currentIndex].img}
          alt=''
        />
        <button onClick={handleOnNextClick}>
          <ChevronDoubleRightIcon className='h-5 w-5 md:h-6 md:w-6 text-red-500 md:hover:scale-125'></ChevronDoubleRightIcon>
        </button>
      </div>
    </div>
  );
};

export default Slider;
