import React from "react";

const Rating = ({ rating }) => {
  //   console.log(movie);
  return (
    <div className="flex items-center gap-2">
      <div className="w-20 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-3 ${
            rating?.average >= 8
              ? "bg-green-500"
              : rating?.average > 6
              ? "bg-yellow-600"
              : "bg-red-500"
          } rounded-full`}
          style={{ width: rating ? rating.average * 10 + "%" : "" }}
        ></div>
      </div>
      <span>{rating?.average ? rating.average : "N/A"}</span>
    </div>
  );
};

export default Rating;
