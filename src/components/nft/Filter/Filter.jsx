import React, { useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);

  return (
    <div className="py-16 w-full">
      <div className="w-[80%] max-md:w-[90%] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-16 gap-8">
        <div className="flex flex-wrap gap-4 md:gap-8">
          {["NFTs", "Arts", "Musics", "Sports", "Photography"].map((cat) => (
            <button
              key={cat}
              className="border-none outline-none py-4 px-6 max-md:py-2 max-md:px-4 rounded-full border border-slate-900 transition-all duration-300 text-lg max-md:text-base cursor-pointer bg-slate-900 text-slate-100 hover:border-slate-100 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className="border border-slate-100 py-4 px-8 rounded-full text-slate-100 shadow-lg shadow-indigo-500/20 cursor-pointer flex items-center gap-4 hover:bg-slate-800 transition-colors"
          onClick={() => setFilter(!filter)}
        >
          <FaFilter />
          <span>Filter</span>
          {filter ? <FaAngleDown /> : <FaAngleUp />}
        </div>
      </div>

      {filter && (
        <div className="w-[80%] max-md:w-[90%] mx-auto flex flex-wrap py-8 border-t border-slate-400/50 gap-2 animate-fade-in">
          <div className="p-4">
            <div className="bg-slate-100 py-2 px-4 rounded-full text-slate-900 cursor-pointer flex items-center gap-2">
              <FaWallet /> <span>10 ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>

          <div className="p-4">
            <div
              className="border border-slate-100 text-slate-100 py-2 px-4 rounded-full cursor-pointer flex items-center gap-2 hover:bg-slate-800 transition-colors"
              onClick={() => setImage(!image)}
            >
              <FaImages /> <small>Images</small>
              {image ? (
                <AiFillCloseCircle />
              ) : (
                <TiTick className="text-green-400" />
              )}
            </div>
          </div>

          <div className="p-4">
            <div
              className="border border-slate-100 text-slate-100 py-2 px-4 rounded-full cursor-pointer flex items-center gap-2 hover:bg-slate-800 transition-colors"
              onClick={() => setVideo(!video)}
            >
              <FaVideo /> <small>Videos</small>
              {video ? (
                <AiFillCloseCircle />
              ) : (
                <TiTick className="text-green-400" />
              )}
            </div>
          </div>

          <div className="p-4">
            <div
              className="border border-slate-100 text-slate-100 py-2 px-4 rounded-full cursor-pointer flex items-center gap-2 hover:bg-slate-800 transition-colors"
              onClick={() => setMusic(!music)}
            >
              <FaMusic /> <small>Musics</small>
              {music ? (
                <AiFillCloseCircle />
              ) : (
                <TiTick className="text-green-400" />
              )}
            </div>
          </div>

          <div className="p-4">
            <div className="bg-slate-100 py-2 px-4 rounded-full text-slate-900 cursor-pointer flex items-center gap-2">
              <FaUserAlt /> <span>Verified</span>
              <MdVerified className="text-indigo-500" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
