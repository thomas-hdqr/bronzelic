import Image from 'next/image'
import { useState } from 'react'

function CarrouselMain() {

  const [images, setImages] = useState(false)
  
  return (

    <div className='p-10'>

    <div className="relative w-full uppercase text-main text-xs">
      <div className="absolute left-0">
        <p className="inline-block">custom made just for you</p>
      </div>
      <div className="w-full flex justify-center">
        <p className="inline-block">select a ring style to begin customizing</p>
      </div>
    </div>





      <div className="w-full grid-cols-3 gap-x-2.5">


        <div className="w-full relative ">
          <div className='w-full flex flex-col items-center justify-center gap-y-2.5 px-5'>
            <p className="uppercase text-xs">engagement rings</p>
          </div>
        </div>


      </div>

    </div>

  )
}

export default CarrouselMain