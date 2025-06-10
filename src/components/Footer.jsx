import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo_infinity.png";

const Footer = () => {
  return (
    <section className="bg-[#3C1A0A] px-5 lg:px-28 pt-14 pb-5">
      <div className="grid lg:grid-cols-2 gap-y-5 lg:gap-y-0">
        <div className="col-span-1">
          <div className="w-full md:w-3/5 mx-auto lg:mx-0">
            <img src={logo} alt="" width={150} />
            <p className="mt-5 text-white">
              One of the best event management companies in Delhi & NCR that
              provide services for wedding planning, corporate event management,
              brand promotions, and entertainment in fact one-stop-solutions to
              all your event management needs in Delhi & NCR. We are cost
              effective.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex gap-10 md:gap-32 text-white justify-center lg:justify-end">
            <div className="flex-shrink-0">
              <p className="text-lg underline underline-offset-2 text-white mb-3">
                Quick Links
              </p>
              <ul className="text-lg flex flex-col gap-2 ">
                <li>
                  <a href="/#about-us">About</a>
                </li>
                <li>
                  {/* <a href="/">Services</a> */}
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  {/* <a href="#">Wedding Planning</a> */}
                  <Link to="/wedding-planning">Wedding Planning</Link>
                </li>
                <li>
                  <a href="#">Venues</a>
                </li>
                <li>
                  <a href="/#partners">Partner</a>
                </li>
                {/* <li>
                  <a href="#">Career</a>
                </li> */}
                <li>
                  <a href="/#contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg underline underline-offset-2 text-white mb-3">
                Address
              </p>
              <div className="flex gap-5 flex-col">
                <div>
                  <p className=" text-gray-200 mb-3 uppercase text-sm">
                    head office
                  </p>
                  <p className="text-white flex flex-col">
                    <span>L 293, Shastri nagar, Meerut</span>
                    <span>Uttar Pradesh:-250004</span>
                  </p>
                </div>
                <div>
                  <p className=" text-gray-200 mb-3 uppercase text-sm">
                    corporate office
                  </p>
                  <p className="text-white flex flex-col">
                    <span>Unitech Cyber Park,</span>
                    <span>Sector- 39,Gurgaon</span>
                    <span>Haryana:-122003</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <a href="https://www.facebook.com/share/18gmA9oeF2/?mibextid=wwXIfr">
                  <FiFacebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/infinityyeventz?igsh=Yjk2NnRwZXh6cDAw&utm_source=qr"
                  target="_blank"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-infinity-eventz/"
                  target="_blank"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-20 flex text-gray-200 text-sm">
        {/* <a href="#" className="flex-shrink-0">
          Privacy Policy
        </a> */}
        <p className="text-gray-200 w-full text-center ">
          2017 © All rights reserved by
          <span> </span> <span className="underline">Infinity Eventz</span>.
        </p>
      </div>
    </section>
  );
};

export default Footer;
