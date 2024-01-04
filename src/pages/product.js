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
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [loaded2, setLoaded2] = useState(false);
  const [sliderRef2, instanceRef2] = useKeenSlider({
    initial: 0,
    mode: "free-snap",
    slidesPerView: 3, // Adjust this number based on your design
    slideChanged(slider) {
      setCurrentSlide2(slider.track.details.rel);
    },
    created() {
      setLoaded2(true);
    },
  });

  return (
    <div>
      <Header isSpecialPage={true} />

      <div className="grid grid-cols-3 pt-14">
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

      <div className="grid grid-cols-3">
        <div className="keen-slider col-span-2">
          <div ref={sliderRef} className="flex items-center">
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

          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>

        <div className="w-full px-7 py-5 col-span-1 1000:col-span-3 relative uppercase">
          <div>
            <div className="flex justify-between">
              <p>step 1: customize yours</p>
              <p>24 reviews</p>
            </div>
            <div className="flex justify-end">
              <StarIcon className="text-yellow-500 h-3 w-3" />
              <StarIcon className="text-yellow-500 h-3 w-3" />
              <StarIcon className="text-yellow-500 h-3 w-3" />
              <StarIcon className="text-yellow-500 h-3 w-3" />
              <StarIcon className="text-yellow-500 h-3 w-3" />
            </div>
          </div>
          <h1 className="py-10 text-center">the square solitaire</h1>

          <div className="px-10">
            <div>
              <div className="border-b border-main">
                <p>shape: radiant</p>
              </div>
              <div
                ref={sliderRef2}
                className="second-slider flex space-between gap-x-3"
              >
                <div className="second-slider__slide number-slide1 w-10 h-10 rounded-md duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0">
                  <img
                    alt=""
                    src="/Diamond-Icon_Asscher.png"
                  />
                </div>
                <div className="second-slider__slide number-slide2 w-10 h-10 rounded-md duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0">
                  <img
                    alt=""
                    src="/Diamond-Cushion.png"
                  />
                </div>
                <div className="second-slider__slide number-slide3 w-10 h-10 rounded-md duration-300 transition-colors border-main border flex items-center justify-center hover:border-opacity-100 border-opacity-0">
                  <img
                    alt=""
                    src="/Diamond-Emerald.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
