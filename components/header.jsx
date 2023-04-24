import React from 'react'
import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon,
         ShoppingBagIcon
 } from '@heroicons/react/24/outline'

function Header() {

  

  return (
    <div className="uppercase top-0 sticky w-full justify-between items-center flex z-50 px-5 h-14 text-xs">
      <div className="flex items-center justify-between gap-x-5 cursor-pointer">
        <p>shop</p>
        <p>about us</p>
        <p>journal</p>
        <p>free size kit</p>
      </div>
      <div className='cursor-pointer'>
        <h1>bronzelic</h1>
      </div>
      <div className="flex items-center justify-between gap-x-5 cursor-pointer">
        <p>reviews</p>
        <p>appointments</p>
        <MagnifyingGlassIcon className='h-5'/>
        <ShoppingBagIcon className='h-5'/>
      </div>
    </div>
  )
}

export default Header

