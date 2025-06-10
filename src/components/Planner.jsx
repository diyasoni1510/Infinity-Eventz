import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import goa1 from "../images/goa1.jpeg";
import goa2 from "../images/goa2.jpg";
import goa3 from "../images/goa3.jpeg";
import jaipur1 from "../images/jaipur1.jpg";
import jaipur2 from "../images/jaipur2.jpg";
import jaipur3 from "../images/jaipur3.jpg";
import jodhpur1 from "../images/jodhpur1.jpg";
import jodhpur2 from "../images/jodhpur2.jpg";
import jodhpur3 from "../images/jodhpur3.jpg";
import jodhpur4 from "../images/jodhpur4.jpg";
import udaipur2 from "../images/udaipur2.jpg";
import udaipur3 from "../images/udaipur3.jpg";
import udaipur1 from "../images/udaipur1.jpg";
import jimcorbet2 from "../images/jimcorbet2.jpg";
import jimcorbet3 from "../images/jimcorbet3.jpg";
import jimcorbet1 from "../images/jimcorbet1.jpg";
import neemrana2 from "../images/neemrana2.png";
import neemrana3 from "../images/neemrana3.png";
import neemrana1 from "../images/neemrana1.png";
import kasol2 from "../images/kasol2.jpg";
import kasol3 from "../images/kasol3.jpg";
import kasol1 from "../images/kasol1.jpg";
import mussorie1 from "../images/mussorie1.webp";
import mussorie2 from "../images/mussorie2.webp";
import mussorie3 from "../images/mussorie3.webp";
import abu1 from "../images/abu1.webp";
import abu2 from "../images/abu2.webp";
import abu3 from "../images/abu3.webp";
import pune1 from "../images/pune1.webp";
import pune2 from "../images/pune2.webp";
import pune3 from "../images/pune3.webp";
import shimla1 from "../images/shimla1.webp";
import shimla2 from "../images/shimla2.webp";
import shimla3 from "../images/shimla3.webp";
import { Link } from "react-router-dom";

const slides = [
  {
    images: [goa1, goa2, goa3],
    location: "Goa",
    description:
      "Infinity Eventz offers a dreamy beach wedding experience in Goa – from stunning sea-view venues to vibrant coastal décor. Let us make your big day magical and unforgettable.",
  },
  {
    images: [jaipur2, jaipur1, jaipur3],
    location: "Jaipur",
    description:
      "Infinity Eventz creates royal weddings in Jaipur, blending heritage palaces, grand setups, and flawless planning for a majestic experience.",
  },
  {
    images: [jodhpur4, jodhpur1, jodhpur3],
    location: "Jodhpur",
    description:
      "Tie the knot with Infinity Eventz in Jodhpur’s historic forts. Experience cultural richness, stunning backdrops, and a perfect celebration tailored for you.",
  },
  {
    images: [udaipur1, udaipur2, udaipur3],
    location: "Udaipur",
    description:
      "Infinity Eventz crafts your fairytale wedding in Udaipur’s lakeside palaces. Breathtaking views, heritage charm, and personalized services for your big day.",
  },
  {
    images: [jimcorbet1, jimcorbet2, jimcorbet3],
    location: "Jim Corbett",
    description:
      "Infinity Eventz curates enchanting forest weddings in Jim Corbett, where nature’s beauty and expert planning make your day extraordinary.",
  },
  {
    images: [neemrana1, neemrana2, neemrana3],
    location: "Neemrana",
    description:
      "Plan your wedding with Infinity Eventz at Neemrana Fort – an iconic blend of history, beauty, and grandeur, perfect for your timeless celebration.",
  },
  {
    images: [kasol1, kasol2, kasol3],
    location: "Kasol",
    description:
      "Infinity Eventz turns your wedding into a magical mountain escape in Kasol – pine forests, riverside charm, and nature’s serenity all around you.",
  },
  {
    images: [mussorie1, mussorie2, mussorie3],
    location: "Mussorie",
    description:
      "Infinity Eventz designs your romantic hilltop wedding in Mussoorie – misty hills, dreamy décor, and every detail just as you imagined.",
  },
  {
    images: [abu1, abu2, abu3],
    location: "Mt. Abu",
    description:
      "With Infinity Eventz, plan your romantic wedding amidst the scenic Aravalli Hills in Mt. Abu – calm, picturesque, and truly special.",
  },
  {
    images: [pune1, pune2, pune3],
    location: "Pune",
    description:
      "Infinity Eventz brings your urban wedding dreams to life in Pune – blending elegant venues, thoughtful décor, and warm hospitality.",
  },
  {
    images: [shimla1, shimla2, shimla3],
    location: "Shimla",
    description:
      "Infinity Eventz creates dreamy weddings in the serene hills of Shimla. From pine-lined venues to cozy mountain vibes, we plan every detail for a magical hilltop wedding.",
  },
];

