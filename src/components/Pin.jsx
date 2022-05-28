import React, { useState } from "react";
import { MdDownloadForOffline } from "react-icons/md";

const Pin = ({ pin }) => {
  const [postHovered, setPostHovered] = useState(false);

  const { copyright, date, url, explanation, title } = pin;

  return (
    <div className="m-2">
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        id="large"
      >
        {url && (
          <img className="rounded-lg w-full " src={url} alt="user-post" />
        )}
        {postHovered && (
          <div
            className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
            style={{ height: "100%" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href={`${url}?dl=`}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="bg-white w-9 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                >
                  <MdDownloadForOffline />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="details">
        <p className="font-semibold capitalize">{copyright}</p>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{explanation}</p>
      </div>
    </div>
  );
};

export default Pin;
