import { useState } from "react";
import Header from "../components/Header";
import Planning from "../components/Planning";
import GetTouch from "../components/GetTouch";
import Footer from "../components/Footer";
import venueBg from "../images/venueBg.png";
import goaVenu1 from "../images/goavenue1.webp";
import goaVenu2 from "../images/goavenue2.webp";
import goaVenu3 from "../images/goavenue3.webp";
import goaVenu4 from "../images/goavenue4.webp";
import goaVenu5 from "../images/goavenue5.webp";
import goaVenu6 from "../images/goavenue6.webp";
import goaVenu7 from "../images/goavenue7.webp";
import goaVenu8 from "../images/goavenue8.webp";
import goaVenu9 from "../images/goavenue9.webp";
import goaVenu10 from "../images/goavenue10.webp";
import goaVenu11 from "../images/goavenue11.webp";
import goaVenu12 from "../images/goavenue12.webp";
import delhiVenue1 from "../images/delhivenue1.webp";
import delhiVenue2 from "../images/delhivenue2.webp";
import delhiVenue3 from "../images/delhivenue3.webp";
import delhiVenue4 from "../images/delhivenue4.webp";
import delhiVenue5 from "../images/delhivenue5.webp";
import delhiVenue6 from "../images/delhivenue6.webp";
import delhiVenue7 from "../images/delhivenue7.webp";
import delhiVenue8 from "../images/delhivenue8.webp";
import delhiVenue9 from "../images/delhivenue9.webp";
import delhiVenue10 from "../images/delhivenue10.webp";
import delhiVenue11 from "../images/delhivenue11.webp";
import delhiVenue12 from "../images/delhivenue12.webp";
import puneVenue1 from "../images/punevenue1.webp";
import puneVenue2 from "../images/punevenue2.webp";
import puneVenue3 from "../images/punevenue3.webp";
import puneVenue4 from "../images/punevenue4.webp";
import puneVenue5 from "../images/punevenue5.webp";
import puneVenue6 from "../images/punevenue6.webp";
import puneVenue7 from "../images/punevenue7.webp";
import puneVenue8 from "../images/punevenue8.webp";
import puneVenue9 from "../images/punevenue9.webp";
import puneVenue10 from "../images/punevenue10.webp";
import puneVenue11 from "../images/punevenue11.webp";
import puneVenue12 from "../images/punevenue12.webp";
import jaipurVenue1 from "../images/jaipurvenue1.png";
import jaipurVenue2 from "../images/jaipurvenue2.png";
import jaipurVenue3 from "../images/jaipurvenue3.png";
import jaipurVenue4 from "../images/jaipurvenue4.png";
import jaipurVenue5 from "../images/jaipurvenue5.png";
import jaipurVenue6 from "../images/jaipurvenue6.png";
import jaipurVenue7 from "../images/jaipurvenue7.png";
import jaipurVenue8 from "../images/jaipurvenue8.png";
import jaipurVenue9 from "../images/jaipurvenue9.png";
import jaipurVenue10 from "../images/jaipurvenue10.png";
import jaipurVenue11 from "../images/jaipurvenue11.png";
import jaipurVenue12 from "../images/jaipurvenue12.png";
import jodhpurVenue1 from "../images/jodhpurvenue1.png";
import jodhpurVenue2 from "../images/jodhpurvenue2.png";
import jodhpurVenue3 from "../images/jodhpurvenue3.png";
import jodhpurVenue4 from "../images/jodhpurvenue4.png";
import jodhpurVenue5 from "../images/jodhpurvenue5.png";
import jodhpurVenue6 from "../images/jodhpurvenue6.png";
import jodhpurVenue7 from "../images/jodhpurvenue7.png";
import jodhpurVenue8 from "../images/jodhpurvenue8.png";
import jodhpurVenue9 from "../images/jodhpurvenue9.png";
import jodhpurVenue10 from "../images/jodhpurvenue10.png";
import jodhpurVenue11 from "../images/jodhpurvenue11.png";
import jodhpurVenue12 from "../images/jodhpurvenue12.png";
import udaipurVenue1 from "../images/udaipurvenue1.png";
import udaipurVenue2 from "../images/udaipurvenue2.png";
import udaipurVenue3 from "../images/udaipurvenue3.png";
import udaipurVenue4 from "../images/udaipurvenue4.png";
import udaipurVenue5 from "../images/udaipurvenue5.png";
import udaipurVenue6 from "../images/udaipurvenue6.png";
import udaipurVenue7 from "../images/udaipurvenue7.png";
import udaipurVenue8 from "../images/udaipurvenue8.png";
import udaipurVenue9 from "../images/udaipurvenue9.png";
import udaipurVenue10 from "../images/udaipurvenue10.png";
import udaipurVenue11 from "../images/udaipurvenue11.png";
import udaipurVenue12 from "../images/udaipurvenue12.png";
import neemranaVenue1 from "../images/neemranavenue1.png";
import neemranaVenue2 from "../images/neemranavenue2.png";
import neemranaVenue3 from "../images/neemranavenue3.png";
import neemranaVenue4 from "../images/neemranavenue4.png";
import neemranaVenue5 from "../images/neemranavenue5.png";
import neemranaVenue6 from "../images/neemranavenue6.png";
import neemranaVenue7 from "../images/neemranavenue7.png";
import neemranaVenue8 from "../images/neemranavenue8.png";
import neemranaVenue9 from "../images/neemranavenue9.png";
import neemranaVenue10 from "../images/neemranavenue10.png";
import neemranaVenue11 from "../images/neemranavenue11.png";
import neemranaVenue12 from "../images/neemranavenue12.png";
import jimVenue1 from "../images/jimvenue1.png";
import jimVenue2 from "../images/jimvenue2.png";
import jimVenue3 from "../images/jimvenue3.png";
import jimVenue4 from "../images/jimvenue4.png";
import jimVenue5 from "../images/jimvenue5.png";
import jimVenue6 from "../images/jimvenue6.png";
import jimVenue7 from "../images/jimvenue7.png";
import jimVenue8 from "../images/jimvenue8.png";
import jimVenue9 from "../images/jimvenue9.png";
import jimVenue10 from "../images/jimvenue10.png";
import jimVenue11 from "../images/jimvenue11.png";
import jimVenue12 from "../images/jimvenue12.png";
import mussorieVenue1 from "../images/mussorievenue1.png";
import mussorieVenue2 from "../images/mussorievenue2.png";
import mussorieVenue3 from "../images/mussorievenue3.png";
import mussorieVenue4 from "../images/mussorievenue4.png";
import mussorieVenue5 from "../images/mussorievenue5.png";
import mussorieVenue6 from "../images/mussorievenue6.png";
import mussorieVenue7 from "../images/mussorievenue7.png";
import mussorieVenue8 from "../images/mussorievenue8.png";
import mussorieVenue9 from "../images/mussorievenue9.png";
import mussorieVenue10 from "../images/mussorievenue10.png";
import mussorieVenue11 from "../images/mussorievenue11.png";
import mussorieVenue12 from "../images/mussorievenue12.png";
import kasolVenue1 from "../images/kasolvenue1.png";
import kasolVenue2 from "../images/kasolvenue2.png";
import kasolVenue3 from "../images/kasolvenue3.png";
import kasolVenue4 from "../images/kasolvenue4.png";
import kasolVenue5 from "../images/kasolvenue5.png";
import kasolVenue6 from "../images/kasolvenue6.png";
import kasolVenue7 from "../images/kasolvenue7.png";
import kasolVenue8 from "../images/kasolvenue8.png";
import kasolVenue9 from "../images/kasolvenue9.png";
import kasolVenue10 from "../images/kasolvenue10.png";
import kasolVenue11 from "../images/kasolvenue11.png";
import kasolVenue12 from "../images/kasolvenue12.png";
import indoreVenue1 from "../images/indorevenue1.png";
import indoreVenue2 from "../images/indorevenue2.png";
import indoreVenue3 from "../images/indorevenue3.png";
import indoreVenue4 from "../images/indorevenue4.png";
import indoreVenue5 from "../images/indorevenue5.png";
import indoreVenue6 from "../images/indorevenue6.png";
import indoreVenue7 from "../images/indorevenue7.png";
import indoreVenue8 from "../images/indorevenue8.png";
import indoreVenue9 from "../images/indorevenue9.png";
import indoreVenue10 from "../images/indorevenue10.png";
import indoreVenue11 from "../images/indorevenue11.png";
import indoreVenue12 from "../images/indorevenue12.png";
import shimlaVenue1 from "../images/shimlavenue1.png";
import shimlaVenue2 from "../images/shimlavenue2.png";
import shimlaVenue3 from "../images/shimlavenue3.png";
import shimlaVenue4 from "../images/shimlavenue4.png";
import shimlaVenue5 from "../images/shimlavenue5.png";
import shimlaVenue6 from "../images/shimlavenue6.png";
import shimlaVenue7 from "../images/shimlavenue7.png";
import shimlaVenue8 from "../images/shimlavenue8.png";
import shimlaVenue9 from "../images/shimlavenue9.png";
import shimlaVenue10 from "../images/shimlavenue10.png";
import shimlaVenue11 from "../images/shimlavenue11.png";
import shimlaVenue12 from "../images/shimlavenue12.png";
import mountVenue1 from "../images/mountvenue1.png";
import mountVenue2 from "../images/mountvenue2.png";
import mountVenue3 from "../images/mountvenue3.png";
import mountVenue4 from "../images/mountvenue4.png";
import mountVenue5 from "../images/mountvenue5.png";
import mountVenue6 from "../images/mountvenue6.png";
import mountVenue7 from "../images/mountvenue7.png";
import mountVenue8 from "../images/mountvenue8.png";
import mountVenue9 from "../images/mountvenue9.png";
import mountVenue10 from "../images/mountvenue10.png";
import mountVenue11 from "../images/mountvenue11.png";
import mountVenue12 from "../images/mountvenue12.png";
import { IoCall } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

