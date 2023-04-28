import { React, useState } from 'react'
import Image from 'next/image'
import { 
  ArrowLeftIcon,
  ArrowRightIcon,
 } from '@heroicons/react/24/outline'

const images = [
  '/insta1.jpeg',
  '/insta2.webp',
  '/insta3.webp',
  '/insta4.jpeg',
  '/insta5.jpeg',
  '/insta6.jpeg',
  '/insta7.jpeg',
  '/insta8.webp',
];

function Instagram() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="p-10">


      {/* #1st part */}
      <div className="relative w-full uppercase text-main text-xs">
        <div className="absolute left-0 space-x-40">
          <p className="inline-block">instagram</p>
          <p className="inline-block">@bronzelic</p>
        </div>
        <div className="w-full flex justify-end space-x-8">
          <ArrowLeftIcon
            className='h-5 cursor-pointer'
            onClick={handlePrev} 
          />
          <p className="">
             {currentIndex + 1} of {images.length}
          </p>
          <ArrowRightIcon
            className='h-5 cursor-pointer'
            onClick={handleNext} 
          />
        </div>
      </div>



     {/* #2nd part */}
      <div className="relative w-full flex justify-center items-center">
      <div className="w-1/2 flex scrollbar-none overflow-x-auto py-10 cursor-grab">
        <div
          className="flex transition-all duration-300"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div className="w-96 h-96" key={index}>
              <Image src={image} alt={`Slide ${index}`} className='object-cover w-96 h-96' fill />
            </div>
          ))}
        </div>
      </div>

      
    </div>

    </div>
  )
}

export default Instagram