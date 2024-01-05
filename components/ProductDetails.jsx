/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

function ProductDetails() {
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
      <div className="flex flex-col"></div>
    </div>
  );
}

export default ProductDetails;
