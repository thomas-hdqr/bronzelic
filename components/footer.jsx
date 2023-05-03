import React from 'react'

function Footer() {
  return (

    <div className="px-10">

      <div className="grid grid-cols-5 uppercase text-xs text-main pb-16">
        <div>
          <p className="text-[#59552e9c] pb-4">give us a ring</p>
          <p className="cursor-pointer">help@bronzelic</p>
          <p className="cursor-pointer">912.273.2632</p>
          <p className="cursor-pointer">23 5 ave New york</p>
        </div>
        <div>
          <p className="text-[#59552e9c] pb-4">about</p>
          <p className="cursor-pointer">about us</p>
          <p className="cursor-pointer">custom & bespoke</p>
          <p className="cursor-pointer">reviews</p>
          <p className="cursor-pointer">sustainability</p>
          <p className="cursor-pointer">journal</p>
        </div>
        <div>
          <p className="text-[#59552e9c] pb-4">help</p>
          <p className="cursor-pointer">faq</p>
          <p className="cursor-pointer">lifetime guarantee</p>
          <p className="cursor-pointer">shipping & returns</p>
          <p className="cursor-pointer">contact</p>
          <p className="cursor-pointer">my account</p>
          <p className="cursor-pointer">free size kit</p>
        </div>
        <div>
          <p className="text-[#59552e9c] pb-4">social</p>
          <p className="cursor-pointer">instagram</p>
          <p className="cursor-pointer">facebook</p>
          <p className="cursor-pointer">pinterest</p>
          <p className="cursor-pointer">tik tok</p>
        </div>
        <div>
          <p className="text-[#59552e9c] pb-4">privacy</p>
          <p className="cursor-pointer">terms and privacy</p>
          <p className="cursor-pointer">do not sell my info</p>
        </div>
      </div>

      <div className='uppercase text-main text-xs text-center border-t border-main py-2'>
        <p>© 2023 BRONZELIC CO</p>
      </div>

    </div>

  )
}

export default Footer