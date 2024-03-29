import { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Cross as Hamburger } from "hamburger-react";
import Link from "next/link";

const Header = ({ isSpecialPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  const headerClass = `hidden sm:flex fixed w-full z-50 py-4 transition-all duration-300 ease-in-out items-center h-14 ${
    isSpecialPage || scrolled ? "bg-white" : "bg-transparent"
  }`;

  const textClass = `text-xs ${
    isSpecialPage || scrolled ? "text-main" : "text-white"
  }`;

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Desktop version */}
      <header className={headerClass}>
        {/* Header content here */}
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center uppercase">
            <div
              className={`flex items-center justify-between gap-x-5 cursor-pointer ${textClass}`}
            >
              <p>shop</p>
              <p>about us</p>
              <p>journal</p>
              <p>free size kit</p>
            </div>
            <Link href="/">
              <div className={` font-bold cursor-pointer ${textClass}`}>
                <h1>bronzelic</h1>
              </div>
            </Link>
            {/* Navigation items */}
            <div
              className={`flex items-center justify-between gap-x-5 cursor-pointer ${textClass}`}
            >
              <p>reviews</p>
              <p>appointments</p>
              <MagnifyingGlassIcon className="h-5" />
              <ShoppingBagIcon className="h-5" />
            </div>
          </div>
        </div>
      </header>

      {/* Responsive version */}
      <div
        className={`sm:hidden flex fixed w-full z-50 p-4 transition-all duration-300 ease-in-out items-center h-14 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex flex-grow justify-start items-center">
          <div className="w-5 cursor-pointer">
            <Hamburger color="black" toggled={toggle} toggle={setToggle} />
          </div>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <h1 className="text-2xl font-bold uppercase cursor-pointer">
            bronzelic
          </h1>
        </div>
        <div className="flex flex-grow justify-end items-center space-x-4">
          <MagnifyingGlassIcon className="h-5 cursor-pointer" />
          <ShoppingBagIcon className="h-5 cursor-pointer" />
        </div>
      </div>

      {toggle && (
        <div className="fixed top-0 left-0 w-full h-full z-40 bg-[#868159]">
          {/* Add your menu items here */}
          <ul className="px-8 pt-20 text-white text-2xl space-y-2 uppercase">
            <li
              onClick={() => setToggle(false)}
              className="cursor-pointer hover:underline flex flex-row gap-x-4"
            >
              shop <ChevronRightIcon className="h-8" />
            </li>
            <li
              onClick={() => setToggle(false)}
              className="cursor-pointer hover:underline flex flex-row gap-x-4"
            >
              about us <ChevronRightIcon className="h-8" />
            </li>
            <li
              onClick={() => setToggle(false)}
              className="cursor-pointer hover:underline flex flex-row gap-x-4"
            >
              journal <ChevronRightIcon className="h-8" />
            </li>
            <li
              onClick={() => setToggle(false)}
              className="cursor-pointer hover:underline"
            >
              free size kit
            </li>
            <li
              onClick={() => setToggle(false)}
              className="pt-8 cursor-pointer hover:underline"
            >
              reviews
            </li>
            <li
              onClick={() => setToggle(false)}
              className="cursor-pointer hover:underline"
            >
              appointments
            </li>
            <li
              onClick={() => setToggle(false)}
              className="flex flex-row gap-x-4 cursor-pointer hover:underline"
            >
              Search <MagnifyingGlassIcon className="h-8" />
            </li>
            <li
              onClick={() => setToggle(false)}
              className="flex flex-row gap-x-4 cursor-pointer hover:underline"
            >
              Bag <ShoppingBagIcon className="h-8" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
