import React from 'react'

function Subscribe() {
  return (
    <div>

      {/* Desktop version */}
      <div className='hidden sm:flex flex-row items-center gap-x-10 m-10 p-4 border-y border-main text-xl'>
        <div className=''>
          <p className='text-main font-noto italic'>Stay in Touch</p>
        </div>
        <div className='sm:flex-1'>
          <form>
            <input className='text-main focus:border-none focus:outline-none placeholder-[#59552e9c]' type="text" placeholder='Your Email Adress'/>
          </form>
        </div>
        <div className="bg-[#59552D] uppercase text-white py-4 px-16 transition duration-200 ease-in cursor-pointer text-center">
            enter
        </div>
      </div>

      {/* Responsive version */}
      <div className='sm:hidden items-center m-2 p-4 border-b border-main text-xl'>

          <div>
            <p className='text-main font-noto italic text-center pb-5'>Stay in Touch</p>
          </div>

          <div className='border border-main px-3 flex flex-row space-x-4 text-main font-light'>
            <input type="email" placeholder="Your Email Adress" />
            <div className='py-4 border-l border-main pl-4'>SUBMIT</div>
          </div>
      </div>




    </div>

  )
}

export default Subscribe