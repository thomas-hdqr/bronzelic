import Image from 'next/image'
import React from 'react'

function Story() {
  return (

    <div>

      <div className='py-40 px-10 sm:grid sm:grid-cols-2 items-center justify-center space-y-10'>

        <div className='bg-[#868156] text-[#E2DCBE] sm:py-32 p-10 sm:px-20 space-y-5 h-auto'>
          <p className='text-xs uppercase'>DESIGNER QUALITY WITHOUT THE MARKUP</p>
          <p className='sm:text-2xl text-lg'>By partnering with <i>local</i> workshops and delivering rings <i>directly</i> to your doorstep, we’re able to offer <i>custom-made</i> rings at a <i>fraction of the price</i> of traditional designer rings.</p>
          <p className='text-md'>Our partner workshops have over 75+ years of combined experience working with top designer brands like Tiffany & Co. and Harry Winston.</p>
        </div>

        <div className='w-full justify-center px-10'>
          <Image src={'/image-3.webp'} alt="" width={500} height={500} objectFit='contain'/>
        </div>

        </div>

    </div>



  )
}

export default Story