import React from "react";
import { useNavigate } from "react-router-dom";

const ListItem = ({ item }) => {
  const navigate = useNavigate();
  const paragraph =
    item.show.summary.slice(3, item.show.summary.length - 4).split("<b>")[0] +
    item.show.summary.slice(3, item.show.summary.length - 4).split("<b>")[1];

  //   console.log(
  //     item.show.summary.slice(3, item.show.summary.length - 4).split("<b>")[1] + item.show.summary.slice(3, item.show.summary.length - 4).split("</b>")[0]
  //   );

  return (
    <div
      className="flex gap-3 items-center mt-10 cursor-pointer bg-cyan-700 hover:bg-cyan-800 p-7 rounded-xl transition-[2s]"
      //   key={key}
      onClick={() => navigate(`/${item.show.id}`)}
    >
      <div className="w-1/6">
        <div className="relative rounded-xl w-full overflow-hidden">
          <img
            src={item.show.image.original}
            alt={item.show.id}
            className="rounded-md hover:scale-110 transition-[0.4s]"
          />
          <div
            className={`absolute text-white ${
              item.show.status === "Running" ? "bg-green-400" : "bg-red-400"
            } top-2 right-2 p-1 rounded-md`}
          >
            {item.show.status}
          </div>
        </div>
      </div>
      <div className="w-5/6">
        <h1 className="text-3xl font-medium text-white">{item.show.name}</h1>
        <span
          className="text-white"
          dangerouslySetInnerHTML={{
            __html: item.show.summary.slice(0, 100) + "...",
          }}
        />
        <div className="flex gap-2 mt-2">
          {item.show.genres.map((item, key) => (
            <span className="bg-slate-200 p-1 rounded" key={key}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
