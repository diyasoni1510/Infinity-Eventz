import React from "react";

const Milestone = () => {
  return (
    <section className="px-5 lg:px-28 py-6 lg:py-10">
      <div className="text-center">
        <h2 className="uppercase mb-3">
          Moments Crafted. Milestones Achieved.
        </h2>
        <p>
          We’ve helped couples and brands celebrate unforgettable moments with
          passion and precision. Here’s a quick look <br /> at what we’ve
          proudly accomplished so far.
        </p>
      </div>
      <div className="bg-[#F6EDE9] mt-10 px-5 lg:px-10 py-5 lg:py-16 lg:rounded-tr-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0">
          <div className="col-span-1 text-center">
            <h5>1200+</h5>
            <p>Events Managed</p>
          </div>
          <div className="col-span-1 text-center">
            <h5>30+</h5>
            <p>Wedding Destinations</p>
          </div>
          <div className="col-span-1 text-center">
            <h5>1.5 Lakh+</h5>
            <p>Guests Served</p>
          </div>
          <div className="col-span-1 text-center">
            <h5>24*7</h5>
            <p>Client Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