const venues = {
  GOA: {
    title: "Goa",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      goaVenu1,
      goaVenu2,
      goaVenu3,
      goaVenu4,
      goaVenu5,
      goaVenu6,
      goaVenu7,
      goaVenu8,
      goaVenu9,
      goaVenu10,
      goaVenu11,
      goaVenu12,
    ],
  },
  DELHI: {
    title: "Delhi",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      delhiVenue1,
      delhiVenue3,
      delhiVenue2,
      delhiVenue4,
      delhiVenue5,
      delhiVenue6,
      delhiVenue7,
      delhiVenue8,
      delhiVenue9,
      delhiVenue10,
      delhiVenue11,
      delhiVenue12,
    ],
  },
  PUNE: {
    title: "Pune",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      puneVenue1,
      puneVenue3,
      puneVenue2,
      puneVenue4,
      puneVenue5,
      puneVenue6,
      puneVenue7,
      puneVenue8,
      puneVenue9,
      puneVenue10,
      puneVenue11,
      puneVenue12,
    ],
  },
  JAIPUR: {
    title: "Jaipur",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      jaipurVenue1,
      jaipurVenue3,
      jaipurVenue2,
      jaipurVenue4,
      jaipurVenue5,
      jaipurVenue6,
      jaipurVenue7,
      jaipurVenue8,
      jaipurVenue9,
      jaipurVenue10,
      jaipurVenue11,
      jaipurVenue12,
    ],
  },
  JODHPUR: {
    title: "Jodhpur",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      jodhpurVenue1,
      jodhpurVenue3,
      jodhpurVenue2,
      jodhpurVenue4,
      jodhpurVenue5,
      jodhpurVenue6,
      jodhpurVenue7,
      jodhpurVenue8,
      jodhpurVenue9,
      jodhpurVenue10,
      jodhpurVenue11,
      jodhpurVenue12,
    ],
  },
  UDAIPUR: {
    title: "Udaipur",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      udaipurVenue1,
      udaipurVenue3,
      udaipurVenue2,
      udaipurVenue4,
      udaipurVenue5,
      udaipurVenue6,
      udaipurVenue7,
      udaipurVenue8,
      udaipurVenue9,
      udaipurVenue10,
      udaipurVenue11,
      udaipurVenue12,
    ],
  },
  NEEMRANA: {
    title: "Neemrana",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      neemranaVenue1,
      neemranaVenue3,
      neemranaVenue2,
      neemranaVenue4,
      neemranaVenue5,
      neemranaVenue6,
      neemranaVenue7,
      neemranaVenue8,
      neemranaVenue9,
      neemranaVenue10,
      neemranaVenue11,
      neemranaVenue12,
    ],
  },
  JIMCORBETT: {
    title: "Jim Corbett",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      jimVenue1,
      jimVenue3,
      jimVenue2,
      jimVenue4,
      jimVenue5,
      jimVenue6,
      jimVenue7,
      jimVenue8,
      jimVenue9,
      jimVenue10,
      jimVenue11,
      jimVenue12,
    ],
  },
  MUSSORIE: {
    title: "Mussorie",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      mussorieVenue1,
      mussorieVenue3,
      mussorieVenue2,
      mussorieVenue4,
      mussorieVenue5,
      mussorieVenue6,
      mussorieVenue7,
      mussorieVenue8,
      mussorieVenue9,
      mussorieVenue10,
      mussorieVenue11,
      mussorieVenue12,
    ],
  },
  KASOL: {
    title: "Kasol",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      kasolVenue1,
      kasolVenue3,
      kasolVenue2,
      kasolVenue4,
      kasolVenue5,
      kasolVenue6,
      kasolVenue7,
      kasolVenue8,
      kasolVenue9,
      kasolVenue10,
      kasolVenue11,
      kasolVenue12,
    ],
  },
  INDORE: {
    title: "Indore",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      indoreVenue1,
      indoreVenue3,
      indoreVenue2,
      indoreVenue4,
      indoreVenue5,
      indoreVenue6,
      indoreVenue7,
      indoreVenue8,
      indoreVenue9,
      indoreVenue10,
      indoreVenue11,
      indoreVenue12,
    ],
  },
  SHIMLA: {
    title: "Shimla",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      shimlaVenue1,
      shimlaVenue3,
      shimlaVenue2,
      shimlaVenue4,
      shimlaVenue5,
      shimlaVenue6,
      shimlaVenue7,
      shimlaVenue8,
      shimlaVenue9,
      shimlaVenue10,
      shimlaVenue11,
      shimlaVenue12,
    ],
  },
  MOUNTABU: {
    title: "Mount Abu",
    description:
      "Find the perfect venue to match your event's vibe, scale, and style. From grand banquet halls to open lawns and modern spaces, we offer locations that enhance every celebration and corporate gathering.",
    images: [
      mountVenue1,
      mountVenue3,
      mountVenue2,
      mountVenue4,
      mountVenue5,
      mountVenue6,
      mountVenue7,
      mountVenue8,
      mountVenue9,
      mountVenue10,
      mountVenue11,
      mountVenue12,
    ],
  },
};

