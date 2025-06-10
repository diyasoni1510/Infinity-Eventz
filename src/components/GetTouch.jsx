import React from "react";
import { IoMdCall } from "react-icons/io";

const GetTouch = () => {
  return (
    <section className="lg:px-28 lg:py-14 px-5 py-6 bg-[#F6EDE9]">
      <div className="text-center ">
        <h3 className="mb-7 text-gray-800">Get in touch</h3>
        <p className="text-gray-800">
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <div className="flex justify-center gap-5 mt-11">
          <a
            href="tel:8700244843"
            className="bg-[#F7743C] text-white flex gap-2 py-2 px-8 items-center justify-center rounded"
          >
            <IoMdCall size={18} /> <span>Conatct Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetTouch;
