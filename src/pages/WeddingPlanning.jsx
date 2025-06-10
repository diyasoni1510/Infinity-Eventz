import React from "react";
// import weddingPlanningBg from "../images/wedding-planning.png";
import weddingPlanningBg from "../images/wedding-bg.jpg";
import Header from "../components/Header";
import { IoIosArrowForward } from "react-icons/io";
import stage1 from "../images/stage1.jpg";
import stage2 from "../images/stage2.jpg";
import stage3 from "../images/stage3.jpg";
import stage4 from "../images/stage4.jpg";
import stage5 from "../images/stage5.jpg";
import stage6 from "../images/stage6.jpg";
import mandap1 from "../images/mandap1.jpg";
import mandap2 from "../images/mandap2.jpg";
import mandap3 from "../images/mandap3.jpg";
import mandap4 from "../images/mandap4.jpg";
import mandap5 from "../images/mandap5.jpg";
import mandap6 from "../images/mandap6.jpg";
import boothsetup1 from "../images/boothsetup1.png";
import boothsetup2 from "../images/boothsetup2.jpg";
import boothsetup3 from "../images/boothsetup3.jpg";
import boothsetup4 from "../images/boothsetup4.jpg";
import boothsetup5 from "../images/boothsetup5.jpg";
import boothsetup6 from "../images/boothsetup6.jpg";
import Footer from "../components/Footer";
import Planning from "../components/Planning";
import GetTouch from "../components/GetTouch";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // if you want dots

import { Pagination } from "swiper/modules"; // optional

const WeddingPlanning = () => {
  return (
    <>
      <Header
        bg={weddingPlanningBg}
        heading="Wedding Planning"
        para="Make your dream wedding beautiful with personalized decor styles."
        path="wedding-planning"
      />

      <section className="lg:px-28 lg:py-14 px-5 py-6">
        <div className="flex gap-2 text-sm md:text-base md:gap-4">
          <p>
            <a href="/">Home</a>
          </p>
          <IoIosArrowForward />
          <p>
            <a href="#">Wedding Planning</a>
          </p>
          <IoIosArrowForward />
          <p>Decor & Theme</p>
        </div>
      </section>

      <section className="lg:px-28 lg:py-14 px-5 py-6">
        <div className="text-center">
          <h2 className=" mb-3">Stage Decor</h2>
          <p>
            We proudly collaborate with the world’s most luxurious hotels and
            resorts to bring your dream wedding to life. Our trusted partners
            ensure top-notch venues, royal experiences, and unforgettable
            celebrations—crafted just for you.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="block lg:hidden mt-10 decor-swiper">
          <Swiper
            spaceBetween={15}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {[stage1, stage2, stage3, stage4, stage5, stage6].map(
              (img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`stage${index + 1}`}
                    className="w-full h-auto rounded aspect-square object-cover"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-5 mt-10">
          {[stage1, stage2, stage3, stage4, stage5, stage6].map(
            (img, index) => (
              <div className="col-span-1 aspect-square" key={index}>
                <img
                  src={img}
                  alt={`stage${index + 1}`}
                  className="h-full w-full object-cover rounded"
                />
              </div>
            )
          )}
        </div>

        <div className="flex justify-end mt-5">
          <a href="#" className="text-[#A87C67] flex items-center gap-2">
            More <IoIosArrowForward />
          </a>
        </div>
      </section>

      <section className="lg:px-28 lg:py-14 px-5 py-6">
        <div className="text-center">
          <h2 className=" mb-3">Mandap Styling</h2>
          <p>
            We proudly collaborate with the world’s most luxurious hotels and
            resorts to bring your dream wedding to life. Our trusted partners
            ensure top-notch venues, royal experiences, and unforgettable
            celebrations—crafted just for you.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="block lg:hidden mt-10 decor-swiper">
          <Swiper
            spaceBetween={15}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {[mandap1, mandap2, mandap3, mandap4, mandap5, mandap6].map(
              (img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`mandap${index + 1}`}
                    className="w-full h-auto rounded aspect-square object-cover"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-5 mt-10">
          {[mandap1, mandap2, mandap3, mandap4, mandap5, mandap6].map(
            (img, index) => (
              <div className="col-span-1 aspect-square" key={index}>
                <img
                  src={img}
                  alt={`mandap${index + 1}`}
                  className="h-full w-full object-cover rounded"
                />
              </div>
            )
          )}
        </div>

        <div className="flex justify-end mt-5">
          <a href="#" className="text-[#A87C67] flex items-center gap-2">
            More <IoIosArrowForward />
          </a>
        </div>
      </section>

      <section className="lg:px-28 lg:py-14 px-5 py-6">
        <div className="text-center">
          <h2 className=" mb-3">Photo Booth Setup</h2>
          <p>
            We proudly collaborate with the world’s most luxurious hotels and
            resorts to bring your dream wedding to life. Our trusted partners
            ensure top-notch venues, royal experiences, and unforgettable
            celebrations—crafted just for you.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="block lg:hidden mt-10 decor-swiper">
          <Swiper
            spaceBetween={15}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {[
              boothsetup1,
              boothsetup2,
              boothsetup3,
              boothsetup4,
              boothsetup5,
              boothsetup6,
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`boothsetup${index + 1}`}
                  className="w-full h-auto rounded aspect-square object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-5 mt-10">
          {[
            boothsetup1,
            boothsetup2,
            boothsetup3,
            boothsetup4,
            boothsetup5,
            boothsetup6,
          ].map((img, index) => (
            <div className="col-span-1 aspect-square" key={index}>
              <img
                src={img}
                alt={`boothsetup${index + 1}`}
                className="h-full w-full object-cover rounded"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-5">
          <a href="#" className="text-[#A87C67] flex items-center gap-2">
            More <IoIosArrowForward />
          </a>
        </div>
      </section>

      <Planning />
      <GetTouch />
      <Footer />
    </>
  );
};

export default WeddingPlanning;
