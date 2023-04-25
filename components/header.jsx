// ./components/Header.js
import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <header
      className={`fixed w-full z-50 py-4 transition-all duration-300 ease-in-out items-center flex h-14 ${
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
            {/* Your logo or brand name */}
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
  );
};

export default Header;
