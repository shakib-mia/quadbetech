import React from "react";
import Input from "../Input/Input";

const Modal = ({ movie, setDetails }) => {
  return (
    <div className="fixed top-0 right-0 h-screen w-screen backdrop-blur">
      <div className="relative">
        <button
          className="absolute right-10 top-10 text-3xl"
          onClick={() => setDetails(false)}
        >
          &times;
        </button>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <form className="bg-white w-1/2 p-5">
          <h2 className="text-center text-3xl mb-4">{movie?.name}</h2>
          <div className="grid grid-cols-2 gap-5">
            <Input label="Name" id="name" placeholder="Enter Your Name" />
            <Input label="Email" id="email" placeholder="Enter Your Email" />
            <Input
              label="Phone Number"
              id="phone-number"
              placeholder="Enter Your Phone Number"
            />

            <Input
              label="Network"
              value={movie.network?.name}
              disabled={true}
            />

            <Input
              label="Schedule"
              value={movie.schedule?.time + ", " + movie.schedule.days[0]}
              disabled={true}
            />
          </div>
          <div className="text-center mt-7">
            <input
              type="submit"
              value="Submit"
              className="bg-blue-700 text-white px-5 py-2 rounded-full cursor-pointer disabled:bg-purple-400 disabled:cursor-not-allowed"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
