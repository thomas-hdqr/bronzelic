import React from "react";

function AboutUs() {
  return (
    <div className="p-12 bg-[#efede8] text-main">
      <div className="grid grid-cols-12 pt-12 text-xs">
        <div className="col-span-6 uppercase">
          <p>about us</p>
        </div>
        <div className="col-span-6 uppercase">
          <p>our values</p>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-12 py-12 sm:text-2xl text-lg">
        <div className="col-span-6">
          <p>
            Designed for your <br />
            <i>tomorrows</i>
          </p>
        </div>
        <div className="col-span-6">
          <p>
            Holden rings are a promise to the tomorrows that come. You make a
            vow to each other and we make one to you: we’re contributing to a
            tomorrow that you can be proud to step into as a couple. Our{" "}
            <i>gender-neutral rings</i> are custom made to order in NYC from{" "}
            <i>recycled precious metals</i> and <i>ethical</i>,{" "}
            <i>lab-grown diamonds</i>. With net zero carbon emissions and a
            donation to The Trevor Project, your ring means something more.
            Here’s to wherever your tomorrows may take you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
