import React, { useEffect, useState } from "react";
// import header from "../images/header-bg2.jpg";
// import header from "../images/wedding2.jpeg";
import header from "../images/wedding3.jpg";
import { IoLogoWhatsapp } from "react-icons/io";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className="h-screen bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: `url(${header})`,
        backgroundPosition: "center top -200px", // This shifts the image up
      }}
    >
      {/* <div className="absolute h-full w-full top-0 light-0 bg-gray-500 bg-opacity-20"></div> */}
      <header
        className={`w-full left-0 top-0 z-50 px-28 py-2  transition-all duration-300 ease-in-out
       ${
         scrolled
           ? "fixed bg-white text-gray-900 shadow-md backdrop-blur-md"
           : "absolute bg-gray-600 bg-opacity-20 backdrop-blur-sm text-white"
       }`}
      >
        <div className="flex justify-center items-center">
          <div className="flex-shrink-0">
            <ul className="flex uppercase gap-5 text-sm font-semibold">
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">services</a>
              </li>
              <li>
                <a href="#">wedding planning</a>
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <img
              src="https://www.infinityeventz.in/images/logo.png"
              alt=""
              width={200}
            />
          </div>
          <div className="flex-shrink-0">
            <ul className="flex uppercase gap-5 text-sm font-semibold">
              <li>
                <a href="#">venues</a>
              </li>
              <li>
                <a href="#">partner</a>
              </li>
              <li>
                <a href="#">contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="absolute w-full h-[210px] left-0 bottom-0 px-28 py-8 text-white bg-[linear-gradient(to_top,_rgba(255,255,255,1)_20%,_rgba(31,41,55,0.3)_80%)]">
        <div className="flex justify-center items-center bg-[#735446] py-3">
          <div className="w-4/5 text-center">
            <h5 className="mb-3   p-2 text-white">
              India’s Premier Event Management Team for Unforgettable
              Celebrations"
            </h5>
            <p className="mb-4 text-white font-semibold">
              At Infinity Eventz, we believe every event should be a perfect
              blend of elegance, .
            </p>
            <button className="border-2 border-white shadow-white uppercase py-2 text-sm px-4 rounded font-semibold">
              book your event
            </button>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 right-0 w-full h-5 bg-[#735446] rotate-90 origin-right" /> */}
      <div className="absolute bottom-1 md:bottom-10 right-1 md:right-10">
        <a href="https://wa.me/9105107070?text=<message>" target="_blank">
          <img
            src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-png-pic-0.png"
            alt=""
            className="w-8 md:w-11"
          />
          {/* <IoLogoWhatsapp size={32} color="#735446" /> */}
        </a>
      </div>
    </section>
  );
};

export default Hero;
