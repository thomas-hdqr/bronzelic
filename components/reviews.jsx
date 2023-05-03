/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';


export default function Reviews() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>

  <div className="px-10 py-20 space-y-5">


      <div className="relative w-full uppercase text-main text-xs pb-20">
        <div className="absolute left-0 space-x-40">
          <p className="inline-block">what our couples are saying</p>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider text-6xl text-main px-10">
        <div className="keen-slider__slide number-slide1 space-y-5">
          <p className='italic'>"As soon as the ring arrived and I opened the box, I knew I had chosen a kick-ass ring."</p>
          <p className='uppercase text-xs'>seth.p</p>
        </div>
        <div className="keen-slider__slide number-slide1 space-y-5">
          <p className='italic'>"... their service goes beyond what is ordinary or even expected!! They really go the extra mile to make sure everything is perfect.</p>
          <p className='uppercase text-xs'>anthony s.</p>
        </div>
        <div className="keen-slider__slide number-slide1 space-y-5">
          <p className='italic'>"10/10 would recommend this company to everyone looking for beautiful, responsibly sourced, and ethically made jewelry.</p>
          <p className='uppercase text-xs'>paxton h.</p>
        </div>
        <div className="keen-slider__slide number-slide1 space-y-5">
          <p className='italic'>"I gasped when I opened the box.. it is gorgeous and sparkles soooo well."</p>
          <p className='uppercase text-xs'>bridget</p>
        </div>
        <div className="keen-slider__slide number-slide1 space-y-5">
          <p className='italic'>"It's literally what my wedding jewelry dreams were made of."</p>
          <p className='uppercase text-xs'>chrissy s</p>
        </div>
      </div>


    </div>
    </>
  )
}
