import React, { useState } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

import DaysComponent from "./DaysComponents/DaysComponents";
import images from "@/images";

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const CardArray = [
    { background: images.creatorbackground1, user: images.user1 },
    { background: images.creatorbackground2, user: images.user2 },
    { background: images.creatorbackground3, user: images.user3 },
    { background: images.creatorbackground4, user: images.user4 },
    { background: images.creatorbackground5, user: images.user5 },
    { background: images.creatorbackground6, user: images.user6 },
    { background: images.creatorbackground7, user: images.user7 },
    { background: images.creatorbackground8, user: images.user8 },
  ];

  const newsArray = [
    { background: images.creatorbackground3, user: images.user3 },
    { background: images.creatorbackground4, user: images.user4 },
    { background: images.creatorbackground5, user: images.user5 },
    { background: images.creatorbackground6, user: images.user6 },
    { background: images.creatorbackground1, user: images.user1 },
    { background: images.creatorbackground2, user: images.user2 },
  ];

  const followingArray = [
    { background: images.creatorbackground1, user: images.user1 },
    { background: images.creatorbackground2, user: images.user2 },
    { background: images.creatorbackground3, user: images.user3 },
    { background: images.creatorbackground4, user: images.user4 },
    { background: images.creatorbackground5, user: images.user5 },
    { background: images.creatorbackground6, user: images.user6 },
    { background: images.creatorbackground7, user: images.user7 },
    { background: images.creatorbackground8, user: images.user8 },
  ];

  const openPopular = () => {
    setPopular(true);
    setFollowing(false);
    setNews(false);
  };

  const openFollower = () => {
    setPopular(false);
    setFollowing(true);
    setNews(false);
  };

  const openNews = () => {
    setPopular(false);
    setFollowing(false);
    setNews(true);
  };

  return (
    <div className="w-full py-16 mb-16">
      <div className="w-[90%] max-w-[600px] mx-auto pb-16 text-center">
        <h2 className="text-3xl md:text-4xl mb-8 font-bold gradient-text">
          Top List Creators
        </h2>
        <div>
          <div className="bg-slate-800 p-2 rounded-xl flex justify-center gap-2 items-center text-base shadow-md shadow-indigo-500/10 border border-indigo-500/10 flex-wrap">
            <button
              onClick={() => openPopular()}
              className={`flex items-center gap-2 py-3 px-6 max-md:py-2 max-md:px-4 max-md:text-sm border-none rounded-xl cursor-pointer transition-all duration-300 font-semibold ${
                popular
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:-translate-y-0.5 hover:shadow-lg"
                  : "bg-transparent text-slate-400 hover:text-slate-100"
              }`}
            >
              <BsFillAlarmFill /> 24 hours
            </button>
            <button
              onClick={() => openFollower()}
              className={`flex items-center gap-2 py-3 px-6 max-md:py-2 max-md:px-4 max-md:text-sm border-none rounded-xl cursor-pointer transition-all duration-300 font-semibold ${
                following
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:-translate-y-0.5 hover:shadow-lg"
                  : "bg-transparent text-slate-400 hover:text-slate-100"
              }`}
            >
              <BsCalendar3 /> 7 days
            </button>
            <button
              onClick={() => openNews()}
              className={`flex items-center gap-2 py-3 px-6 max-md:py-2 max-md:px-4 max-md:text-sm border-none rounded-xl cursor-pointer transition-all duration-300 font-semibold ${
                news
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:-translate-y-0.5 hover:shadow-lg"
                  : "bg-transparent text-slate-400 hover:text-slate-100"
              }`}
            >
              <BsFillCalendarDateFill /> 30 days
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
          {CardArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
          {followingArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
          {newsArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
