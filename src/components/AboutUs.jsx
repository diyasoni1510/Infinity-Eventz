import React from "react";
import about from "../images/about.png";

const AboutUs = () => {
  return (
    <section className="px-5 lg:px-28 py-6 lg:pt-20 lg:pb-14" id="about-us">
      <div className="text-center">
        <h2 className="uppercase mb-3">About Us</h2>
        <p>
          From royal weddings to grand corporate galas, we deliver experiences
          that blend creativity, precision, and unforgettable moments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-16 lg:gap-32 mt-10">
        <div className="col-span-1">
          <h6>India’s Trusted Destination Wedding & Event Experts</h6>
          <p className="leading-7">
            At <strong>Infinity Eventz</strong>, we specialize in curating
            extraordinary <strong>destination weddings</strong> and high-end
            events across India’s most iconic locations — from the beaches of{" "}
            <strong>Goa</strong> to the royal forts of <strong>Jaipur</strong>,{" "}
            <strong>Udaipur</strong>, and <strong>Jodhpur</strong>. Whether it's
            a romantic celebration in <strong>Neemrana</strong>, a mountain
            escape in <strong>Kasol</strong>, <strong>Mussoorie</strong>, or{" "}
            <strong>Shimla</strong>, or a luxury forest wedding in{" "}
            <strong>Jim Corbett</strong>, we bring your dream to life.
            <br />
            <br />
            Headquartered in <strong>Delhi NCR</strong>, we’ve managed events in
            cities like <strong>Indore</strong>, <strong>Pune</strong>, and even{" "}
            <strong>Mount Abu</strong>, partnering with top venues and premium
            vendors to craft seamless experiences. From lavish palace weddings
            to corporate award nights, our passionate team handles every detail
            with precision and style.
            <br />
            <br />
            If you're looking for a{" "}
            <strong>destination wedding planner in India</strong>, Infinity
            Eventz is your go-to name — delivering unforgettable memories, one
            celebration at a time.
          </p>
        </div>

        <div className="col-span-1 max-w-[600px] mx-auto">
          <div className="relative ms-14 lg:ms-0">
            {/* Shadow/Overlay layer */}
            <div className="absolute bottom-4 right-14 w-full h-full rounded-t-[50%] rounded-b-none opacity-30 z-0 backdrop-blur-md">
              <img
                src={about}
                alt="Luxury Destination Wedding Venue"
                className="relative z-10 w-full h-full object-cover rounded-t-[50%] rounded-b-none shadow-lg"
              />
            </div>

            {/* Foreground image */}
            <img
              src={about}
              alt="Luxury Destination Wedding Venue"
              className="relative z-10 w-full h-full object-cover rounded-t-[50%] rounded-b-none shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
