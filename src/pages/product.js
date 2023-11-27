import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Header from "../../components/Header.jsx";
import Subscribe from "../../components/Subscribe.jsx";
import Footer from "../../components/Footer.jsx";
import Marquee from "../../components/Marquee.jsx";
import BookAppointment from "../../components/BookAppointment.jsx";
import Image from "next/image";

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

  return (
    <div>
      <Header isSpecialPage={true} />

      <div className="grid grid-cols-3 pt-32">
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

      <div
        className="w-40 h-40 rounded-full  
                inline-flex items-center justify-center  
                bg-white text-gray-700 text-xl font-bold"
      >

        <div className="">
          <div ref={sliderRef} className="keen-slider">
            {/* Your slides */}
            <div className="w-full object-contain relative h-96 keen-slider__slide number-slide1">
              <Image
                src="/insta5.jpeg"
                alt=""
                fill
              />
            </div>
            <div className="w-full object-contain relative h-96 keen-slider__slide number-slide2">
              <Image
                src="/insta1.jpeg"
                alt=""
                fill
              />
            </div>
            <div className="w-full object-contain relative h-96 keen-slider__slide number-slide3">
              <Image
                src="/insta1.jpeg"
                alt=""
                fill
              />
            </div>
            <div className="w-full object-contain relative h-96 keen-slider__slide number-slide4">
              <Image
                src="/insta1.jpeg"
                alt=""
                fill
              />
            </div>
            <div className="w-full object-contain relative h-96 keen-slider__slide number-slide5">
              <Image
                src="/insta1.jpeg"
                alt=""
                fill
              />
            </div>
            <div className="w-full object-contain relative h-96 keen-slider__slide number-slide6">
              <Image
                src="/insta1.jpeg"
                alt=""
                fill
              />
            </div>
            <div className="w-full object-contain relative h-96 keen-slider__slide number-slide7">
              <Image
                src="/insta1.jpeg"
                alt=""
                fill
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
