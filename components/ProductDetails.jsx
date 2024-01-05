/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";

function ProductDetails() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="flex flex-row text-main">
      {/* first column */}
      <div className="flex flex-col">
        <div>
          <p>for our planet tomorrow</p>
        </div>
        <div>
          <p>
            We're committed to offsetting 100% of this ring's carbon footprint.
          </p>
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

      {/* second column */}
      <div className="flex flex-col">
        <div className="">
          {/* Tab navigation */}
          <div className="flex border-b">
            <button
              className={`mr-4 pb-2 text-sm font-semibold ${
                activeTab === "details"
                  ? "text-gray-800 border-b-2 border-orange-500"
                  : "text-gray-600 border-b-2 border-transparent hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("details")}
            >
              PRODUCT DETAILS
            </button>
            <button
              className={`mr-4 pb-2 text-sm font-semibold ${
                activeTab === "holden"
                  ? "text-gray-800 border-b-2 border-orange-500"
                  : "text-gray-600 border-b-2 border-transparent hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("holden")}
            >
              WHY HOLDEN?
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
                      <div className="p-2.5 pb-2.5 pl-5 border-b border-r border-main">Ring Width</div>
                      <div className="p-2.5 pb-2.5 pl-5 border-b border-main">1.5mm, 3mm, 4.5mm</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="p-2.5 pb-2.5 pl-5 border-b border-r border-main">Ring Height</div>
                      <div className="p-2.5 pb-2.5 pl-5 border-b border-main">1.75 - 2mm</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="p-2.5 pb-2.5 pl-5 border-b border-r border-main">Ring Fit</div>
                      <div className="p-2.5 pb-2.5 pl-5 border-b border-main">Comfort Fit</div>
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
                      <div className="p-2.5 pb-2.5 pl-5 border-b border-r border-main">Diamond Certification</div>
                      <div className="p-2.5 pb-2.5 pl-5 border-b border-main">GIA or IGI</div>
                    </div>
    
                    
                  </div>
                </div>
                </div>

                {/* Right side content */}
                <div>{/* ... */}</div>
              </div>
            )}

            {/* Content for the WHY HOLDEN? tab */}
            {activeTab === "holden" && (
              <div className="grid md:grid-cols-2 gap-6">
                {/* Content specific to WHY HOLDEN? tab */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
