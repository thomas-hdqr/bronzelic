import React from 'react'

function Subscribe() {
  return (
    <div className='flex flex-row items-center gap-x-10 m-10 p-4 border-y border-main text-xl'>
      <div className=''>
        <p className='text-main font-noto italic'>Stay in Touch</p>
      </div>
      <div className='flex-1'>
        <form>
          <input className='text-main focus:border-none focus:outline-none placeholder-[#59552e9c]' type="text" placeholder='Your Email Adress'/>
        </form>
      </div>
      <div className="bg-[#59552D] uppercase text-white py-4 px-16 transition duration-200 ease-in cursor-pointer">
          enter
      </div>
    </div>
  )
}

export default Subscribe