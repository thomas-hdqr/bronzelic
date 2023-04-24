import { useState } from 'react';
import Image from 'next/image'



function HeroSection() {

  const [backgroundImage, setBackgroundImage] = useState('/image-1.webp');
  const handleMouseEnter = (image) => {
    setBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setBackgroundImage('/image-1.webp');
  };


  return (

    <div className="relative h-screen bg-cover bg-center flex items-end justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
  
      {/* 1st element */}
      <div className="relative content-center items-center justify-center gap-y-4">
        <h1 className="text-6xl text-white text-center">Your Hero nope</h1>
        <p className="text-lg text-white text-center">Your Hero nope</p>
      </div>

      {/* 2nd element */}
      <div className='border-white w-full grid grid-cols-2 border-t h-[225px] text-white'>

        <div
          className='border-r border-white relative w-full flex items-start justify-center gap-x-4 cursor-pointer'
          onMouseEnter={() => handleMouseEnter('/image-2.jpg')}
          onMouseLeave={handleMouseLeave}
        >
          <div className='flex flex-col items-center justify-center'>
              <h3>Wedding Rings</h3>
              <div className='w-full h-20 relative'>
                <Image src="/hammered_wedding.avif" alt="" width={400} height={400} className='w-full h-full object-contain' />
              </div>
          </div>
        </div>

        <div
          className='border-r border-white relative w-full flex items-start justify-center gap-x-4 cursor-pointer'
          onMouseEnter={() => handleMouseEnter('/image-4.jpg')}
          onMouseLeave={handleMouseLeave}
        >
          <div className='flex flex-col items-center justify-center'>
            <h3>Engagement Rings</h3>
            <div className='w-full h-20 relative'>
              <Image src="/eternity_solitaire_engagement.webp" alt="" width={400} height={400} className='w-full h-full object-contain' />
            </div>
          </div>
        </div>


      </div>

    </div>
 
  )
}

export default HeroSection