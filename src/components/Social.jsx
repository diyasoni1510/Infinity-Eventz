import { FaInstagram } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import sociallink1 from "../images/sociallink1.webp";
import sociallink2 from "../images/sociallink2.webp";
import sociallink3 from "../images/sociallink3.webp";
import sociallink4 from "../images/sociallink4.webp";
import sociallink5 from "../images/sociallink5.webp";
import sociallink6 from "../images/sociallink6.webp";
import socailoverlay from "../images/social-overlay.png";

const socialLinks = [
  {
    image: sociallink1,
    href: "https://www.instagram.com/infinityyeventz?igsh=Yjk2NnRwZXh6cDAw&utm_source=qr",
    label: "Instagram",
  },
  {
    image: sociallink2,
    href: "https://www.instagram.com/infinityyeventz?igsh=Yjk2NnRwZXh6cDAw&utm_source=qr",
    label: "Instagram",
  },
  {
    image: sociallink3,
    href: "https://www.instagram.com/infinityyeventz?igsh=Yjk2NnRwZXh6cDAw&utm_source=qr",
    label: "Instagram",
  },
  {
    image: sociallink4,
    href: "https://www.instagram.com/infinityyeventz?igsh=Yjk2NnRwZXh6cDAw&utm_source=qr",
    label: "Instagram",
  },
  {
    image: sociallink5,
    href: "https://www.instagram.com/infinityyeventz?igsh=Yjk2NnRwZXh6cDAw&utm_source=qr",
    label: "Instagram",
  },
  {
    image: sociallink6,
    href: "https://www.instagram.com/infinityyeventz?igsh=Yjk2NnRwZXh6cDAw&utm_source=qr",
    label: "Instagram",
  },
];

const SocialLinks = () => {
  return (
    <section className="lg:px-28 lg:py-14 px-5 py-6">
      <div className="mb-5 text-center">
        <h2 className="uppercase mb-3">Our Social Links</h2>
        <p>
          Connect with seasoned wedding professionals who specialize in blending
          luxury with rich cultural traditions. From personalized planning to
          flawless execution, we ensure your celebration reflects your story,
          style, and values in every elegant detail
        </p>
      </div>

      {/* Grid view for md+ */}
      <div className="hidden md:grid grid-cols-3 gap-5 ">
        {socialLinks.map((link, i) => (
          <div key={i} className="col-span-1 relative">
            <img
              src={link.image}
              alt={`social-${i}`}
              className="h-[450px] w-full object-cover"
            />
            <div className="absolute -top-[1px] -right-2">
              <img src={socailoverlay} alt="" />
              <a
                href={link.href}
                className="absolute top-10 right-[20px] flex flex-col justify-center items-center"
              >
                <div className="border p-2 rounded-full border-[#5B250C]">
                  <FaInstagram color="#5B250C" />
                </div>
                <p>{link.label}</p>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Swiper for mobile */}
      <div className="md:hidden mt-10 social-swiper">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {socialLinks.map((link, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <img
                  src={link.image}
                  alt={`social-${i}`}
                  className="h-[450px] w-full object-cover"
                />
                <div className="absolute -top-[1px] -right-2">
                  <img src={socailoverlay} alt="" />
                  <a
                    href={link.href}
                    className="absolute top-10 right-[20px] flex flex-col justify-center items-center"
                  >
                    <div className="border p-2 rounded-full border-[#5B250C]">
                      <FaInstagram color="#5B250C" />
                    </div>
                    <p>{link.label}</p>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SocialLinks;