export default function Planner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const changeSlide = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setFade(true);
    }, 300); // Duration should match transition
  };

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    // <section className="lg:px-28 lg:py-14 px-5 py-6 ">
    //   <div className="mb-5 text-center">
    //     <h2 className="uppercase mb-3">Destination Wedding Planner</h2>
    //     <p>
    //       Infinity Eventz guides you in choosing the ideal location and planning
    //       every detail for a luxurious, hassle-free wedding — just the way you
    //       imagined it.
    //     </p>
    //   </div>

    //   <div className="mt-10 flex flex-wrap justify-center space-x-7 text-sm text-gray-700 mb-6">
    //     {slides.map((slide, index) => (
    //       <button
    //         key={index}
    //         onClick={() => changeSlide(index)}
    //         className={`hover:underline mb-2 md:mb-0 ${
    //           currentSlide === index
    //             ? "underline text-[#A87C67] underline-offset-2 text-lg"
    //             : "text-lg"
    //         }`}
    //       >
    //         {slide.location}
    //       </button>
    //     ))}
    //   </div>

    //   {/* Fade transition wrapper */}
    //   <div
    //     className={`transition-opacity duration-100 ${
    //       fade ? "opacity-100" : "opacity-70"
    //     }`}
    //   >
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch h-[230px] md:h-[570px]">
    //       <div className="col-span-1 max-h-[230px] md:max-h-[570px]">
    //         <img
    //           src={slides[currentSlide].images[0]}
    //           alt="Wedding 1"
    //           className="rounded-md col-span-2 h-full w-full object-cover"
    //         />
    //       </div>
    //       <div className="col-span-1 h-[520px] md:h-auto">
    //         <div className="grid grid-cols-2 grid-rows-[1fr_1fr] h-full gap-4">
    //           {/* Top two images */}
    //           <div className="col-span-1 row-span-1 ">
    //             <img
    //               src={slides[currentSlide].images[1]}
    //               alt="Wedding 2"
    //               className="rounded-md h-full w-full object-cover"
    //             />
    //           </div>
    //           <div className="col-span-1 row-span-1">
    //             <img
    //               src={slides[currentSlide].images[2]}
    //               alt="Wedding 3"
    //               className="rounded-md h-full w-full object-cover"
    //             />
    //           </div>

    //           {/* Bottom text block */}
    //           <div className="col-span-2 row-span-1 mb-10">
    //             <div className="bg-[#F6EDE9] p-6 rounded-md shadow-md h-full">
    //               <h3 className=" text-[#A87C67] mb-2 text-center">
    //                 {slides[currentSlide].location}
    //               </h3>
    //               <div className="flex flex-col h-3/5 justify-between mt-5">
    //                 <p className=" text-gray-700 mb-4 text-lg">
    //                   {slides[currentSlide].description}
    //                 </p>
    //                 <div className="flex gap-8">
    //                   <button className="border-2 border-gray-800 px-4 py-2 rounded-xl  text-sm uppercase">
    //                     Explore Venue
    //                   </button>
    //                   <button className="relative uppercase py-3 text-sm px-6 rounded-xl font-semibold bg-[#e6be8a] text-amber-900 overflow-hidden">
    //                     Plan your wedding
    //                     {/* Gradient border animation */}
    //                     <span className="absolute inset-0 rounded-xl border-2 border-transparent">
    //                       <span className="absolute top-0 left-0 w-full h-full rounded-xl border-2 border-transparent border-t-[#a87c67] border-r-[#a87c67] border-b-[#a87c67] border-l-[#a87c67] bg-[linear-gradient(90deg,#a87c67,rgba(168,124,103,0))] animate-border-move"></span>
    //                     </span>
    //                     <style jsx>{`
    //                       .animate-border-move {
    //                         position: absolute;
    //                         top: 0;
    //                         left: 0;
    //                         width: 100%;
    //                         height: 100%;
    //                         border-radius: 12px;
    //                         border-style: solid;
    //                         border-width: 2px;
    //                         border-color: transparent;
    //                         background: linear-gradient(
    //                           90deg,
    //                           #a87c67,
    //                           rgba(168, 124, 103, 0) 50%,
    //                           #a87c67 100%
    //                         );
    //                         background-size: 200% 100%;
    //                         animation: borderMove 2.5s linear infinite;
    //                         -webkit-mask: linear-gradient(#fff 0 0) content-box,
    //                           linear-gradient(#fff 0 0);
    //                         -webkit-mask-composite: destination-out;
    //                         mask-composite: exclude;
    //                       }

    //                       @keyframes borderMove {
    //                         0% {
    //                           background-position: 200% 0;
    //                         }
    //                         100% {
    //                           background-position: -200% 0;
    //                         }
    //                       }
    //                     `}</style>
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className=" justify-end me-14 mt-6 space-x-4 absolute bottom-0 hidden md:flex">
    //     <button onClick={prevSlide} className="border p-2 rounded">
    //       <IoIosArrowBack className="w-4 h-4" />
    //     </button>
    //     <button onClick={nextSlide} className="border p-2 rounded">
    //       <IoIosArrowForward className="w-4 h-4" />
    //     </button>
    //   </div>
    // </section>
    <section className="lg:px-28 lg:py-14 px-5 py-6">
      {/* Heading */}
      <div className="mb-5 text-center">
        <h2 className="uppercase mb-3 ">Destination Wedding Planner</h2>
        <p className="text-sm md:text-base">
          Infinity Eventz guides you in choosing the ideal location and planning
          every detail for a luxurious, hassle-free wedding — just the way you
          imagined it.
        </p>
      </div>

      {/* Slide buttons */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-700 mb-6">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`hover:underline ${
              currentSlide === index
                ? "underline text-[#A87C67] underline-offset-2 font-semibold"
                : ""
            } text-base`}
          >
            {slide.location}
          </button>
        ))}
      </div>

      {/* Images and content */}
      <div
        className={`transition-opacity duration-100 ${
          fade ? "opacity-100" : "opacity-70"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {/* Main Image */}
          <div className="col-span-1">
            <img
              src={slides[currentSlide].images[0]}
              alt="Wedding 1"
              className="rounded-md w-full h-[250px] md:h-[485px] object-cover"
            />
          </div>

          {/* Side Images + Text */}
          <div className="col-span-1 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={slides[currentSlide].images[1]}
                alt="Wedding 2"
                className="rounded-md h-[120px] md:h-[250px] w-full object-cover"
              />
              <img
                src={slides[currentSlide].images[2]}
                alt="Wedding 3"
                className="rounded-md h-[120px] md:h-[250px] w-full object-cover"
              />
            </div>

            {/* Text Block */}
            <div className="bg-[#F6EDE9] p-4 md:p-6 rounded-md shadow-md  flex flex-col justify-between">
              <h3 className="text-[#A87C67] mb-2 text-center text-lg md:text-xl">
                {slides[currentSlide].location}
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-4 flex-1">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                <Link
                  to="/venues"
                  className="border-2 border-gray-800 px-4 py-2 rounded-xl text-sm uppercase"
                >
                  Explore Venue
                </Link>
                <a
                  href="/#contact-us"
                  className="relative uppercase py-3 text-sm px-6 rounded-xl font-semibold bg-[#e6be8a] text-amber-900 overflow-hidden"
                >
                  Book your event
                  {/* Fancy border anim */}
                  <span className="absolute inset-0 rounded-xl border-2 border-transparent">
                    <span className="absolute top-0 left-0 w-full h-full rounded-xl border-2 border-transparent border-t-[#a87c67] border-r-[#a87c67] border-b-[#a87c67] border-l-[#a87c67] bg-[linear-gradient(90deg,#a87c67,rgba(168,124,103,0))] animate-border-move"></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center md:justify-end mt-6 space-x-4">
        <button onClick={prevSlide} className="border p-2 rounded">
          <IoIosArrowBack className="w-4 h-4" />
        </button>
        <button onClick={nextSlide} className="border p-2 rounded">
          <IoIosArrowForward className="w-4 h-4" />
        </button>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .animate-border-move {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          border-style: solid;
          border-width: 2px;
          border-color: transparent;
          background: linear-gradient(
            90deg,
            #a87c67,
            rgba(168, 124, 103, 0) 50%,
            #a87c67 100%
          );
          background-size: 200% 100%;
          animation: borderMove 2.5s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
        }

        @keyframes borderMove {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </section>
  );
}
