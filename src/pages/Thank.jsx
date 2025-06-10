import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
const Thank = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="py-10 px-5 md:p-20 h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-400 text-center mb-3">
          Thank you for getting in touch!
        </h1>
        <p className="text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          neque.
        </p>
        <button
          className="mt-8 px-10 py-3 uppercase bg-gradient-to-tr from-amber-900 to bg-amber-700 text-white"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </>
  );
};

export default Thank;
