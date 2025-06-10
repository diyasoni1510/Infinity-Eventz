import React, { useEffect, useState } from "react";
import header from "../images/header-bg.webp";

import TestimonialSlider from "../components/Testimonial";
import FAQ from "../components/Faq";
import Contact from "../components/Contact";
import wedding1 from "../images/wedding1.png";
import wedding2 from "../images/wedding2.png";
import wedding3 from "../images/wedding3.png";
import wedding4 from "../images/wedding4.png";
import experts from "../images/experts.png";
import Planner from "../components/Planner";
import Services from "../components/Services";
import Partners from "../components/Partners";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Milestone from "../components/Milestone";
import Planning from "../components/Planning";
import SocialLinks from "../components/Social";
import Footer from "../components/Footer";
import GetTouch from "../components/GetTouch";
import OfferCard from "../components/offerCard";
import { Link } from "react-router-dom";
import panjak from "../images/pankaj-sir.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMeetPlanner, setShowMeetPlanner] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Wait till DOM renders
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay to ensure everything is mounted
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Header
        bg={header}
        heading="India’s Premier Wedding Planning Company for Unforgettable Celebrations"
        para="At Infinity Eventz, we believe every event should be a perfect blend
            of elegance ."
      />
      <OfferCard />
      <AboutUs />
      <Partners />
      <Milestone />
      <Services />
      <Contact />
      <Planner />
      <Planning />
      <section className="lg:px-28 lg:py-14 px-5 py-6">
        <div className="text-center">
          <h2 className="uppercase mb-3">Our Wedding Gallery</h2>
          <p>
            Infinity Eventz guides you in choosing the ideal location and
            planning every detail for a luxurious, hassle-free wedding — just
            the way you imagined it.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10">
          <div className="col-span-1">
            <img src={wedding1} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-1 gap-y-5">
              <img
                src={wedding2}
                alt=""
                className="w-full object-cover h-full"
              />
              <img
                src={wedding3}
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
          </div>
          <div className="col-span-1">
            <img src={wedding3} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-1">
            <img src={wedding4} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="lg:px-28 lg:py-14 px-5 py-6">
        <div className="text-center">
          <h2 className="uppercase mb-3">Make Your Dream Wedding Come True</h2>
          <p>
            Connect with seasoned wedding professionals who specialize in
            blending luxury with rich cultural traditions. From personalized
            planning to flawless execution, we ensure your celebration reflects
            your story, style, and values in every elegant detail
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-end gap-10 md:gap-20 mt-14">
          <div className="col-span-1 max-w-[500px] mx-auto">
            <div className="relative ms-14">
              <div className="absolute bottom-4 right-14 w-full h-full rounded-t-[50%] rounded-b-none  opacity-30 z-0 backdrop-blur-md">
                <img
                  src={experts}
                  alt="Palace"
                  className="relative z-10 w-full h-full object-cover rounded-t-[50%] rounded-b-none shadow-lg"
                />
              </div>

              <img
                src={experts}
                alt="Palace"
                className="relative z-10 w-full h-full object-cover rounded-t-[50%] rounded-b-none shadow-lg"
              />
            </div>
          </div>
          <div className="col-span-1">
            <h4>Plan with Experts</h4>
            <p className="leading-7">
              Experience the ease and elegance of planning your big day with the
              help of our expert wedding planners. From curating breathtaking
              venues and décor themes to managing vendors and timelines, we take
              care of every detail. Our personalized approach ensures your
              vision is brought to life seamlessly, without the stress. Whether
              it's an intimate ceremony or a grand celebration, our team
              supports you at every step to create a wedding that's truly
              unforgettable.
            </p>
            <div className="mt-10 flex flex-col md:flex-row gap-5 md:gap-7">
              <button
                className="uppercase rounded-xl text-xs md:text-sm py-3 px-4 border-2 border-gray-800"
                onClick={() => setShowMeetPlanner(true)}
              >
                Meet your planner now
              </button>
              <Link
                to="/#contact-us"
                className="relative uppercase py-3 text-sm px-6 rounded-xl font-semibold bg-[#e6be8a] text-amber-900 overflow-hidden"
              >
                book consultation
                <span className="absolute inset-0 rounded-xl border-2 border-transparent">
                  <span className="absolute top-0 left-0 w-full h-full rounded-xl border-2 border-transparent border-t-[#a87c67] border-r-[#a87c67] border-b-[#a87c67] border-l-[#a87c67] bg-[linear-gradient(90deg,#a87c67,rgba(168,124,103,0))] animate-border-move"></span>
                </span>
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
              </Link>
            </div>
          </div>
        </div>
      </section>
      {showMeetPlanner && (
        <AnimatePresence>
          <motion.section
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left Column */}
              <div className="col-span-1 py-6 lg:py-16 ps-5 lg:ps-28">
                <h2 className="text-gray-600 text-sm">Contact Us</h2>
                <div>
                  <p className="font-semibold text-lg">Infinity Eventz</p>
                  <h1 className="text-3xl font-bold leading-tight">
                    Founder <br /> & CEO
                  </h1>
                </div>
                <p className="text-gray-700 text-lg mt-4">
                  At <span className="font-bold">Infinity Eventz</span>, we
                  specialize in crafting exceptional{" "}
                  <span className="font-bold">corporate events</span>,{" "}
                  <span className="font-bold">weddings</span>, social
                  gatherings, and{" "}
                  <span className="font-bold">brand activations</span>.
                </p>
                <p className="text-gray-700 text-lg mt-2">
                  He has half a decade of experience in the mission to create{" "}
                  <span className="font-bold">seamless</span>,{" "}
                  <span className="font-bold">innovative</span>, and
                  unforgettable events tailored to our clients' unique
                  aspirations..
                </p>
              </div>

              {/* Middle Column */}
              <div className="col-span-1 h-full mb-10 flex justify-center flex-col items-center gap-y-2">
                <img
                  src={panjak}
                  alt="Pankaj Tomar"
                  className="rounded-b-full max-h-[500px]"
                />
                <p className="text-center text-lg font-medium">
                  Pankaj Tomar <br />
                  <span className="font-normal">Founder & CEO</span>
                </p>
              </div>

              {/* Right Column */}
              <div className="col-span-1 py-6 lg:py-16 pe-5 lg:pe-28 flex items-center justify-center lg:justify-end text-end text-lg lg:text-2xl">
                <div className="flex flex-col gap-y-5">
                  <p>
                    <span className="text-[#A87C67] font-bold">10+</span> <br />
                    Years Experience
                  </p>
                  <p>
                    <span className="text-[#A87C67] font-bold">1200+</span>{" "}
                    <br />
                    Events Managed
                  </p>
                  <p>
                    <span className="text-[#A87C67] font-bold">Email-Id</span>{" "}
                    <br />
                    infinityeventz.ggn@gmail.com
                  </p>
                  <p>
                    <span className="text-[#A87C67] font-bold">Phone no.</span>{" "}
                    <br />
                    +91-9220980291
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      )}
      <SocialLinks />
      <TestimonialSlider />
      <FAQ />
      <GetTouch />
      <Footer />
    </>
  );
};

export default Home;
