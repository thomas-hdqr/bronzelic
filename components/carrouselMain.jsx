import Image from 'next/image'

function CarrouselMain() {

  
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





      <div className="w-full grid grid-cols-3 gap-x-2.5 py-40">


        <div className="w-full relative ">
          <div className='w-full grid items-center justify-center gap-y-2.5 px-5'>
            <div className=''>
              <p className="uppercase text-xs text-main text-center py-2">engagement rings</p>
            </div> 
            <div className='border-y border-[#59552D] py-4'>
              <Image src="/engagement.webp" alt="engagement rings" width={500} height={500} />
            </div>
            <div className="bg-[#59552D] uppercase text-center text-xs text-white py-5 px-10 transition duration-200 ease-in hover:bg-transparent hover:border-2 hover:bg-white hover:text-main hover:border-[#59552D] cursor-pointer">
              get started
            </div>  
          </div>       
        </div>


        <div className="w-full relative ">
          <div className='w-full grid items-center justify-center gap-y-2.5 px-5'>
            <div className=''>
              <p className="uppercase text-xs text-main text-center py-2">diamond bands</p>
            </div> 
            <div className='border-y border-[#59552D] py-4'>
              <Image src="/engagement.webp" alt="engagement rings" width={500} height={500} />
            </div>
            <div className="bg-[#59552D] uppercase text-center text-xs text-white py-5 px-10 transition duration-200 ease-in hover:bg-transparent hover:border-2 hover:bg-white hover:text-main hover:border-[#59552D] cursor-pointer">
              get started
            </div>  
          </div>       
        </div>


        <div className="w-full relative ">
          <div className='w-full grid items-center justify-center gap-y-2.5 px-5'>
            <div className=''>
              <p className="uppercase text-xs text-main text-center py-2">solid bands</p>
            </div> 
            <div className='border-y border-[#59552D] py-4'>
              <Image src="/engagement.webp" alt="engagement rings" width={500} height={500} />
            </div>
            <div className="bg-[#59552D] uppercase text-center text-xs text-white py-5 px-10 transition duration-200 ease-in hover:bg-transparent hover:border-2 hover:bg-white hover:text-main hover:border-[#59552D] cursor-pointer">
              get started
            </div>  
          </div>       
        </div>



      </div>

    </div>
  )
}

export default CarrouselMain

