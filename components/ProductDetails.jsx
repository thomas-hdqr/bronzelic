/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";

function ProductDetails() {


    const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="flex flex-row">
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
          className={`mr-4 pb-2 text-sm font-semibold ${activeTab === 'details' ? 'text-gray-800 border-b-2 border-orange-500' : 'text-gray-600 border-b-2 border-transparent hover:border-gray-300'}`}
          onClick={() => setActiveTab('details')}
        >
          PRODUCT DETAILS
        </button>
        <button
          className={`mr-4 pb-2 text-sm font-semibold ${activeTab === 'holden' ? 'text-gray-800 border-b-2 border-orange-500' : 'text-gray-600 border-b-2 border-transparent hover:border-gray-300'}`}
          onClick={() => setActiveTab('holden')}
        >
          WHY HOLDEN?
        </button>
      </div>

      {/* Tab content */}
      <div className="pt-4">
        {/* Content for the PRODUCT DETAILS tab */}
        {activeTab === 'details' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left side content */}
            <div>
              
            </div>

            {/* Right side content */}
            <div>
              {/* ... */}
            </div>
          </div>
        )}

        {/* Content for the WHY HOLDEN? tab */}
        {activeTab === 'holden' && (
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