export default function Venue() {
  const [selectedCity, setSelectedCity] = useState("GOA");

  const { title, description, images } = venues[selectedCity];

  return (
    <>
      <Header
        bg={venueBg}
        heading="Destination Wedding Venues"
        para="Make your dream wedding beautiful with personalized venue."
      />
      <section className="lg:px-28 lg:py-16 px-5 py-6">
        {/* Tabs */}
        <p className="mb-8">Our Venues Destinations</p>

        <div className="flex justify-center items-center flex-wrap gap-3 mb-10">
          {Object.keys(venues).map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`text-xs md:text-sm px-4 py-2 rounded-full border-2 transition-all duration-500 ${
                selectedCity === city
                  ? "bg-[#874F25] text-white border-transparent"
                  : "bg-white text-gray-500 border-gray-500"
              } hover:bg-[#874F25] hover:text-white hover:border-transparent transition`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-orange-800">{title}</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{description}</p>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div className="col-span-1 relative ">
              <img src={image} alt="" className="h-full object-cover" />
              <div className="absolute w-full h-full bg-black bg-opacity-15 top-0"></div>
              <div className="bg-[#FEE9D0] border border-[#BE6902] p-2 w-fit absolute top-2 right-2 rounded-full">
                <a href="tel:7409979839">
                  <IoCall color="#BE6902" />
                </a>
              </div>
              <div className="absolute w-full bottom-0 p-3 text-white">
                <span className="text-sm">GOA</span>
                <div className="flex items-center justify-between">
                  <span>600+ Seatings</span>
                  <div className="gap-2 flex items-center">
                    <FaStar className="inline" color="#87FA4D" />{" "}
                    <span>4.2</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="block md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.2} className="md:hidden">
            {images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative">
                  <img
                    src={image}
                    alt=""
                    className="h-60 w-full object-cover rounded-md"
                  />
                  <div className="absolute w-full h-full bg-black bg-opacity-15 top-0 rounded-md"></div>
                  <div className="bg-[#FEE9D0] border border-[#BE6902] p-2 w-fit absolute top-2 right-2 rounded-full">
                    <a href="tel:7409979839">
                      <IoCall color="#BE6902" />
                    </a>
                  </div>
                  <div className="absolute w-full bottom-0 p-3 text-white">
                    <span className="text-sm">GOA</span>
                    <div className="flex items-center justify-between">
                      <span>600+ Seatings</span>
                      <div className="gap-2 flex items-center">
                        <FaStar className="inline" color="#87FA4D" />
                        <span>4.2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <div key={idx} className="col-span-1 relative">
              <img src={image} alt="" className="h-96 w-full object-cover" />
              <div className="absolute w-full h-full bg-black bg-opacity-15 top-0"></div>
              <div className="bg-[#FEE9D0] border border-[#BE6902] p-2 w-fit absolute top-2 right-2 rounded-full">
                <a href="tel:7409979839">
                  <IoCall color="#BE6902" />
                </a>
              </div>
              <div className="absolute w-full bottom-0 p-3 text-white">
                <span className="text-sm">{title}</span>
                <div className="flex items-center justify-between">
                  <span>600+ Seatings</span>
                  <div className="gap-2 flex items-center">
                    <FaStar className="inline" color="#87FA4D" />
                    <span>4.2</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Planning />
      <GetTouch />
      <Footer />
    </>
  );
}
