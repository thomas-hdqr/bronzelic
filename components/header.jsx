import { useState, useEffect } from 'react';
import { 
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Cross as Hamburger } from 'hamburger-react'

const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleItemClick = () => {
    setOpen(false);
  };


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

        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <div className="absolute bg-white p-4">
            <ul>
              <li onClick={handleItemClick}>Item 1</li>
              <li onClick={handleItemClick}>Item 2</li>
              <li onClick={handleItemClick}>Item 3</li>
              <li onClick={handleItemClick}>Item 4</li>
            </ul>
          </div>
        )}
</div>






    </div>

  );
};

export default Header;
