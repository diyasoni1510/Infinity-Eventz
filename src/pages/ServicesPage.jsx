import React from "react";
import Header from "../components/Header";
import GetTouch from "../components/GetTouch";
import Planning from "../components/Planning";
import Footer from "../components/Footer";
import serviceBg from "../images/service-bg.webp";
// import serviceBg from "../images/servicesBg.png";

import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import ServicesSlider from "../components/Services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

import social7 from "../images/social7.png";
import social2 from "../images/social2.png";
import social3 from "../images/social3.png";
import social4 from "../images/social4.png";
import social5 from "../images/social5.png";
import social6 from "../images/social6.png";

import corporate1 from "../images/corporate1.png";
import corporate2 from "../images/corporate2.png";
import corporate3 from "../images/corporate3.png";
import corporate4 from "../images/corporate4.png";
import corporate5 from "../images/corporate5.png";
import corporate6 from "../images/corporate6.png";

import promotion1 from "../images/promotion1.png";
import promotion2 from "../images/promotion2.png";
import promotion3 from "../images/promotion3.png";

import entertainment1 from "../images/entertainment1.png";
import entertainment2 from "../images/entertainment2.png";
import entertainment3 from "../images/entertainment3.png";
import entertainment4 from "../images/entertainment4.png";
import entertainment5 from "../images/entertainment5.png";
import entertainment6 from "../images/entertainment6.png";
import entertainment7 from "../images/entertainment7.png";
import entertainment8 from "../images/entertainment8.png";
import entertainment9 from "../images/entertainment9.png";
import entertainment10 from "../images/entertainment10.png";
import entertainment11 from "../images/entertainment11.png";
import entertainment12 from "../images/entertainment12.png";

import support1 from "../images/support1.png";
import support2 from "../images/support2.png";
import support3 from "../images/support3.png";
import support4 from "../images/support4.png";
import support5 from "../images/support5.png";
import support6 from "../images/support6.png";
import support7 from "../images/support7.png";
import support8 from "../images/support8.png";
import support9 from "../images/support9.png";
import support10 from "../images/support10.png";

import { Pagination } from "swiper/modules";

const services = [
  {
    image: social7,
    title: "Housewarming Events",
    desc: "New home, new memories—celebrate this joy with us!",
  },
  {
    image: social2,
    title: "Anniversary events",
    desc: "Celebrate years of love and togetherness with joy and memories",
  },
  {
    image: social3,
    title: "Baby Shower Events",
    desc: "A tiny miracle is on the way—let’s shower with love!",
  },
  {
    image: social4,
    title: "Birthday Parties",
    desc: "It’s party time—come make this birthday extra special with us!",
  },
  {
    image: social5,
    title: "Success Parties",
    desc: "Victory feels better when shared—join us in our success celebration!",
  },
  {
    image: social6,
    title: "Naming Ceremonies",
    desc: "Tiny feet, big joy—celebrate our baby’s naming day together.",
  },
];

const corporateServices = [
  {
    image: corporate1,
    title: "Conferences",
    desc: "Bringing minds together to inspire, learn, and lead forward.",
  },
  {
    image: corporate2,
    title: "Product Launch",
    desc: "Make your product’s first impression bold and unforgettable.",
  },
  {
    image: corporate3,
    title: "Factory Inaugurations",
    desc: "An impactful inauguration that reflects your industrial strength.",
  },
  {
    image: corporate4,
    title: "Corporate Tours",
    desc: "Explore, connect, and refresh through planned corporate escapes.",
  },
  {
    image: corporate5,
    title: "Annual Day Celebration",
    desc: "A grand occasion to recognize excellence and unity.",
  },
  {
    image: corporate6,
    title: "Corporate Parties",
    desc: "Celebrate milestones with fun, food, and fantastic entertainment.",
  },
];

const brandPromotion = [
  {
    image: promotion1,
    title: "Road Show",
    desc: "Drive your brand across cities with dynamic, eye-catching roadshows.",
  },
  {
    image: promotion2,
    title: "Mall Promotions",
    desc: "Interactive displays and demos to connect with everyday shoppers.",
  },
  {
    image: promotion3,
    title: "Society Activities",
    desc: "Reach families through local activities that build strong connections.",
  },
];

