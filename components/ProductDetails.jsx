/* eslint-disable react/no-unescaped-entities */
import Image from "next/legacy/image";
import React, { useState } from "react";

function ProductDetails() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="sm:grid sm:grid-cols-12 text-main mx-4 sm:mx-10 my-32 py-10 sm:py-20">
      {/* first column */}
      <div className="col-span-5 pr-40">
      <div className="flex flex-col space-y-5">
        <div>
          <p className="uppercase text-sm">for our planet tomorrow</p>
        </div>
        <div>
          <h3 className="text-xl">
            We're committed to offsetting 100% of this ring's carbon footprint.
          </h3>
        </div>
        <div>
          <Image
            width="200"
            height="200"
            src="/ClimateNeutralCertified_Label_Horizontal_BlackOutline_77e14bba-a30a-432b-8518-6894dbb7b2d1.webp"
            alt=""
          />
        </div>
        </div>
      </div>

      {/* second column */}
      <div className="col-span-7">
      <div className="flex flex-col">
        <div className="">
          {/* Tab navigation */}
          <div className="grid grid-cols-2 border-y border-main h-11 ">
            <button
              className={`text-md col-span-1 border-r border-main ${
                activeTab === "details"
                  ? " bg-[#f9dcbb]"
                  : " hover:bg-[#f9dcbb]"
              }`}
              onClick={() => setActiveTab("details")}
            >
              PRODUCT DETAILS
            </button>
            <button
              className={`text-md col-span-1 ${
                activeTab === "holden"
                  ? "bg-[#f9dcbb]"
                  : " hover:bg-[#f9dcbb]"
              }`}
              onClick={() => setActiveTab("holden")}
            >
              WHY BRONZELIC?
            </button>
          </div>

          {/* Tab content */}
          <div className="pt-4 text-main text-xs">
            {/* Content for the PRODUCT DETAILS tab */}
            {activeTab === "details" && (
              <div className="">
                <div className="grid grid-cols-12">
                  <div className="col-span-4 border-main border-b border-r">
                    <p className="uppercase pr-11">ring specification</p>
                  </div>
                  <div className="col-span-8 flex flex-col">
                    <div className="grid">
                      <div className="grid grid-cols-2">
                        <div className="p-2.5 pb-2.5 pl-5 border-b border-r border-main">
                          Ring Width
                        </div>
                        <div className="p-2.5 pb-2.5 pl-5 border-b border-main">
                          1.5mm, 3mm, 4.5mm
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="p-2.5 pb-2.5 pl-5 border-b border-r border-main">
                          Ring Height
                        </div>
                        <div className="p-2.5 pb-2.5 pl-5 border-b border-main">
                          1.75 - 2mm
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="p-2.5 pb-2.5 pl-5 border-b border-r border-main">
                          Ring Fit
                        </div>
                        <div className="p-2.5 pb-2.5 pl-5 border-b border-main">
                          Comfort Fit
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4 border-main border-b border-r  pr-11 flex items-center">
                    <p className="uppercase">center stone</p>
                  </div>
                  <div className="col-span-8 flex flex-col">
                    <div className="grid">
                      <div className="grid grid-cols-2">
                        <div className="p-2.5 pb-2.5 pl-5 border-b border-r border-main">
                          Diamond Certification
                        </div>
                        <div className="p-2.5 pb-2.5 pl-5 border-b border-main">
                          GIA or IGI
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content for the WHY HOLDEN? tab */}
            {activeTab === "holden" && (
              <div className="">
                <div className="grid grid-cols-12">
                  <div className="col-span-5 border-main border-b border-r">
                    <p className="pt-2 uppercase pr-11">
                      MADE WITH LOVE IN NYC
                    </p>
                  </div>
                  <div className="col-span-7 flex flex-col">
                    <div className="grid">
                      <div className="">
                        <div className="p-2.5 pb-2.5 pl-5 border-b  border-main">
                          We custom make each ring to order in our New York City
                          workshops using recycled precious metals and ethically
                          sourced lab-grown diamonds. All of our fine gold is
                          100% SCS-certified recycled, and we offset 100% of our
                          carbon emissions each year.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-5 border-main border-b border-r">
                    <p className="pt-2 uppercase pr-11">RISK-FREE GUARANTEE</p>
                  </div>
                  <div className="col-span-7 flex flex-col">
                    <div className="grid">
                      <div className="">
                        <div className="p-2.5 pb-2.5 pl-5 border-b  border-main">
                          The perfect ring should fit just right. That’s why we
                          offer free shipping, free 30-day returns/exchanges,
                          and 60-day complimentary resizing.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-5 border-main border-b border-r">
                    <p className="pt-2 uppercase pr-11">
                      DIRECT-TO-YOU PRICING
                    </p>
                  </div>
                  <div className="col-span-7 flex flex-col">
                    <div className="grid">
                      <div className="">
                        <div className="p-2.5 pb-2.5 pl-5 border-b  border-main">
                          Traditional jewelry markups are often 8-10x the cost
                          of production. By sending rings direct to your door,
                          we offer handcrafted rings at a fraction of the price.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProductDetails;
