import React from 'react';

function Marquee() {
  return (
    <div className="relative overflow-x-hidden uppercase text-4xl sm:text-6xl text-main py-40">
      <div className="flex space-x-4 animate-marquee whitespace-nowrap">
        <div className="inline-block">Free returns & exchanges</div>
        <div className="inline-block">💍</div>
        <div className="inline-block">Complimentary resizing for life</div>
        <div className="inline-block">💍</div>
        <div className="inline-block">Free returns & exchanges</div>
        <div className="inline-block">💍</div>
        <div className="inline-block">Complimentary resizing for life</div>
        <div className="inline-block">💍</div>
      </div>
    </div>
  );
}

export default Marquee;
