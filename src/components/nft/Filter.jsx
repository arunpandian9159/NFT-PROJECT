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
              className="border-none outline-none py-4 px-6 max-md:py-2 max-md:px-4 rounded-full transition-all duration-300 text-lg max-md:text-base cursor-pointer bg-gray-900 text-white hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 shadow-[4px_4px_8px_rgba(0,0,0,0.5),-2px_-2px_6px_rgba(50,50,50,0.3)] hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className="border border-cyan-400/30 py-4 px-8 rounded-full text-white cursor-pointer flex items-center gap-4 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 shadow-[4px_4px_8px_rgba(0,0,0,0.5),-2px_-2px_6px_rgba(50,50,50,0.3)] hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          onClick={() => setFilter(!filter)}
        >
          <FaFilter className="text-cyan-400" />
          <span>Filter</span>
          {filter ? <FaAngleDown /> : <FaAngleUp />}
        </div>
      </div>

      {filter && (
        <div className="w-[80%] max-md:w-[90%] mx-auto flex flex-wrap py-8 border-t border-cyan-400/20 gap-2 animate-fade-in">
          <div className="p-4">
            <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 py-2 px-4 rounded-full text-white cursor-pointer flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <FaWallet /> <span>10 ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>

          <div className="p-4">
            <div
              className="border border-cyan-400/30 text-white py-2 px-4 rounded-full cursor-pointer flex items-center gap-2 hover:bg-cyan-400/10 hover:border-cyan-400 transition-colors"
              onClick={() => setImage(!image)}
            >
              <FaImages className="text-cyan-400" /> <small>Images</small>
              {image ? (
                <AiFillCloseCircle />
              ) : (
                <TiTick className="text-cyan-400" />
              )}
            </div>
          </div>

          <div className="p-4">
            <div
              className="border border-cyan-400/30 text-white py-2 px-4 rounded-full cursor-pointer flex items-center gap-2 hover:bg-cyan-400/10 hover:border-cyan-400 transition-colors"
              onClick={() => setVideo(!video)}
            >
              <FaVideo className="text-cyan-400" /> <small>Videos</small>
              {video ? (
                <AiFillCloseCircle />
              ) : (
                <TiTick className="text-cyan-400" />
              )}
            </div>
          </div>

          <div className="p-4">
            <div
              className="border border-cyan-400/30 text-white py-2 px-4 rounded-full cursor-pointer flex items-center gap-2 hover:bg-cyan-400/10 hover:border-cyan-400 transition-colors"
              onClick={() => setMusic(!music)}
            >
              <FaMusic className="text-cyan-400" /> <small>Musics</small>
              {music ? (
                <AiFillCloseCircle />
              ) : (
                <TiTick className="text-cyan-400" />
              )}
            </div>
          </div>

          <div className="p-4">
            <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 py-2 px-4 rounded-full text-white cursor-pointer flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <FaUserAlt /> <span>Verified</span>
              <MdVerified className="text-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
