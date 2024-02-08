import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function ProductPairing() {
  const [hovered, setHovered] = useState(null);

  const images = {
    ring1: {
      top: "/Square Solitaire Oval Mirror 1.5ct.webp",
      bottom: "/Column Oval 4mm YG Mirror.webp",
    },
    ring2: {
      top: "/eternity_top.webp",
      bottom: "/eternity_bottom.webp",
    },
    ring3: {
      top: "/domed_top.webp",
      bottom: "/domed_bottom.webp",
    },
  };

  return (
    <div className="p-10">
      <div className="w-full sm:grid sm:grid-cols-3 gap-x-2.5 py-32">
        {Object.entries(images).map(([key, { top, bottom }], index) => (
          <Link href="/categorie" key={key}>
            <div
              className="w-full relative sm:hover:border hover:border-[#59552D] transition duration-400 ease-in py-4 group"
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="w-full grid items-center justify-center gap-y-2.5 px-5">
                <p className="uppercase text-xs text-main text-center pb-2">
                  {key.replace('ring', 'Ring ')}
                </p>
                <div className="border-y border-[#59552D] py-4 w-96 h-96 relative overflow-hidden">
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out transform ${hovered === key ? 'translate-y-0 opacity-100' : '-translate-y-1/2 opacity-0'}`}>
                    <Image src={top} alt={`${key} top`} layout="fill" objectFit="cover" className="mix-blend-normal" />
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out transform ${hovered === key ? 'translate-y-0 opacity-100' : 'translate-y-1/2 opacity-0'}`}>
                    <Image src={bottom} alt={`${key} bottom`} layout="fill" objectFit="cover" className="mix-blend-normal" />
                  </div>
                </div>
                <div className="bg-[#59552D] uppercase text-center text-xs text-white py-5 px-10 transition duration-200 ease-in hover:bg-transparent hover:border-2 hover:bg-white hover:text-main hover:border-[#59552D] cursor-pointer">
                  get started
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductPairing;
