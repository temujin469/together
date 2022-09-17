import React from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles\

import 'swiper/css';
// import data
import { slider } from '../../utils/data';

const TestimonialSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      autoplay={true}
    >
      {slider.map((slide, index) => {
        // destructure slide
        const { message, image, name } = slide;
        return (
          <SwiperSlide
            className='rounded-lg flex flex-col justify-between p-4 lg:p-6 h-[240px] border-2 border-color3'
            key={index}
          >
            <p className='lg:text-[15px]'>{message}</p>
            <div className='flex gap-x-4 flex-row items-center'>
              <div className='w-14 border-2 border-color3 rounded-full p-[2px]'>
                <img src={image} alt={name} />
              </div>
              <div>
                <div className='font-medium text-base'>{name}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;