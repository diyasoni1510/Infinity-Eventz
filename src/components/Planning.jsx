import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import decor from "../images/decor.webp";
import catering from "../images/catering.webp";
import photography from "../images/photography.webp";
import management from "../images/management.webp";
import band from "../images/band.webp";
import mandap from "../images/mandap.webp";
import makeup from "../images/makeup.webp";
import planning from "../images/planning.webp";

const plans = [
  { name: "Decor & Theme", image: decor, link: "/wedding-planning" },
  { name: "Catering & Menu", image: catering, link: "/" },
  { name: "Photography", image: photography, link: "/" },
  { name: "Guest Management", image: management, link: "/" },
  { name: "Dhol & Live Band", image: band, link: "/" },
  { name: "Lightening & Mandap", image: mandap, link: "/" },
  { name: "Makeup Artist", image: makeup, link: "/" },
  { name: "Ceremonies Planning", image: planning, link: "/" },
];

const Planning = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <section className="lg:px-28 lg:py-14 px-5 py-6">
      <div className="text-center">
        <h2 className="mb-3">Wedding Planning</h2>
        <p>
          We proudly collaborate with the world’s most luxurious hotels and
          resorts to bring your dream wedding to life. Our trusted partners
          ensure top-notch venues, royal experiences, and unforgettable
          celebrations—crafted just for you.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="relative w-full h-[340px] perspective"
            // onMouseEnter={() => setFlippedIndex(index)}
            // onMouseLeave={() => setFlippedIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden rounded overflow-hidden">
              <img
                className="h-[290px] w-full object-cover"
                src={plan.image}
                alt={plan.name}
              />
              <Link
                to="/#contact-us"
                className="border flex justify-between items-center rounded-b p-2 bg-white"
              >
                <p className="text-md">{plan.name}</p>
                <FaArrowRightLong color="#4f4f4f" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden mt-10 planning-swiper">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative w-full h-[320px] perspective"
                onClick={() =>
                  setFlippedIndex(flippedIndex === index ? null : index)
                }
              >
                <motion.div
                  className="absolute w-full h-full transition-transform duration-500 preserve-3d"
                  animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full backface-hidden rounded overflow-hidden">
                    <img
                      className="h-[290px] w-full object-cover"
                      src={plan.image}
                      alt={plan.name}
                    />
                    <Link
                      to="/#contact-us"
                      className="border flex justify-between items-center rounded-b p-2 bg-white"
                    >
                      <p className="text-xl">{plan.name}</p>
                      <FaArrowRightLong color="#4f4f4f" />
                    </Link>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-100 flex flex-col justify-center items-center p-4 rounded">
                    <p className="text-lg font-semibold text-center">
                      {plan.name}
                    </p>
                    <p className="text-sm text-center mt-2">
                      Detailed. Royal. Memorable. Tap again to flip back.
                    </p>
                    <Link
                      to={plan.link}
                      className="mt-4 text-blue-500 hover:underline text-sm"
                    >
                      Explore →
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Flip CSS */}
      <style>
        {`
          .perspective {
            perspective: 1000px;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </section>
  );
};

export default Planning;
