import { React, useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { 
  ArrowLeftIcon,
  ArrowRightIcon,
 } from '@heroicons/react/24/outline'
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';


function Instagram() {


  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      perView: 2.5,
      spacing: 15,
    },
  });

  

  return (
    <div className="px-10 py-20 space-y-5">


      {/* #1st part */}
      <div className="relative w-full uppercase text-main text-xs">
        <div className="absolute left-0 space-x-40">
          <p className="inline-block">instagram</p>
          <p className="inline-block">@bronzelic</p>
        </div>
      </div>



     {/* #2nd part */}
     <div className="py-10">
      <div className="keen-slider space-x-20" ref={sliderRef}>
            <div className="w-96 h-96 relative keen-slider__slide number-slide1">
              <Image src="/insta1.jpeg" alt="" layout="fill" objectFit="cover" />
            </div>
            <div className="w-96 h-96 relative keen-slider__slide number-slide2">
              <Image src="/insta2.webp" alt="" layout="fill" objectFit="cover" />
            </div>
            <div className="w-96 h-96 relative keen-slider__slide number-slide3">
              <Image src="/insta3.webp" alt="" layout="fill" objectFit="cover" />
            </div>
            <div className="w-96 h-96 relative keen-slider__slide number-slide4">
              <Image src="/insta4.jpeg" alt="" layout="fill" objectFit="cover" />
            </div>
            <div className="w-96 h-96 relative keen-slider__slide number-slide5">
              <Image src="/insta5.jpeg" alt="" layout="fill" objectFit="cover" />
            </div>
            <div className="w-96 h-96 relative keen-slider__slide number-slide6">
              <Image src="/insta6.jpeg" alt="" layout="fill" objectFit="cover" />
            </div>
            <div className="w-96 h-96 relative keen-slider__slide number-slide7">
              <Image src="/insta7.jpeg" alt="" layout="fill" objectFit="cover" />
            </div>
            <div className="w-96 h-96 relative keen-slider__slide number-slide8">
              <Image src="/insta8.webp" alt="" layout="fill" objectFit="cover" />
            </div>
      </div>
    </div>

    </div>
  )
}

export default Instagram