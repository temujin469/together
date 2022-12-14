import Image from "next/image";
import Link from "next/link";
import { professions } from "../../utils/data";

const Headsets = () => {
  return (
    <section className='py-12 lg:py-24 my-container'>
      <div className='xl:container mx-auto'>
        {/* title */}
        <h2
          className='heading mb-6'
          data-aos='fade-right'
        >
          Танд хэн хэрэгтэй вэ?
        </h2>
        {/* grid */}
        <div>
          <div className='grid xl:mx-16 gap-5 sm:gap-8 md:gap-10 lg:gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
            {/* item */}
            {
              professions.map((pro) => (
                <div
                  data-aos='zoom-in'
                  data-aos-delay='0'
                  key={pro.slug}
                  className='border overflow-hidden p-2 border-pink-400 rounded-lg h-[200px] sm:h-[250px]  lg:h-[300px] md:max-w-[250px] lg:max-w-[300px]'>
                  <div
                    className='relative w-full h-full overflow-hidden'

                  >
                    <Image src={pro.bg_img} alt='' className="object-cover w-full rounded-lg" layout="fill" />
                    <div className='absolute rounded-lg left-0 bottom-0 h-full p-6 w-full flex flex-col justify-between items-center hover:backdrop-blur-sm transition-all duration-200'>
                      <h4 className='text-white sub-heading mb-2'>{pro.name}</h4>
                      <button className="btn btn-2">
                        <Link href={'#'}>
                          <a className="md:text-lg">
                            бүгдийг үзэх
                          </a>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;