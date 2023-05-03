// ./components/Header.js
import { useState, useEffect } from 'react';
import { 
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image';

const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div>


      {/* Desktop version */}
      <header
        className={`hidden sm:flex fixed w-full z-50 py-4 transition-all duration-300 ease-in-out items-center h-14 ${
          scrolled ? 'bg-white' : 'bg-transparent'
        }`}
      >
        {/* Header content here */}
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center uppercase">
            <div className={`flex items-center justify-between gap-x-5 cursor-pointer text-xs ${scrolled ? 'text-main' : 'text-white'}`}>
              <p>shop</p>
              <p>about us</p>
              <p>journal</p>
              <p>free size kit</p>
            </div>
            <div className={`text-2xl font-bold cursor-pointer ${scrolled ? 'text-main' : 'text-white'}`}>
              <h1>bronzelic</h1>
            </div>
            {/* Navigation items */}
            <div className={`flex items-center justify-between gap-x-5 cursor-pointer text-xs ${scrolled ? 'text-main' : 'text-white'}`}>
              <p>reviews</p>
              <p>appointments</p>
              <MagnifyingGlassIcon className='h-5'/>
              <ShoppingBagIcon className='h-5'/>
            </div>
          </div>
        </div>
      </header>


      {/* Responsive version */}
      <div
        className={`sm:hidden flex fixed w-full z-50 py-4 transition-all duration-300 ease-in-out items-center h-14 ${
          scrolled ? 'bg-white' : 'bg-transparent'
        }`}
      >
          <div 
          src={toggle ? <XMarkIcon/> : <Bars2Icon/>}
          alt="menu"
          className="w-5"
          onClick={() => setToggle((prev) => !prev)} 
          >
          </div>
          <div className=
          {`${toggle ? 'flex' : 'hidden' } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-2xl bg-white shadow-lg bg-opacity-30 bg-clip-padding backdrop-blur-sm`}>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
      </div>

    </div>

  );
};

export default Header;
