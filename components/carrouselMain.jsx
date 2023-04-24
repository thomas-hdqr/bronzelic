import Image from 'next/image'
import { useState } from 'react'

function CarrouselMain() {

  const [images, setImages] = useState(false)
  
  return (


    <div className="w-full grid-cols-3 gap-x-2.5">


      <div className="w-full relative ">
        <div className='w-full flex flex-col items-center justify-center gap-y-2.5 px-5'>
          <p className="uppercase text-xs">engagement rings</p>
        </div>
      </div>


    </div>
  )
}

export default CarrouselMain