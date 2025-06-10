import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import partner1 from "../images/partner1.png";
import partner2 from "../images/partner2.png";
import partner3 from "../images/partner3.png";
import partner4 from "../images/partner4.png";

const PartnersImages = [
  {
    image: partner1,
  },
  {
    image: partner2,
  },
  {
    image: partner3,
  },
  {
    image: partner4,
  },
  {
    image: partner1,
  },
  {
    image: partner2,
  },
  {
    image: partner3,
  },
  {
    image: partner4,
  },
];

export default function Partners() {
  return (
    <section className="px-5 lg:px-28 py-6 lg:py-14" id="partners">
      <div className="text-center">
        <h2 className="uppercase mb-3">Our Partners</h2>
        <p>
          We proudly collaborate with the world’s most luxurious hotels and
          resorts to bring your dream wedding to life. Our trusted partners
          ensure top-notch venues, royal experiences, and unforgettable
          celebrations—crafted just for you.
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
        speed={3000}
        slidesPerView={4} // default for big screens
        spaceBetween={20}
        grabCursor={true}
        allowTouchMove={false}
        className="mt-10"
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
      >
        {PartnersImages.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#EDDAC633] p-6 mx-4 h-[150px] flex items-center justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
