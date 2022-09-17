import React, { useState } from 'react';

// import modal video
import ModalVideo from 'react-modal-video';
// import '../modalVideo.scss';

// import icons
import { BsPlayCircleFill } from 'react-icons/bs';

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-bgClr py-6 my-container">
      <div className='xl:container mx-auto'>
        <div className='flex flex-col justify-center items-center text-center sm:flex-row sm:justify-between'>
          <h3
            className='heading mb-8 sm:mb-0'
            data-aos='fade-right'
            data-aos-offset='50'
          >
            Vivid гэж юу вэ ?
          </h3>
          {/* modal video */}
          <ModalVideo
            channel='youtube'
            // autoplay
            isOpen={isOpen}
            videoId='nrSGor3kJXQ'
            onClose={() => setIsOpen(false)}
          />
          {/* video */}
          <div
            className='bg-videoBg bg-no-repeat rounded-[10px] rounded-tl-[30px] bg-center bg-cover w-[270px] h-[180px] flex items-center justify-center'
            data-aos='fade-left'
            data-aos-offset='50'
          >
            <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
              <BsPlayCircleFill className='text-4xl text-white/90 hover:text-white hover:scale-110 transition' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;