import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import axios from "axios";
import Modal from "../../components/Modal/Modal";

const Details = () => {
  const location = useLocation();

  const [movie, setMovie] = useState({});
  const [details, setDetails] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com${location.pathname}`)
      .then(({ data }) => setMovie(data));
  }, [location]);

  return (
    <>
      {movie ? (
        <div className="w-full h-screen bg-slate-200 mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 p-8">
              <h1 className="text-4xl font-light mb-4">{movie.name}</h1>
              <div className="flex flex-col md:flex-row items-start gap-5">
                <img
                  src={movie.image?.medium}
                  className="mx-auto md:mx-0"
                  alt={movie.name}
                />
                <p
                  className="text-xl"
                  dangerouslySetInnerHTML={{
                    __html: movie.summary,
                  }}
                />
              </div>
            </div>
            <div className="w-full flex justify-center lg:w-1/3">
              <div className="w-10/12 p-8 rounded-lg mt-8 bg-slate-500 text-white">
                <div className="flex items-center justify-between">
                  <div></div>
                  <Rating rating={movie.rating} />
                </div>
                <ul className="mt-5">
                  <li className="mt-4">
                    <span className="font-semibold">Network</span>:{" "}
                    <a
                      href={movie.network?.officialSite}
                      target="_blank"
                      className="underline hover:no-underline"
                      rel="noreferrer"
                    >
                      {movie.network ? movie.network.name : "null"}
                    </a>{" "}
                    {movie.network && `(${movie.network?.country.code})`}
                  </li>

                  <li className="mt-4">
                    <span className="font-semibold">Schedule</span>:{" "}
                    {movie.schedule?.days?.map((item) => (
                      <>{item}, </>
                    ))}{" "}
                    at {movie.schedule?.time}
                  </li>

                  <li className="mt-4">
                    <span className="font-semibold">Status</span>:{" "}
                    {movie.status}
                  </li>

                  <li className="mt-4">
                    <span className="font-semibold">Show Type</span>:{" "}
                    {movie.type}
                  </li>

                  <li className="my-4">
                    <span className="font-semibold">Genres</span>:{" "}
                    {movie.genres?.map((item, key) => (
                      <span key={key}>
                        {" "}
                        {item} {key !== movie.genres?.length - 1 && "|"}
                      </span>
                    ))}
                  </li>
                </ul>

                {/* <a
                  href={movie?._links?.previousepisode?.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {"<<"} Previous Episode
                </a> */}
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              className="bg-blue-700 text-white px-5 py-2 rounded-full disabled:bg-purple-400 disabled:cursor-not-allowed focus:outline-blue-700 focus:outline-1"
              onClick={() => setDetails(true)}
              disabled={movie.status === "Ended"}
            >
              Book a Ticket
            </button>
          </div>
        </div>
      ) : (
        <>Loading...</>
      )}

      {details && <Modal movie={movie} setDetails={setDetails} />}
    </>
  );
};

export default Details;
