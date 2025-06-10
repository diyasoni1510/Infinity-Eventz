import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonials = [
  {
    name: "Ashwani Chaudhary",
    city: "Jaipur",
    rating: 4.3,
    text: `Infinity Eventz made our dream wedding come true! The team was professional, creative, and attentive to every detail. From venue selection to entertainment, they handled everything seamlessly. The Sufi night was the highlight—our guests loved it! Highly recommend them for a hassle-free experience.`,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Ashwani Chaudhary",
    city: "Jaipur",
    rating: 4.3,
    text: `Our destination wedding was nothing short of magical, thanks to Infinity Eventz. The team understood our vision and executed it flawlessly. Their decor, and event management skills were top-notch. Guests still talk about the unforgettable evening. We couldn't have asked for a better team!`,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Ashwani Chaudhary",
    city: "Jaipur",
    rating: 4.3,
    text: `Infinity Eventz took away all the stress of wedding planning. Their expertise, attention to detail, and creative ideas made our event truly unique. The live performances were breathtaking, and every aspect was executed with perfection. Highly recommend them for weddings or any big occasion!`,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Ashwani Chaudhary",
    city: "Jaipur",
    rating: 4.3,
    text: `We had our wedding in Goa with Infinity Eventz, and it was absolutely magical. They took care of every little detail—decor, logistics, artist management, and food. Their commitment to delivering the best is unmatched. Our guests still talk about the beautiful beach ceremony!`,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Ashwani Chaudhary",
    city: "Jaipur",
    rating: 4.3,
    text: `Infinity Eventz made our destination wedding in Jaipur a dream come true. From venue selection to decor and seamless coordination, they handled everything with perfection. Their team was professional, friendly, and creative. Highly recommended for anyone planning a destination wedding—they truly know how to create magic!`,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Ashwani Chaudhary",
    city: "Jaipur",
    rating: 4.3,
    text: `We had an unforgettable wedding, all thanks to Infinity Eventz. Their team was exceptional—every detail, from decor to entertainment, was handled beautifully. They made us feel special and took care of everything so we could enjoy our big day. Highly recommended for any event!`,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  // Add more testimonials as needed
];

export default function TestimonialSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#F6EDE9] py-16 px-5 md:px-24">
      <div className="text-center mb-12">
        <h2 className=" mb-3">What Our Happy Clients Say About Us</h2>
        <p className="text-gray-600">
          Real stories from clients who trusted Infinity Eventz for
          unforgettable celebrations and seamless event execution.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Navigation]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <div className="text-red-400 flex items-center gap-1">
                  <FaInstagram />
                  <span className="text-sm text-gray-500">Instagram</span>
                </div>
                {/* <div className="text-sm font-semibold">
                  {testimonial.rating}{" "}
                  <span className="text-yellow-400">★</span>
                </div> */}
              </div>
              <p className="text-gray-700 text-sm mb-6">{testimonial.text}</p>
              {/* <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                </div>
                <p className="text-sm font-bold text-gray-700">
                  {testimonial.city}
                </p>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons below */}
      <div className="mt-10 flex justify-center gap-4">
        <button
          ref={prevRef}
          className="border border-black rounded p-2 hover:bg-gray-200 transition"
        >
          <IoIosArrowBack size={20} />
        </button>
        <button
          ref={nextRef}
          className="border border-black rounded p-2 hover:bg-gray-200 transition"
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </section>
  );
}