const entertainmentPromotion = [
  {
    image: entertainment1,
    title: "Celebrity / Artists Management",
    desc: "Book top artists with smooth coordination and VIP handling.",
  },
  {
    image: entertainment2,
    title: "Mall Promotions",
    desc: "Interactive displays and demos to connect with everyday shoppers.",
  },
  {
    image: entertainment3,
    title: "PR Management",
    desc: "Build a strong media presence with strategic PR planning.",
  },
  {
    image: entertainment4,
    title: "Rural Activities",
    desc: "Deliver your message where it matters—direct to rural audiences.",
  },
  {
    image: entertainment5,
    title: "Fashion Shows",
    desc: "Delivering stylish events that spotlight talent and latest fashion.",
  },
  {
    image: entertainment6,
    title: "Award Functions",
    desc: "Shine a spotlight on achievers in a grand setting.",
  },
  {
    image: entertainment7,
    title: "Fashion Shows",
    desc: "Captivating runway events that reflect your unique style and vision.",
  },
  {
    image: entertainment8,
    title: "Sound & Décor",
    desc: "Seamless sound setups and stunning décor that elevate every event.",
  },
  {
    image: entertainment9,
    title: "Conferences",
    desc: "Well-managed conferences with expert speakers and smooth event flow.",
  },
  {
    image: entertainment10,
    title: "Market Activities",
    desc: "Dynamic events that connect brands with their target audience effectively.",
  },
  {
    image: entertainment11,
    title: "Fairs and Camps",
    desc: "Fun-filled fairs and interactive camps that inspire learning and enjoyment.",
  },
  {
    image: entertainment12,
    title: "Dance Troupe",
    desc: "Professional dancers who create mesmerizing performances for your events.",
  },
];

const otherSupports = [
  {
    image: support1,
    title: "Fabrications",
    desc: "Custom structures and installations tailored for impactful event setups.",
  },
  {
    image: support2,
    title: "Audio Visuals",
    desc: "Professional sound and visual setups to elevate audience experience.",
  },
  {
    image: support3,
    title: "Manpower",
    desc: "Trained staff ensuring smooth event flow and flawless execution.",
  },
  {
    image: support4,
    title: "Emcees",
    desc: "Dynamic hosts to engage your audience and keep energy high.",
  },
  {
    image: support5,
    title: "Male Promoters",
    desc: "Professional male promoters to attract and engage audiences effectively.",
  },
  {
    image: support6,
    title: "All Types of Dance Troupes",
    desc: "Versatile dance performances catering to different themes and events.",
  },
  {
    image: support7,
    title: "Facilitation",
    desc: "End-to-end assistance for event logistics, planning, and coordination.",
  },
  {
    image: support8,
    title: "Female Hostesses",
    desc: "Charming hostesses to welcome guests and guide them seamlessly.",
  },
  {
    image: support9,
    title: "Police Permissions",
    desc: "Hassle-free police approvals to ensure your event runs smoothly.",
  },
  {
    image: support10,
    title: "Sound and Other Legal Permissions",
    desc: "All legal clearances and sound permits managed professionally.",
  },
];

