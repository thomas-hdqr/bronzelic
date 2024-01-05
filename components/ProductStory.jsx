import Image from "next/image";
import React from "react";

function ProductStory() {
  return (
    <div className="mx-4 sm:mx-10 my-32 py-10 sm:py-20 grid grid-cols-12 text-main">
      <div className="col-span-5">
        <div className="flex flex-col space-y-5">
          <h4>Handcrafted for your tomorrows</h4>
          <Image
            alt=""
            width="200"
            height="200"
            src="/product-page_quality-v1666630131198.webp"
          />
        </div>
      </div>
      <div className="col-span-7">
        <h4 className="text-2xl leading-10">We want to make rings that you can feel good about wearing every day: crafted from recycled precious metals and ethical lab-grown diamonds, made to order in family-owned workshops in New York City, and guaranteed for a lifetime. As part of our commitment to celebrating love, we donate 1% of each sale to The Trevor Project with a minimum annual donation of $50,000.

</h4>
      </div>
    </div>
  );
}

export default ProductStory;
