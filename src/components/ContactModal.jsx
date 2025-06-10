import React, { useEffect, useState } from "react";
import modalBg from "../images/contact-modal.webp";
import DatePicker from "react-datepicker";
import { RxCross2 } from "react-icons/rx";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import emailjs from "@emailjs/browser";

const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      date: null,
      destination: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().required("Required"),
      date: Yup.date().required("Required"),
      destination: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      try {
        setLoading(true);

        // Convert date -> wedding, destination -> city
        const payload = {
          ...values,
          wedding: values.date,
          city: values.destination,
        };

        // Remove original keys
        delete payload.date;
        delete payload.destination;

        const res = await axios.post(
          "https://api.infinityeventz.in/api/submit",
          payload
        );

        setSuccess(true);
        resetForm();
        setTimeout(() => {
          setShowModal(false);
        }, 4000);
      } catch (error) {
        if (error.response) {
          console.error("Server Error:", error.response.data);
          toast.error(error.response.data.message);
          if (error.response.data.errors) {
            setErrors(error.response.data.errors);
          }
        } else if (error.request) {
          console.error("Network Error:", error.request);
          toast.error("Network Error");
        } else {
          console.error("Error:", error.message);
          toast.error("Something went wrong!");
        }
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    },
  });

  return (
    <section
      className={`${
        showModal ? "fixed" : "hidden"
      } inset-0 flex items-center justify-center bg-black/50 z-50 overflow-auto`}
    >
      <div className="relative w-full mx-4 md:mx-0 md:w-3/5 rounded-lg shadow-xl overflow-visible p-6 md:p-10 z-50 mt-96 md:mt-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${modalBg})` }}
        ></div>

        {/* Close Button */}
        <div
          className="rounded-full absolute bg-white -top-3 -right-3 p-2 cursor-pointer z-[999]"
          onClick={() => setShowModal(false)}
        >
          <RxCross2 className="text-xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 bg-white rounded-3xl p-5 md:p-10 bg-opacity-80 text-center">
          <p className="text-[#A87C67]">Plan Your Dream Destination Wedding</p>
          <h5 className="text-gray-900 mb-1">
            Get up to 10% Off on Early Bookings
          </h5>
          <p className="text-gray-600">
            Limited period offer – make it unforgettable!
          </p>
          {/* <div className="grid grid-cols-3 gap-10 mt-8">
            <input
              type="text"
              className="col-span-1 w-full py-2 border-b border-gray-900 placeholder:text-gray-900 focus-visible:outline-0 bg-transparent"
              placeholder="Name*"
            />
            <input
              type="email"
              className="col-span-1 w-full py-2 border-b border-gray-900 placeholder:text-gray-900 focus-visible:outline-0 bg-transparent"
              placeholder="Email*"
            />
            <input
              type="tel"
              className="col-span-1 w-full py-2 border-b border-gray-900 placeholder:text-gray-900 focus-visible:outline-0 bg-transparent"
              placeholder="Phone*"
            />
            <DatePicker
              placeholderText="Wedding Date*"
              className="col-span-1 w-full py-2 border-b border-gray-900 placeholder:text-gray-900 focus-visible:outline-0 bg-transparent"
              dateFormat="yyyy-MM-dd"
            />
            <select
              name="Destination"
              id="Destination"
              className="col-span-1 w-full py-2 border-b border-gray-900 focus-visible:outline-0 bg-transparent"
            >
              <option value="">Select Destination*</option>
              <option value="goa">Goa</option>
              <option value="jaipur">Jaipur</option>
              <option value="jodhpur">Jodhpur</option>
              <option value="neemrana">Neemrana</option>
              <option value="jim-corbett">Jim Corbett</option>
              <option value="udaipur">Udaipur</option>
              <option value="kasol">Kasol</option>
              <option value="mussorie">Mussorie</option>
              <option value="indore">Indore</option>
              <option value="pune">Pune</option>
              <option value="shimla">Shimla</option>
              <option value="mt-abu">Mt. Abu</option>
            </select>
            <input
              type="text"
              className="col-span-1 w-full py-2 border-b border-gray-900 placeholder:text-gray-900 focus-visible:outline-0 bg-transparent"
              placeholder="Message*"
            />
          </div>

          <button className="relative uppercase py-3 text-xs md:text-sm px-6 rounded-xl font-semibold bg-[#e6be8a] text-amber-900 overflow-hidden mt-10">
            book your event
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
          </button> */}

          <form onSubmit={formik.handleSubmit} className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 text-left">
              <div className="col-span-1">
                <input
                  name="name"
                  type="text"
                  className="w-full py-2 border-b border-gray-900 bg-transparent placeholder:text-gray-900 focus-visible:outline-0"
                  placeholder="Name*"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-xs">{formik.errors.name}</p>
                )}
              </div>

              <div className="col-span-1">
                <input
                  name="email"
                  type="email"
                  className="w-full py-2 border-b border-gray-900 bg-transparent placeholder:text-gray-900 focus-visible:outline-0"
                  placeholder="Email*"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs">{formik.errors.email}</p>
                )}
              </div>

              <div className="col-span-1">
                <input
                  name="phone"
                  type="tel"
                  className="w-full py-2 border-b border-gray-900 bg-transparent placeholder:text-gray-900 focus-visible:outline-0"
                  placeholder="Phone*"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-xs">{formik.errors.phone}</p>
                )}
              </div>

              <div className="col-span-1">
                <DatePicker
                  selected={formik.values.date}
                  onChange={(date) => formik.setFieldValue("date", date)}
                  onBlur={formik.handleBlur}
                  placeholderText="Wedding Date*"
                  className="w-full py-2 border-b border-gray-900 bg-transparent placeholder:text-gray-900 focus-visible:outline-0"
                  dateFormat="yyyy-MM-dd"
                />
                {formik.touched.date && formik.errors.date && (
                  <p className="text-red-500 text-xs">{formik.errors.date}</p>
                )}
              </div>

              <div className="col-span-1">
                <select
                  name="destination"
                  className="w-full py-2 border-b border-gray-900 bg-transparent"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.destination}
                >
                  <option value="">Select Destination*</option>
                  <option value="goa">Goa</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="jodhpur">Jodhpur</option>
                  <option value="neemrana">Neemrana</option>
                  <option value="jim-corbett">Jim Corbett</option>
                  <option value="udaipur">Udaipur</option>
                  <option value="kasol">Kasol</option>
                  <option value="mussorie">Mussorie</option>
                  <option value="indore">Indore</option>
                  <option value="pune">Pune</option>
                  <option value="shimla">Shimla</option>
                  <option value="mt-abu">Mt. Abu</option>
                </select>
                {formik.touched.destination && formik.errors.destination && (
                  <p className="text-red-500 text-xs">
                    {formik.errors.destination}
                  </p>
                )}
              </div>

              <div className="col-span-1">
                <input
                  name="message"
                  type="text"
                  className="w-full py-2 border-b border-gray-900 bg-transparent placeholder:text-gray-900 focus-visible:outline-0"
                  placeholder="Message*"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-xs">
                    {formik.errors.message}
                  </p>
                )}
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center mt-10">
                <button
                  type="submit"
                  className="rounded-md uppercase text-sm  py-3 px-4 border-2 border-transparent bg-[#e6be8a] text-amber-900 border-[#a87c67] disabled:bg-opacity-50 flex gap-2 justify-center items-center"
                  disabled={loading}
                >
                  {loading && (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-200 animate-spin dark:text-[#78350f] fill-white"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                  )}
                  Booking...
                </button>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center mt-10">
                {success && (
                  <>
                    <p className="text-green-700">Thanks for contacting us!</p>
                    <p className="text-green-700 mb-2">
                      Our team will be in touch with you soon.
                    </p>
                  </>
                )}
                <button
                  type="submit"
                  className="relative uppercase py-3 text-sm px-6 rounded-xl font-semibold bg-[#e6be8a] text-amber-900 overflow-hidden"
                >
                  book consultation
                  {/* Gradient border animation */}
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
                </button>
              </div>
            )}
          </form>

          <div className="mt-3">
            <p
              className="text-[#A87C67] cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              No thanks, I’m not interested right now
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default ContactModal;
