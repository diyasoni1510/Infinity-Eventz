import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import service4 from "../images/service4.png";
import service5 from "../images/service5.png";
import service6 from "../images/service6.png";
import service7 from "../images/service7.png";
import service8 from "../images/service8.png";
import service9 from "../images/service9.png";
import service10 from "../images/service10.png";
import service11 from "../images/service11.png";
import service12 from "../images/service12.png";
import service13 from "../images/service13.png";
import service14 from "../images/service14.png";
import service15 from "../images/service15.png";
import service16 from "../images/service16.png";
import service17 from "../images/service17.png";

import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const services = [
  {
    image: service1,
    title: "Wedding Planning",
    desc: "Dream weddings crafted with elegance.",
  },
  {
    image: service2,
    title: "Social Events",
    desc: "Unique moments tailored perfectly.",
  },
  {
    image: service3,
    title: "Corporate Event Management",
    desc: "Professional events with flawless execution.",
  },
  {
    image: service4,
    title: "Brand Promotions",
    desc: "Creative booths that attract and engage.",
  },
  {
    image: service5,
    title: "Celebrity / Artists Management",
    desc: "Aesthetic and thematic excellence.",
  },
  {
    image: service6,
    title: "Fashion Shows",
    desc: "Captivating runway events that reflect your unique style and vision.",
  },
  {
    image: service7,
    title: "Sound & Décor",
    desc: "Seamless sound setups and stunning décor that elevate every event.",
  },
  {
    image: service8,
    title: "Promotions",
    desc: "Innovative marketing solutions to boost your brand and engage audiences.",
  },
  {
    image: service9,
    title: "Exhibitions",
    desc: "Immersive exhibition experiences that captivate and leave lasting impressions.",
  },
  {
    image: service10,
    title: "Conferences",
    desc: "Well-managed conferences with expert speakers and smooth event flow.",
  },
  {
    image: service11,
    title: "Catering",
    desc: "Delectable catering services for events of all scales and themes.",
  },
  {
    image: service12,
    title: "Anchors",
    desc: "Engaging hosts to add charm and energy to your event.",
  },
  {
    image: service13,
    title: "Market Activities",
    desc: "Dynamic events that connect brands with their target audience effectively.",
  },
  {
    image: service14,
    title: "Fairs and Camps",
    desc: "Fun-filled fairs and interactive camps that inspire learning and enjoyment.",
  },
  {
    image: service15,
    title: "Dance Troupe",
    desc: "Professional dancers who create mesmerizing performances for your events.",
  },
  {
    image: service16,
    title: "Makeup Artists",
    desc: "Expert makeup artists for stunning looks at any event.",
  },
  {
    image: service17,
    title: "Photographers",
    desc: "Capture moments beautifully with our professional photography services.",
  },
  // Duplicate some slides for smoother infinite effect
];

export default function ServicesSlider() {
  return (
    <section className="lg:px-28 lg:py-14 px-5 py-6">
      <div className="text-center">
        <h2 className="uppercase mb-3">Our Services</h2>
        <p>
          From exhibitions to weddings, we create memorable experiences through
          design, planning, and creativity.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3000} // Smoothness of slide
        slidesPerView={4}
        spaceBetween={20}
        grabCursor={true}
        allowTouchMove={false}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mt-10"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Link to="/services">
              <div className="h-[284px] w-full rounded-t-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-50 border p-4 h-[150px] flex flex-col justify-between">
                <div>
                  <h6 className="mb-1 text-gray-800">{service.title}</h6>
                  <p className="text-sm">{service.desc}</p>
                </div>
                <Link
                  to="/services"
                  className="uppercase text-[#A87C67] flex gap-10 items-center mt-3"
                >
                  <span className="text-base">know more</span>{" "}
                  <FaArrowRightLong />
                </Link>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
