import Link from 'next/link'
import React from 'react'

function HowItWork() {
  return (
    <div className='my-container mt-5 mb-16'>
      <div className='xl:container mx-auto'>
        <div className='bg-bgClr rounded-lg p-8 sm:p-10 xl:p-16'>
          <Link href="#">
            <h2 className='heading mb-6 cursor-pointer hover:underline'
              data-aos='fade-right'
              data-aos-offset='100'>Яагаад Vivid гэж ?</h2>
          </Link>
          <div className='flex flex-col md:flex-row gap-8 lg:gap-12'>
            <div className='flex flex-col'
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay='50'>
              <img src='/images/work-with.png' alt='phto'/>
              <div>
                <Link href='#'>
                  <h2 className='sub-heading cursor-pointer mb-3 hover:underline'>Мэргэжилтэн олох</h2>
                </Link>
                <p>Хэдхэн товшилтоор олон төрлийн загвар өмсөгч, жүжигчид, нөлөөлөгчдийг хурдан олж, захиалаарай.</p>
              </div>
            </div>
            <div className='flex flex-col'
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay='50'>
              <img src='/images/stock-broker.png'/>
              <div>
                <Link href='#'>
                  <h2 className='sub-heading cursor-pointer mb-3 hover:underline'>Төлбөр тооцоо</h2>
                </Link>
                <p>Ажил дууссаны төлбөрөө автоматаар төлж, татварын нэхэмжлэх хүлээн авна уу.</p>
              </div>
            </div>
            <div className='flex flex-col'
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay='50'>
              <img src='/images/talent-requirements.png'/>

              <div>
                <Link href='#'>
                  <h2 className='sub-heading cursor-pointer mb-3 hover:underline'>Ажлын менежмент</h2>
                </Link>
                <p>Мэргэжилтэн захиалахдаа нарийн төвөгтэй гэрээ эсвэл уйтгартай бичиг цаасны ажил хийх шаардлагагүй.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWork