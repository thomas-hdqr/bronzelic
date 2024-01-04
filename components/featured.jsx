import Image from "next/image";
import React from "react";

function Featured() {
  return (
    <div className="bg-[#b0a38b] py-14">
      <div>
        <p className="text-[#59552D] uppercase text-center text-xs">
          as featured in
        </p>
      </div>
      <div className="sm:flex px-40 py-10 gap-x-24">
        <div className="width-[110px] mx-auto">
          <Image src="/vogue.webp" alt="" width={110} height={200} />
        </div>
        <div className="width-[110px] mx-auto">
          <Image src="/forbes.webp" alt="" width={110} height={200} />
        </div>
        <div className="width-[110px] mx-auto">
          <Image src="/brides.webp" alt="" width={110} height={200} />
        </div>
        <div className="width-[110px] mx-auto">
          <Image src="/the_knot.webp" alt="" width={110} height={200} />
        </div>
        <div className="width-[110px] mx-auto">
          <Image src="/refinery29.webp" alt="" width={110} height={200} />
        </div>
      </div>
    </div>
  );
}

export default Featured;
