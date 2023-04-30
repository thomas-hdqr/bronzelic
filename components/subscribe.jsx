import React from 'react'

function Subscribe() {
  return (
    <div className='flex flex-row gap-x-10 m-10 p-6 border-y border-main'>
      <div className=''>
        <p className='text-main text-2xl font-noto italic'>Stay in Touch</p>
      </div>
      <div className='flex-1'>
        <form>
          <input className='text-main text-xl' type="text" placeholder='Your Email Adress'/>
        </form>
      </div>
      <div className="bg-[#59552D] uppercase text-xs text-white py-6 px-16 transition duration-200 ease-in cursor-pointer">
          enter
      </div>
    </div>
  )
}

export default Subscribe