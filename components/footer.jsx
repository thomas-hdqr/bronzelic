import React from 'react'

function Footer() {
  return (

    <div className="px-10">

      <div className="grid grid-cols-5 uppercase text-xs text-main pb-16">
        <div>
          <p className="text-[#59552e9c] pb-4">give us a ring</p>
          <p className="cursor-pointer hover:underline">help@bronzelic</p>
          <p className="cursor-pointer hover:underline">912.273.2632</p>
          <p className="cursor-pointer hover:underline">23 5 ave New york</p>
        </div>
        <div>
          <p className="text-[#59552e9c] pb-4">about</p>
          <p className="cursor-pointer hover:underline">about us</p>
          <p className="cursor-pointer hover:underline">custom & bespoke</p>
          <p className="cursor-pointer hover:underline">reviews</p>
          <p className="cursor-pointer hover:underline">sustainability</p>
          <p className="cursor-pointer hover:underline">journal</p>
        </div>
        <div>
          <p className="text-[#59552e9c] pb-4">help</p>
          <p className="cursor-pointer hover:underline">faq</p>
          <p className="cursor-pointer hover:underline">lifetime guarantee</p>
          <p className="cursor-pointer hover:underline">shipping & returns</p>
          <p className="cursor-pointer hover:underline">contact</p>
          <p className="cursor-pointer hover:underline">my account</p>
          <p className="cursor-pointer hover:underline">free size kit</p>
        </div>
        <div>
          <p className="text-[#59552e9c] pb-4">social</p>
          <p className="cursor-pointer hover:underline">instagram</p>
          <p className="cursor-pointer hover:underline">facebook</p>
          <p className="cursor-pointer hover:underline">pinterest</p>
          <p className="cursor-pointer hover:underline">tik tok</p>
        </div>
        <div>
          <p className="text-[#59552e9c] pb-4">privacy</p>
          <p className="cursor-pointer hover:underline">terms and privacy</p>
          <p className="cursor-pointer hover:underline">do not sell my info</p>
        </div>
      </div>

      <div className='uppercase text-main text-xs text-center border-t border-main py-2'>
        <p>© 2023 BRONZELIC CO</p>
      </div>

    </div>

  )
}

export default Footer