import React, { useEffect, useState } from "react";

import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation, useRoutes } from "react-router-dom";
import offer from "../images/bxs_offer.png";
import ContactModal from "./ContactModal";
import axios from "axios";
import logo from "../images/logo_infinity.png";

const Header = ({ bg, heading, para, path }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // const [isActive, setIsActive] = useState(false);

  const yudi = useLocation();
  const pathname = yudi.pathname.split("/").filter(Boolean).pop();

  const statisOffers = [
    {
      title: "Dream Destination Wedding in Goa – Just ₹25 Lakhs!",
      description:
        "All-inclusive beach wedding package in Goa with décor, catering, 3-day accommodation for 100 guests, and entertainment. Valid till Aug 2025.",
      discountPercent: 20,
      validTill: "2025-08-31T00:00:00Z",
      imageUrl: "https://example.com/images/goa-wedding.jpg",
      destination: "goa",
    },
    {
      title: "Royal Palace Wedding in Jaipur – ₹30 Lakhs Only",
      description:
        "Get married like royalty! Book a palace in Jaipur for your big day. Package includes décor, traditional Rajasthani menu, folk performances, and stay for 150 guests.",
      discountPercent: 15,
      validTill: "2025-07-15T00:00:00Z",
      imageUrl: "https://example.com/images/jaipur-palace.jpg",
      destination: "jaipur",
    },
    {
      title: "FREE Thailand Honeymoon with Your Wedding in Udaipur",
      description:
        "Book a destination wedding in Udaipur and get a 5-day honeymoon package in Thailand absolutely FREE. Flights + stay included!",
      discountPercent: 0,
      validTill: "2025-09-30T00:00:00Z",
      imageUrl: "https://example.com/images/udaipur-thailand.jpg",
      destination: "udaipur",
    },
    {
      title: "Shimla Snow Wedding + Maldives Honeymoon Combo",
      description:
        "Have a magical snowy wedding in Shimla and chill in Maldives post-wedding! Combo package includes full wedding + 4-night honeymoon stay.",
      discountPercent: 10,
      validTill: "2025-12-20T00:00:00Z",
      imageUrl: "https://example.com/images/shimla-maldives.jpg",
      destination: "shimla",
    },
    {
      title: "Neemrana Fort Wedding – Under ₹20 Lakhs",
      description:
        "Fairytale fort wedding at Neemrana with royal welcome, heritage décor, shehnai live music & 2-night stay. Budget-friendly & stunning!",
      discountPercent: 18,
      validTill: "2025-06-30T00:00:00Z",
      imageUrl: "https://example.com/images/neemrana-fort.jpg",
      destination: "neemrana",
    },
    {
      title: "Jim Corbett Jungle Wedding + Safari Treat!",
      description:
        "Wildly romantic wedding in the lap of nature. Jim Corbett forest wedding package with 2 safari rides, jungle-themed décor & guest stays.",
      discountPercent: 12,
      validTill: "2025-11-15T00:00:00Z",
      imageUrl: "https://example.com/images/corbett-wedding.jpg",
      destination: "jim-corbett",
    },
  ];

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section[id]");
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id); // Activating section
  //         } else if (entry.boundingClientRect.top > 0) {
  //           // Remove active when section scrolls out completely
  //           setActiveSection("");
  //         }
  //       });
  //     },
  //     {
  //       rootMargin: "-100px 0px 0px 0px", // For faster trigger
  //       threshold: 0.1, // Triggers quicker, consider adjusting based on layout
  //     }
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   return () => observer.disconnect();
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let activeId = "";

      const scrollPosition = window.innerHeight / 2; // or custom position like 100px
      console.log("scrollPosition", scrollPosition);

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        // Check if middle of screen is inside this section
        if (sectionTop <= scrollPosition && sectionBottom >= scrollPosition) {
          activeId = section.id;
          console.log("yes");
        }
      });

      setActiveSection(activeId); // Set active only once after checking all
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className=" h-screen  bg-no-repeat bg-cover relative bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* <div className="absolute h-full w-full top-0 light-0 bg-gray-500 bg-opacity-20"></div> */}
      <header
        className={`w-full left-0 top-0 z-50 px-5 lg:px-28 py-2  transition-all duration-300 ease-in-out
        ${
          scrolled
            ? "fixed bg-white text-gray-900 shadow-md backdrop-blur-md"
            : "absolute bg-blue-400 bg-opacity-20 backdrop-blur-sm text-white"
        }`}
      >
        <div className="flex justify-between lg:justify-center items-center">
          <div className="flex-shrink-0 hidden lg:block">
            <ul className="flex uppercase gap-5 text-sm font-semibold">
              <li
                className={`hover:border-b pb-[2px] ${
                  scrolled ? "hover:border-gray-900" : "hover:border-white"
                } ${
                  activeSection === "about-us"
                    ? scrolled
                      ? "border-b border-gray-900"
                      : "border-b border-white"
                    : ""
                }`}
              >
                <a href="/#about-us">about us</a>
              </li>
              <li
                className={`hover:border-b  pb-[2px] ${
                  scrolled ? "hover:border-gray-900" : "hover:border-white"
                } ${
                  pathname === "services" && scrolled
                    ? "border-b border-gray-800 pb-[2px]"
                    : pathname === "services" && !scrolled
                    ? "border-b  pb-[2px] border-white"
                    : ""
                }`}
              >
                <Link to="/services">services</Link>
              </li>
              <li
                className={`hover:border-b  pb-[2px] ${
                  scrolled ? "hover:border-gray-900" : "hover:border-white"
                } ${
                  pathname === "wedding-planning" && scrolled
                    ? "border-b border-gray-800 pb-[2px]"
                    : pathname === "wedding-planning" && !scrolled
                    ? "border-b  pb-[2px] border-white"
                    : ""
                }`}
              >
                {/* <a href="#">wedding planning</a> */}
                <Link to="/wedding-planning">wedding planning</Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-full flex justify-center">
            <Link to="/">
              <img src={logo} alt="" width={200} className="w-40 md:w-48" />
            </Link>
          </div>
          <div className="flex-shrink-0 hidden lg:block">
            <ul className="flex uppercase gap-5 text-sm font-semibold">
              {/* <li
                className={`hover:border-b  pb-[2px] ${
                  scrolled ? "hover:border-gray-900" : "hover:border-white"
                }`}
              >
                <a href="#">venues</a>
              </li> */}
              <li
                className={`hover:border-b  pb-[2px] ${
                  scrolled ? "hover:border-gray-900" : "hover:border-white"
                } ${
                  pathname === "venues" && scrolled
                    ? "border-b border-gray-800 pb-[2px]"
                    : pathname === "venues" && !scrolled
                    ? "border-b  pb-[2px] border-white"
                    : ""
                }`}
              >
                {/* <a href="#">wedding planning</a> */}
                <Link to="/venues">venue</Link>
              </li>
              <li
                className={`hover:border-b pb-[2px] ${
                  scrolled ? "hover:border-gray-900" : "hover:border-white"
                } ${
                  activeSection === "partners"
                    ? scrolled
                      ? "border-b border-gray-900"
                      : "border-b border-white"
                    : ""
                }`}
              >
                <a href="/#partners">partners</a>
              </li>

              <li
                className={`hover:border-b pb-[2px] ${
                  scrolled ? "hover:border-gray-900" : "hover:border-white"
                } ${
                  activeSection === "contact-us"
                    ? scrolled
                      ? "border-b border-gray-900"
                      : "border-b border-white"
                    : ""
                }`}
              >
                <a href="/#contact-us">contact us</a>
              </li>
            </ul>
          </div>
          <div
            className="mobile-sidebar block lg:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <IoMenu size={32} />
          </div>
        </div>
      </header>
      {/* <section className="fixed top-[60px] md:top-[70px] bg-[#F34E01] w-full p-2 z-50">
        <div className="scrolling-wrapper">
          <div className="scrolling-content">
            {(offers && offers.length > 0 ? [...Array(2)] : [...Array(2)]).map(
              (_, i) => (
                <React.Fragment key={i}>
                  {(offers && offers.length > 0 ? offers : statisOffers).map(
                    (offerItem, index) => (
                      <div
                        key={`${i}-${index}`}
                        className="offers flex items-center gap-2"
                      >
                        <p className="text-white text-sm">
                          ✨ {offerItem.title}
                        </p>
                        <button className="border text-xs border-white rounded py-2 px-4 bg-[#FDCE41]">
                          CLAIM NOW
                        </button>
                      </div>
                    )
                  )}
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </section> */}

      <ContactModal />

      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white bg-opacity-70 backdrop-blur-sm z-50 p-10 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end mb-5">
          <RxCross2
            className="text-gray-800 h-10 cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Menu Items */}
        <ul className="uppercase flex flex-col gap-y-5 text-sm font-semibold">
          <li>
            <a
              href="/"
              className={`${
                pathname == "" || pathname == undefined ? "text-[#A87C67]" : ""
              } `}
            >
              home
            </a>
          </li>
          <li>
            <a href="/#about-us">about us</a>
          </li>
          <li>
            <Link
              to="/services"
              className={`${pathname == "services" ? "text-[#A87C67]" : ""} `}
            >
              services
            </Link>
          </li>
          <li>
            {/* <a href="#">wedding planning</a> */}
            <Link
              to="/wedding-planning"
              className={`${
                pathname == "wedding-planning" ? "text-[#A87C67]" : ""
              } `}
            >
              wedding planning
            </Link>
          </li>
          <li>
            <a href="#">venues</a>
          </li>
          <li>
            <a href="/#partners">partner</a>
          </li>
          <li>
            <a href="/#contact-us">contact us</a>
          </li>
        </ul>
      </div>
      <div className="absolute w-full h-[230px] left-0 bottom-0 bg-gray-600 bg-opacity-20 text-white px-5 lg:px-28 py-4 md:py-12 z-10">
        <div className="w-4/5">
          <h4 className="mb-3 text-white">{heading}</h4>
          <p className="mb-4 text-white leading-5 md:leading-normal">{para}</p>
          {/* <button className=" uppercase py-3 text-sm px-3 rounded-xl font-semibold border-2 border-[#5c301c] bg-[#e6be8a] text-amber-900">
                  book your event
                </button> */}
          <a
            href="/#contact-us"
            className="relative uppercase py-3 text-xs md:text-sm px-6 rounded-xl font-semibold bg-[#FDCE41] text-gray-900 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            book your event
            {/* Animated border accent */}
            <span className="absolute inset-0 rounded-xl border-2 border-transparent pointer-events-none">
              <span
                className="absolute top-0 left-0 w-full h-full rounded-xl border-2 border-transparent
        border-t-white border-r-white border-b-white border-l-white
        bg-gradient-to-r from-white via-transparent to-white animate-border-move-header"
              ></span>
            </span>
            <style jsx>{`
              .animate-border-move-header {
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
                  white,
                  rgba(255, 255, 255, 0.5) 50%,
                  transparent 80%,
                  white 100%
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
          </a>
        </div>
      </div>
      <div className="fixed bottom-2 md:bottom-10 right-3 md:right-10 z-50">
        <a href="https://wa.me/7409979839?text=<message>" target="_blank">
          <img
            src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-png-pic-0.png"
            alt=""
            className="w-8 md:w-11"
          />
        </a>
      </div>
    </section>
  );
};

export default Header;
