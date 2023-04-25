import React from 'react'

function Marquee() {
  return (
      <div class="relative flex overflow-x-hidden uppercase text-6xl text-main">
        <div class="py-12 animate-marquee whitespace-nowrap">
          <span class="mx-4">Free returns & exchanges</span>
          <span class="mx-4">💍</span>
          <span class="mx-4">Complimentary resizing for life</span>
          <span class="mx-4">💍</span>
        </div>

        <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span class="mx-4">Free returns & exchanges</span>
          <span class="mx-4">💍</span>
          <span class="mx-4">Complimentary resizing for life</span>
          <span class="mx-4">💍</span>
        </div>
      </div>
  )
}

export default Marquee