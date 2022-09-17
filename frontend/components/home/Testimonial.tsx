// import components
import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
  return (
    <section className='mb-16 my-container'>
      <div className='xl:container mx-auto'>
        <div className='bg-bgClr max-h-[500px] p-8 sm:p-12 xl:p-16 rounded-lg'>
          <div className='text-center'>
            <h2
              className='heading mb-10'
              data-aos='fade-up'
              data-aos-offset='200'
            >
              Манай үйлчлүүлэгчидийн сэтгэгдэл
            </h2>
          </div>
          {/* slider */}
          <div data-aos='fade-up'>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;