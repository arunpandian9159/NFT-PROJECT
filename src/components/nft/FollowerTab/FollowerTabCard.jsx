import React, { useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import images from "@/images";

const FollowerTabCard = ({ i, el }) => {
  const [following, setFollowing] = useState(false);

  const followMe = () => {
    setFollowing(!following);
  };

  return (
    <div className="relative">
      <div className="absolute z-50 bg-slate-100 text-slate-900 m-4 text-sm py-1 px-3 rounded-full border border-slate-100 transition-all duration-300 hover:bg-slate-900 hover:text-slate-100 cursor-pointer">
        <p>
          #{i + 1} <span>🥇</span>
        </p>
      </div>

      <div className="grid grid-cols-4 bg-slate-900 rounded-2xl transition-all duration-200 cursor-pointer relative hover:shadow-lg hover:shadow-indigo-500/20">
        <div className="col-span-4">
          <Image
            className="rounded-2xl w-full"
            src={el.background || images[`creatorbackground${i + 1}`]}
            alt="profile background"
            width={500}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="col-span-4 text-center -mt-8 relative z-10">
          <div className="relative inline-block">
            <div className="absolute w-20 h-20 bg-slate-900 rounded-full -top-2 left-1/2 -translate-x-1/2 -z-10"></div>
            <Image
              className="rounded-full p-1"
              alt="profile picture"
              width={50}
              height={50}
              src={el.user || images[`user${i + 1}`]}
            />
          </div>
        </div>

        <div className="col-span-4 flex flex-wrap items-center justify-between -mt-2 px-4 pb-4 gap-4">
          <div>
            <h4 className="text-base font-semibold flex items-center gap-1">
              {el.seller?.slice(0, 9) || "Unknown"}
              <span className="text-indigo-400">
                <MdVerified />
              </span>
            </h4>
            <p className="text-slate-400">{el.total || 0} ETH</p>
          </div>

          <div>
            <a
              onClick={() => followMe()}
              className={`py-3 px-6 rounded-full border cursor-pointer transition-all duration-300 inline-flex items-center gap-2 ${
                following
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 border-indigo-500 text-white"
                  : "bg-slate-700 border-slate-700 text-slate-100 hover:bg-transparent"
              }`}
            >
              {following ? (
                <>
                  Follow <TiTick className="text-green-400" />
                </>
              ) : (
                "Following"
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
