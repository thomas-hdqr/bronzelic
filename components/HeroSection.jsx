import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import {Categorie} from 'src/pages/categorie.js'


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
      <div className="absolute inset-0 flex flex-col content-center items-center justify-center">
        <div className='flex row align-baseline space-x-3'>
          <p className="text-sm text-main align-baseline uppercase">custom rings</p>
          <p className="text-2xl text-main align-baseline font-noto italic">made just for you</p>
        </div>
        <div className="bg-[#F9DCBB] text-xs text-main mt-5 py-4 px-10 inline-block transition duration-200 ease-in hover:bg-transparent hover:border-2 hover:border-[#59552D] cursor-pointer">
          SHOP NEW ARRIVALS
        </div>

      </div>

      {/* 2nd element */}
      <div className='absolute border-white w-full grid grid-cols-2 border-t h-[225px] text-white'>

        <div
          className='border-r border-white relative w-full flex items-center justify-center gap-x-4 cursor-pointer'
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
          className='border-r border-white relative w-full flex items-center justify-center gap-x-4 cursor-pointer'
          onMouseEnter={() => handleMouseEnter('/image-4.jpg')}
          onMouseLeave={handleMouseLeave}
        >
          <div className='flex flex-col items-center justify-center'>
            <Link href='./categorie'>
            <h3>Engagement Rings</h3>
            <div className='w-full h-20 relative'>
              <Image src="/eternity_solitaire_engagement.webp" alt="" width={400} height={400} className='w-full h-full object-contain' />
            </div>
            </Link>
          </div>
        </div>

        </div>


    </div>
 
  )
}

export default HeroSection