const Services = () => {
  return (
    <>
      <Header
        bg={serviceBg}
        heading="Our Services"
        para="Make your dream wedding beautiful with personalized decor styles."
      />
      <section className="lg:px-28 lg:py-14 px-5 py-6">
        <div className="flex gap-2 text-sm md:text-base md:gap-4">
          <p>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </p>
          <IoIosArrowForward />
          <p>
            <Link to="/services">Services</Link>
          </p>
          <IoIosArrowForward />
          <p>Exhibition hall planning</p>
        </div>
      </section>
      {/* Entertainment */}
      <section className="lg:px-28 lg:py-14 px-5 py-6">
        <div className="text-center">
          <h2 className=" mb-3">Entertainment</h2>
          <p>
            Delivering unforgettable entertainment experiences with seamless
            planning and creative flair. From glamorous stage shows to
            star-studded events, we manage every detail to ensure energy,
            excitement, and excellence in every moment.
          </p>
        </div>

        <div className="grid-cols-3 gap-5 hidden md:grid mt-10">
          {entertainmentPromotion.map((service, index) => (
            <motion.div
              key={index}
              className="col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="relative h-[520px] w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-2/3 object-cover rounded-xl"
                />

                {/* Half on image, half below */}
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[0px] bg-white py-4 px-6 w-full rounded-tl-[50px] rounded-br-[50px] shadow-lg z-10">
                  <p className="mb-1 text-gray-800 font-semibold text-xl">
                    {service.title}
                  </p>
                  <p className="text-xs">Infinity Eventz</p>
                  <p className="mt-4 text-gray-900">{service.desc}</p>
                  <div className="flex gap-5">
                    <a
                      href="tel:7409979839"
                      className="bg-white uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-gray-900"
                    >
                      Call now
                    </a>
                    <Link
                      to="/#contact-us"
                      className="uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-transparent bg-[#A87C67] text-white"
                    >
                      Request queries
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="block md:hidden">
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
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
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
            {entertainmentPromotion.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[520px] w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-2/3 object-cover rounded-xl"
                  />

                  {/* Half on image, half below */}
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[0px] bg-white py-4 px-6 w-full rounded-tl-[50px] rounded-br-[50px] shadow-lg z-10">
                    <p className="mb-1 text-gray-800 font-semibold text-xl">
                      {service.title}
                    </p>
                    <p className="text-xs">Infinity Eventz</p>
                    <p className="mt-4 text-gray-900">{service.desc}</p>
                    <div className="flex gap-5">
                      <a
                        href="tel:7409979839"
                        className="bg-white uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-gray-900"
                      >
                        Call now
                      </a>
                      <Link
                        to="/#contact-us"
                        className="uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-transparent bg-[#A87C67] text-white"
                      >
                        Request queries
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* social events  */}
      <section className="lg:px-28 lg:py-14 px-5 py-6">
        <div className="text-center">
          <h2 className=" mb-3">Social Events</h2>
          <p>
            Come together for a joyful gathering filled with laughter, heartfelt
            conversations, and lasting memories. Celebrate the spirit of
            togetherness as we share moments of happiness, connect with loved
            ones, and strengthen our bonds."
          </p>
        </div>

        <div className="grid-cols-3 gap-5 hidden md:grid mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="relative h-[520px] w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-2/3 object-cover rounded-xl"
                />

                {/* Half on image, half below */}
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[0px] bg-white py-4 px-6 w-full rounded-tl-[50px] rounded-br-[50px] shadow-lg z-10">
                  <p className="mb-1 text-gray-800 font-semibold text-xl">
                    {service.title}
                  </p>
                  <p className="text-xs">Infinity Eventz</p>
                  <p className="mt-4 text-gray-900">{service.desc}</p>
                  <div className="flex gap-5">
                    <a
                      href="tel:7409979839"
                      className="bg-white uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-gray-900"
                    >
                      Call now
                    </a>
                    <Link
                      to="/#contact-us"
                      className="uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-transparent bg-[#A87C67] text-white"
                    >
                      Request queries
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="block md:hidden">
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
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
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
                <div className="relative h-[520px] w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-2/3 object-cover rounded-xl"
                  />

                  {/* Half on image, half below */}
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[0px] bg-white py-4 px-6 w-full rounded-tl-[50px] rounded-br-[50px] shadow-lg z-10">
                    <p className="mb-1 text-gray-800 font-semibold text-xl">
                      {service.title}
                    </p>
                    <p className="text-xs">Infinity Eventz</p>
                    <p className="mt-4 text-gray-900">{service.desc}</p>
                    <div className="flex gap-5">
                      <a
                        href="tel:7409979839"
                        className="bg-white uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-gray-900"
                      >
                        Call now
                      </a>
                      <Link
                        to="/#contact-us"
                        className="uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-transparent bg-[#A87C67] text-white"
                      >
                        Request queries
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Corporate Event Management  */}
      <section className="lg:px-28 lg:py-14 px-5 py-6">
        <div className="text-center">
          <h2 className=" mb-3">Corporate Event Management</h2>
          <p>
            Delivering impactful corporate experiences with flawless execution,
            innovative planning, and attention to detail. From conferences to
            celebrations, we turn every business moment into a memorable,
            professional, and goal-driven event that reflects your brand’s
            excellence.
          </p>
        </div>

        <div className="grid-cols-3 gap-5 hidden md:grid mt-10">
          {corporateServices.map((service, index) => (
            <motion.div
              key={index}
              className="col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="relative h-[520px] w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-2/3 object-cover rounded-xl"
                />

                {/* Half on image, half below */}
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[0px] bg-white py-4 px-6 w-full rounded-tl-[50px] rounded-br-[50px] shadow-lg z-10">
                  <p className="mb-1 text-gray-800 font-semibold text-xl">
                    {service.title}
                  </p>
                  <p className="text-xs">Infinity Eventz</p>
                  <p className="mt-4 text-gray-900">{service.desc}</p>
                  <div className="flex gap-5">
                    <a
                      href="tel:7409979839"
                      className="bg-white uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-gray-900"
                    >
                      Call now
                    </a>
                    <Link
                      to="/#contact-us"
                      className="uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-transparent bg-[#A87C67] text-white"
                    >
                      Request queries
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="block md:hidden">
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
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
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
            {corporateServices.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[520px] w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-2/3 object-cover rounded-xl"
                  />

                  {/* Half on image, half below */}
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[0px] bg-white py-4 px-6 w-full rounded-tl-[50px] rounded-br-[50px] shadow-lg z-10">
                    <p className="mb-1 text-gray-800 font-semibold text-xl">
                      {service.title}
                    </p>
                    <p className="text-xs">Infinity Eventz</p>
                    <p className="mt-4 text-gray-900">{service.desc}</p>
                    <div className="flex gap-5">
                      <a
                        href="tel:7409979839"
                        className="bg-white uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-gray-900"
                      >
                        Call now
                      </a>
                      <Link
                        to="/#contact-us"
                        className="uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-transparent bg-[#A87C67] text-white"
                      >
                        Request queries
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Brand Promotions */}
      <section className="lg:px-28 lg:py-14 px-5 py-6">
        <div className="text-center">
          <h2 className=" mb-3">Brand Promotions</h2>
          <p>
            Boost your brand visibility and connect with your audience through
            creative, targeted promotions. From roadshows to rural outreach, we
            ensure your message reaches the right people with impact,
            innovation, and unforgettable experiences.
          </p>
        </div>

        <div className="grid-cols-3 gap-5 hidden md:grid mt-10">
          {brandPromotion.map((service, index) => (
            <motion.div
              key={index}
              className="col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="relative h-[520px] w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-2/3 object-cover rounded-xl"
                />

                {/* Half on image, half below */}
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[0px] bg-white py-4 px-6 w-full rounded-tl-[50px] rounded-br-[50px] shadow-lg z-10">
                  <p className="mb-1 text-gray-800 font-semibold text-xl">
                    {service.title}
                  </p>
                  <p className="text-xs">Infinity Eventz</p>
                  <p className="mt-4 text-gray-900">{service.desc}</p>
                  <div className="flex gap-5">
                    <a
                      href="tel:7409979839"
                      className="bg-white uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-gray-900"
                    >
                      Call now
                    </a>
                    <Link
                      to="/#contact-us"
                      className="uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-transparent bg-[#A87C67] text-white"
                    >
                      Request queries
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="block md:hidden">
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
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
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
            {brandPromotion.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[520px] w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-2/3 object-cover rounded-xl"
                  />

                  {/* Half on image, half below */}
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[0px] bg-white py-4 px-6 w-full rounded-tl-[50px] rounded-br-[50px] shadow-lg z-10">
                    <p className="mb-1 text-gray-800 font-semibold text-xl">
                      {service.title}
                    </p>
                    <p className="text-xs">Infinity Eventz</p>
                    <p className="mt-4 text-gray-900">{service.desc}</p>
                    <div className="flex gap-5">
                      <a
                        href="tel:7409979839"
                        className="bg-white uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-gray-900"
                      >
                        Call now
                      </a>
                      <Link
                        to="/#contact-us"
                        className="uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-transparent bg-[#A87C67] text-white"
                      >
                        Request queries
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Other Supports */}
      <section className="lg:px-28 lg:py-14 px-5 py-6">
        <div className="text-center">
          <h2 className=" mb-3">Other Supports</h2>
          <p>
            Our expert team manages critical aspects like police permissions,
            legal compliances, sound regulations, and facilitation, ensuring
            your event runs smoothly and stress-free. We handle the
            behind-the-scenes complexities so you can focus on creating lasting
            memories.
          </p>
        </div>

        <div className="grid-cols-3 gap-5 hidden md:grid mt-10">
          {otherSupports.map((service, index) => (
            <motion.div
              key={index}
              className="col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="relative h-[520px] w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-2/3 object-cover rounded-xl"
                />

                {/* Half on image, half below */}
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[0px] bg-white py-4 px-6 w-full rounded-tl-[50px] rounded-br-[50px] shadow-lg z-10">
                  <p className="mb-1 text-gray-800 font-semibold text-xl">
                    {service.title}
                  </p>
                  <p className="text-xs">Infinity Eventz</p>
                  <p className="mt-4 text-gray-900">{service.desc}</p>
                  <div className="flex gap-5">
                    <a
                      href="tel:7409979839"
                      className="bg-white uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-gray-900"
                    >
                      Call now
                    </a>
                    <Link
                      to="/#contact-us"
                      className="uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-transparent bg-[#A87C67] text-white"
                    >
                      Request queries
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="block md:hidden">
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
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
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
            {otherSupports.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[520px] w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-2/3 object-cover rounded-xl"
                  />

                  {/* Half on image, half below */}
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[0px] bg-white py-4 px-6 w-full rounded-tl-[50px] rounded-br-[50px] shadow-lg z-10">
                    <p className="mb-1 text-gray-800 font-semibold text-xl">
                      {service.title}
                    </p>
                    <p className="text-xs">Infinity Eventz</p>
                    <p className="mt-4 text-gray-900">{service.desc}</p>
                    <div className="flex gap-5">
                      <a
                        href="tel:7409979839"
                        className="bg-white uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-gray-900"
                      >
                        Call now
                      </a>
                      <Link
                        to="/#contact-us"
                        className="uppercase py-2 px-2 md:px-4 text-xs md:text-sm mt-5 border  rounded border-transparent bg-[#A87C67] text-white"
                      >
                        Request queries
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Planning />
      <GetTouch />
      <Footer />
    </>
  );
};

export default Services;
