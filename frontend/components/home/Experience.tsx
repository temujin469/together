import React from 'react'


const Experience = () => {
  return (
    <section className='my-container my-16 lg:mb-24'>
      <div className='xl:container mx-auto'>
        <div className='flex flex-col md:space-x-10 min-h-[480px] lg:space-x-20 md:flex-row'>
          <div className='flex-1 xxl:min-h-[580px] md:pt-[100px] pt-0 lg:pt-0 justify-between xxl:justify-start  flex space-x-4 items-center lg:space-x-12'>
            {/* images */}
            <div
              className='self-start'
              data-aos='fade-down'
              data-aos-offset='0'
            >
              <img src='/images/exp-img1.png' alt='' data-aos='fade-down' className='w-auto' />
            </div>
            <div className='self-end' data-aos='fade-up'>
              <img src='/images/exp-img2.png' alt='' className='w-auto' />
            </div>
          </div>
          {/* text */}
          <div
            className='flex-1 flex flex-col items-start justify-center m-0 mt-6 lg:mt-0'
            data-aos='fade-left'
          >
            <h2 className='heading mb-6'>
              Та ажил хайж байна уу?
            </h2>
            <p className='font-secondary lg:text-lg mb-6'>
              Тэгвэл мэргэжилээрэй ажилд орох хүсэлт гарган үнэ хөлсөө тохируулаад Vivid -ээр дамжуулан шууд цалингаа аваарай.
              Хялбар байгаа биз ?
            </p>
            <button className='btn'>Ажил хайх</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;