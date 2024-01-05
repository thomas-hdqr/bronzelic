import Image from "next/image";
import React from "react";

function ProductStory() {
  return (
    <div className="mx-4 sm:mx-10 my-32 py-10 sm:py-20 grid grid-cols-12 text-main">
      <div className="col-span-5">
        <div className="flex flex-col">
          <h4>Handcrafted for your tomorrows</h4>
          <Image
            alt=""
            width="200"
            height="200"
            src="/product-page_quality-v1666630131198.webp"
          />
        </div>
      </div>
      <div className="col-span-7"></div>
    </div>
  );
}

export default ProductStory;
