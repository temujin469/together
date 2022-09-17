import Link from 'next/link';
import React from 'react'

function AreYouReady() {
  return (
    <div className='my-container py-10'>
      <div className='flex flex-col sm:flex-row gap-6 xl:container mx-auto justify-between items-center'>
        <div
          data-aos="fade-right"
        >
          <h2 className='heading'>Та төслөө эхлүүлэхэд бэлэн үү?<br /> Яаг одоо ажил нийтэлэх!</h2>
        </div>
        <div className='flex flex-col gap-6'
          data-aos='fade-left'>
          <button className='btn'><Link href={"#"}><a>Ажил байршуулах</a></Link></button>
          <button className='h-10 py-2 rounded-full border-2 flex-1'>
            <Link href="#">
              <a className='text-black'>Мэргэжилтэн хайх</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AreYouReady;