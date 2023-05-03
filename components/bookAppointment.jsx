import Image from 'next/image'
import React from 'react'

function BookAppointment() {
  return (
    <div>
      <div className="bg-[#F9DCBB] mx-4 sm:mx-10 my-32 py-10 sm:py-20 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10 uppercase text-main">
        <div className="text-center">
          <p>need help deciding?</p>
        </div>
        <div className="">
          <Image src="/appointment_image.jpg" alt="" width="180" height="300" />
        </div>
        <div className="text-center">
          <p>book a virtual or in-person appointment</p>
        </div>
        <div className="bg-[#59552D] text-xs text-white py-5 px-10 transition duration-200 ease-in hover:bg-transparent hover:border-2 hover:bg-white hover:text-main hover:border-[#59552D] cursor-pointer">
          book appointment
        </div>
      </div>
    </div>
  )
}

export default BookAppointment
