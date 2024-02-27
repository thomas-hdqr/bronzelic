/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Header from "../../components/Header.jsx";
import Subscribe from "../../components/Subscribe.jsx";
import Footer from "../../components/Footer.jsx";
import Marquee from "../../components/Marquee.jsx";
import BookAppointment from "../../components/BookAppointment.jsx";
import { StarIcon } from "@heroicons/react/24/solid";
import ProductDetails from "../../components/ProductDetails.jsx";
import ProductStory from "../../components/ProductStory.jsx";
import ProductPairing from "../../components/ProductPairing.jsx";


export default function Product() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Additional states for the second slider
  const [sliderRef2] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 9,
      spacing: 15,
    },
  });

  const option = [];
  for (let i = 3; i <= 12; i += 0.25) {
    option.push(<option value={i.toFixed(2)}>{i.toFixed(2)}</option>);
  }

  return (
    <div>
      <Header isSpecialPage={true} />

      <div className="hidden sm:grid sm:grid-cols-3 sm:pt-14">
        {/* Step 1 */}
        <div className="flex items-center justify-center py-6 cursor-pointer space-x-2 border-y border-r border-[#59552D] bg-[#F9DCBB]">
          <div className="w-5 h-5 rounded-full border border-main flex items-center justify-center">
            <span className="font-main text-xs">1</span>
          </div>
          <p className="text-xs font-main italic">Customize Yours</p>
        </div>

        {/* Step 2 */}
        <div className="flex items-center justify-center py-6 cursor-pointer space-x-2 border-y border-[#59552D] ">
          <div className="w-5 h-5 rounded-full border border-main flex items-center justify-center">
            <span className="font-main text-xs">2</span>
          </div>
          <p className="text-xs font-main">Choose Your Diamond</p>
        </div>

        {/* Step 3 */}
        <div className="flex items-center justify-center py-6 cursor-pointer space-x-2 border border-[#59552D] ">
          <div className="w-5 h-5 rounded-full border border-main flex items-center justify-center">
            <span className="font-main text-xs">3</span>
          </div>
          <p className="text-xs font-main">Confirm</p>
        </div>
      </div>

      <div ref={sliderRef} className="sm:grid sm:grid-cols-3">
        <div className="keen-slider col-span-2">
          <div  className="flex items-center">
            {/* Your slides */}

            <div className="w-full h-full object-contain relative keen-slider__slide number-slide1">
              <img
                src="/Square_Solitaire_Emerald_Std_1.5mm_YG_Mirror_1.5ct.webp"
                alt=""
                width="1200"
                height="960"
              />
            </div>
            <div className="w-full relative keen-slider__slide number-slide2">
              <img
                src="/Square-Solitaire_04.jpg"
                alt=""
                width="1200"
                height="960"
              />
            </div>
            <div className="w-full relative keen-slider__slide number-slide3">
              <img
                src="/Square-Solitaire_05.webp"
                alt=""
                width="1200"
                height="960"
              />
            </div>
            <div className="w-full relative keen-slider__slide number-slide4">
              <img
                src="/Square-Solitaire_01.webp"
                alt=""
                width="1200"
                height="960"
              />
            </div>
            <div className="w-full relative keen-slider__slide number-slide5">
              <img
                src="/Square-Solitaire_02.webp"
                alt=""
                width="1200"
                height="960"
              />
            </div>
            <div className="w-full relative keen-slider__slide number-slide6">
              <img
                src="/Square-Solitaire_03.webp"
                alt=""
                width="1200"
                height="960"
              />
            </div>
          </div>

    {/* Arrow components for navigation */}
{loaded && instanceRef.current && (
  <>
    <Arrow
      left
      onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
      disabled={currentSlide === 0}
    />
    <Arrow
      onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
      disabled={
        currentSlide === instanceRef.current.track.details.slides.length - 1
      }
    />
  </>
)}


        </div>

        <div className="flex flex-col justify-between w-full h-full py-5 col-span-1 1000:col-span-3 relative uppercase text-main">


          {/* first part */}
          <div>
            <div className="px-7 flex justify-between text-xs">
              <p>step 1: customize yours</p>
              <p className="cursor-pointer">24 reviews</p>
            </div>
            <div className="flex justify-end">
              <StarIcon className="text-yellow-500 h-3 w-3" />
              <StarIcon className="text-yellow-500 h-3 w-3" />
              <StarIcon className="text-yellow-500 h-3 w-3" />
              <StarIcon className="text-yellow-500 h-3 w-3" />
              <StarIcon className="text-yellow-500 h-3 w-3" />
            </div>
            <h1 className="py-8 text-center">the square solitaire</h1>
          </div>

          {/* second part */}
          <div ref={sliderRef2}>
            <div className="px-10 py-3">
              <div>
                <div className="border-b border-main py-2">
                  <p className="text-main text-xs">
                    <span className="text-main-opacity-200 mr-1">shape:</span>
                    radiant
                  </p>
                </div>
                <div
                 
                  className="second-slider flex space-between gap-x-3 pt-3"
                >
                  <div className="second-slider__slide number-slide1 w-8 h-8 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <img alt="" src="/Diamond-Icon_Asscher.png" />
                  </div>
                  <div className="second-slider__slide number-slide2 w-8 h-8 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <img alt="" src="/Diamond-Icon_Cushion.png" />
                  </div>
                  <div className="second-slider__slide number-slide3 w-8 h-8 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <img alt="" src="/Diamond-Icon_Emerald.png" />
                  </div>
                  <div className="second-slider__slide number-slide3 w-8 h-8 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <img alt="" src="/Diamond-Icon_Marquise.png" />
                  </div>
                  <div className="second-slider__slide number-slide3 w-8 h-8 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <img alt="" src="/Diamond-Icon_Oval.png" />
                  </div>
                  <div className="second-slider__slide number-slide3 w-8 h-8 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <img alt="" src="/Diamond-Icon_Pear.png" />
                  </div>
                  <div className="second-slider__slide number-slide3 w-8 h-8 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <img alt="" src="/Diamond-Icon_Princess.png" />
                  </div>
                  <div className="second-slider__slide number-slide3 w-8 h-8 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <img alt="" src="/Diamond-Icon_Radiant.png" />
                  </div>
                  <div className="second-slider__slide number-slide3 w-8 h-8 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <img alt="" src="/Diamond-Icon_Round.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-10 py-3">
              <div>
                <div className="border-b border-main py-2">
                  <p className="text-main text-xs">
                    <span className="text-main-opacity-200 mr-1">width:</span>
                    1.5mm
                  </p>
                </div>
                <div className="flex space-between gap-x-3 pt-3 text-xs">
                  <div className="w-8 h-8 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <p>1.5</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <p>3</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <p>4.5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-10 py-3">
              <div>
                <div className="border-b border-main py-2">
                  <p className="text-main text-xs">
                    <span className="text-main-opacity-200 mr-1">metal:</span>
                    yellow gold
                  </p>
                </div>
                <div className="flex justify-between gap-x-3 pt-3 text-xs">
                  <div className="w-10 h-10 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#ffe6aa]"></div>
                  </div>
                  <div className="w-10 h-10 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#ebebeb]"></div>
                  </div>
                  <div className="w-10 h-10 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#ffd2be]"></div>
                  </div>
                  <div className="w-10 h-10 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0 cursor-pointer">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#d2d2d2]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-10 py-3">
              <div>
                <div className="border-b border-main py-2">
                  <p className="text-main text-xs">
                    <span className="text-main-opacity-200 mr-1">karat:</span>
                    14k
                  </p>
                </div>
                <div className="flex justify-between gap-x-3 pt-3 text-xs">
                  <select className=" text-center w-24 h-10 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center cursor-pointer">
                    <option value="14k">14K</option>
                    <option value="18k">18K</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-10 py-3">
              <div>
                <div className="border-b border-main py-2">
                  <p className="text-main text-xs">
                    <span className="text-main-opacity-200 mr-1">size:</span>--
                  </p>
                </div>
                <div className="flex justify-between gap-x-3 pt-3 text-xs">
                  <select className=" text-center w-24 h-10 rounded-lg duration-300 transition-colors border-main border flex items-center justify-center cursor-pointer">
                    {option}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* third part */}

          <div className="bg-[#59552D] h-14 uppercase text-center text-sm text-white mt-10 py-5 px-10 transition duration-200 ease-in hover:bg-transparent hover:border-2 hover:bg-white hover:text-main hover:border-[#59552D] cursor-pointer">
            next step: subtotal: $799
          </div>
        </div>
      </div>
      <ProductDetails />
      <ProductStory/>
      <ProductPairing/>
      <BookAppointment />
      <Marquee />
      <Subscribe />
      <Footer />
    </div>
  );
}

// Arrow component
function Arrow({ left, onClick, disabled }) {
  const disabledClass = disabled ? " arrow--disabled" : "";
  return (
    <button
      onClick={onClick}
      className={`arrow ${
        left ? "arrow--left" : "arrow--right"
      } ${disabledClass}`}
      disabled={disabled}
    >
      {left ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </button>
  );
}
