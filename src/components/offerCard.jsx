import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

export default function OfferCard() {
  const [flipped, setFlipped] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const [offers, setOffers] = useState();
  // const [selectedOffer, setSelectedOffer] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 4000); // 2 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    const getOffers = async () => {
      try {
        const response = await axios.get(
          "https://api.infinityeventz.in/api/offers"
        );
        console.log(response);
        setOffers(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOffers();
  }, []);

  const claimNow = async (offerId) => {
    localStorage.setItem("offer", offerId);
    setTimeout(() => {
      const contactSection = document.getElementById("contact-us");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      {showCard && offers?.length >= 0 && (
        <div className="w-60 h-56 perspective fixed top-24 right-11 z-20">
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* FRONT */}
            <div className="absolute w-full h-full backface-hidden bg-gradient-to-tr from-blue-200 to-blue-50 bg-opacity-60 text-gray-900 flex flex-col items-center justify-center text-center px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-lg border ">
              <p className="mb-2 text-amber-900">Exciting offer for you 🎉</p>
              <div
                className="absolute cursor-pointer -top-2 z-50 -right-2 bg-white rounded-full p-2 backdrop-blur-md bg-opacity-85 shadow-md"
                onClick={() => setShowCard(false)}
              >
                <RxCross2 />
              </div>
              <p className="text-base font-semibold leading-snug">
                {offers[0]?.title && (
                  <>
                    <span className="text-blue-600">💍 {offers[0].title}</span>
                    {/* <br />
                    <span className="text-blue-600">
                      {offers[0].description}
                    </span> */}
                  </>
                )}
              </p>
              <button
                className="bg-gradient-to-tr from-amber-600 to-amber-900 mt-5 text-sm rounded p-2 text-white border border-white"
                onClick={() => {
                  claimNow(offers[0]._id);
                }}
              >
                Claim now
              </button>
            </div>

            {/* BACK */}
            <div
              className="absolute w-full h-full backface-hidden bg-gradient-to-tr from-yellow-200 to-yellow-50 bg-opacity-60 flex flex-col items-center justify-center text-center px-4 py-3 rounded-2xl shadow-2xl"
              style={{ transform: "rotateY(180deg)" }}
            >
              <p className="mb-2 text-amber-900">Exciting offer for you 🎉</p>

              <div
                className="absolute cursor-pointer -top-2 z-50 -right-2 bg-white rounded-full p-2 backdrop-blur-md bg-opacity-85 shadow-md"
                onClick={() => setShowCard(false)}
              >
                <RxCross2 />
              </div>
              <p className="text-base font-semibold leading-snug">
                {offers[1]?.title && (
                  <>
                    <span className="text-yellow-600">
                      ✨ {offers[1].title}
                    </span>
                    {/* <br />
                    <span className="text-yellow-500">
                      {offers[1].description}
                    </span> */}
                  </>
                )}
              </p>
              <button
                className="bg-gradient-to-tr from-amber-600 to-amber-900 mt-5 text-sm rounded p-2 text-white border border-white"
                onClick={() => {
                  claimNow(offers[1]._id);
                }}
              >
                Claim now
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
