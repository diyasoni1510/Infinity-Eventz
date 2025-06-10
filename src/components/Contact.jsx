import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import party from "../images/party.jpg";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([
    "Goa",
    "Jaipur",
    "Jodhpur",
    "Agra",
    "Mussorie",
    "Lavasa",
  ]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      city: "Select City*",
      wedding: null,
      message: "",
      event: "Select Event*",
      getNotify: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email")
        .required("Please enter your  email"),
      phone: Yup.string().required("Please enter your  phone"),
      city: Yup.string()
        .notOneOf(["Select City*", ""], "Please select your city")
        .required("Please select your city"),
      event: Yup.string()
        .notOneOf(["Select Event*", ""], "Please select your event")
        .required("Please select your event"),
      wedding: Yup.date()
        .nullable()
        .required("Please enter your  wedding date"),
      message: Yup.string().required("Please enter your  message"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        setLoading(true);
        const ifOffer = localStorage.getItem("offer");
        if (ifOffer !== "") {
          values.offer = ifOffer;
        }
        const res = await axios.post(
          "https://api.infinityeventz.in/api/submit",
          values
        );

        values.name = "";
        values.email = "";
        values.phone = "";
        values.city = "Select City*";
        values.wedding = null;
        values.message = "";
        values.event = "Select Event*";
        values.getNotify = false;

        setLoading(false);
        setSuccess(true);
        // navigate("/thank-you");
      } catch (error) {
        setLoading(false);
        if (error.response) {
          console.error("Server Error:", error.response.data);
          toast.error(error.response.data.message);
          if (error.response.data.errors) {
            setErrors(error.response.data.errors);
          }
        } else if (error.request) {
          setLoading(false);
          toast.error("Network Error");

          console.error("Network Error:", error.request);
        } else {
          setLoading(false);
          console.error("Error:", error.message);
        }
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="lg:px-28 lg:py-14 px-5 py-6" id="contact-us">
      <div className="text-center">
        <h2 className="uppercase mb-3">Plan with Ease</h2>
        <p>
          Turn your dream wedding into a breathtaking celebration at handpicked
          luxury venues. Share your details, and let Infinity Eventz curate the
          magic at stunning destinations across the globe.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-3 gap-x-10 gap-y-12 mt-10">
          {[
            { name: "name", type: "text", placeholder: "Name*" },
            { name: "email", type: "email", placeholder: "Email*" },
            { name: "phone", type: "tel", placeholder: "Phone*" },
          ].map((field) => (
            <div className="col-span-3 md:col-span-1" key={field.name}>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field.name]}
                className={`w-full  py-2 border-b placeholder:text-gray-800 focus-visible:outline-0 ${
                  formik.touched[field.name] && formik.errors[field.name]
                    ? "border-red-500"
                    : "focus-visible:border-amber-600"
                }`}
              />
              {formik.touched[field.name] && formik.errors[field.name] && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors[field.name]}
                </div>
              )}
            </div>
          ))}

          <div className="col-span-3 md:col-span-1">
            <select
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full  py-2 border-b  focus-visible:outline-0 bg-transparent ${
                formik.touched.city && formik.errors.city
                  ? "border-red-500"
                  : "focus-visible:border-amber-600"
              } ${formik.values.city === "Select City*" && "text-gray-800"}`}
            >
              <option value="">Select City*</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {formik.touched.city && formik.errors.city && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.city}
              </div>
            )}
          </div>

          {/* Wedding Date */}
          <div className="col-span-3 md:col-span-1">
            <DatePicker
              selected={formik.values.wedding}
              onChange={(date) => formik.setFieldValue("wedding", date)}
              onBlur={formik.handleBlur}
              placeholderText="Wedding Date*"
              className={`w-full  py-2 border-b placeholder:text-gray-800  focus-visible:outline-0 ${
                formik.touched.wedding && formik.errors.wedding
                  ? "border-red-500"
                  : "focus-visible:border-amber-600"
              }`}
              dateFormat="yyyy-MM-dd"
            />
            {formik.touched.wedding && formik.errors.wedding && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.wedding}
              </div>
            )}
          </div>
          <div className="col-span-3 md:col-span-1">
            <select
              name="event"
              value={formik.values.event}
              onChange={(e) => {
                formik.setFieldValue("event", e.target.value);
              }}
              onBlur={formik.handleBlur}
              className={`w-full  py-2 border-b  focus-visible:outline-0 bg-transparent ${
                formik.touched.event && formik.errors.event
                  ? "border-red-500"
                  : "focus-visible:border-amber-600"
              }
                  ${formik.values.event === "Select Event*" && "text-gray-800"}
                  `}
            >
              <option value="">Select Event*</option>
              <option value="Corporate Event Management">
                Corporate Event Management
              </option>
              <option value="Brand Promotions">Brand Promotions</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Social Events">Social Events</option>
              <option value="Wedding Planning">Wedding Planning</option>
            </select>
            {formik.touched.event && formik.errors.event && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.event}
              </div>
            )}
          </div>

          {/* Message */}
          <div className="col-span-3">
            <textarea
              name="message"
              placeholder="Message*"
              rows={3}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`w-full  py-2 border-b placeholder:text-gray-800 focus-visible:outline-0 ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "focus-visible:border-amber-600"
              }`}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </div>
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
      <Toaster />
    </section>
  );
};

export default Contact;
