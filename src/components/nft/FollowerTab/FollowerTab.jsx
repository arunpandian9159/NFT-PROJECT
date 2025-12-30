import React, { useState } from "react";
import { RiUserFollowFill, RiAwardLine } from "react-icons/ri";

import FollowerTabCard from "./FollowerTabCard";
import images from "@/images";

const FollowerTab = ({ TopCreator }) => {
  const FollowingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
  ];

  const NewsArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
  ];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

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
    <div className="w-full py-24 relative pb-52">
      <div className="w-[30rem] max-md:w-[90%] mx-auto pb-24 text-center">
        <h2 className="text-4xl max-md:text-3xl mb-16 font-bold gradient-text">
          Top Creators List..
        </h2>
        <div>
          <div className="bg-slate-900 py-2 px-4 rounded-full flex flex-wrap justify-around gap-4 items-center text-lg shadow-lg shadow-indigo-500/20">
            <button
              onClick={() => openPopular()}
              className={`flex items-center gap-2 py-4 px-6 max-md:p-2 max-md:text-base border-none rounded-full cursor-pointer transition-all duration-300 ${
                popular
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                  : "bg-slate-100 text-slate-900 hover:bg-transparent hover:text-slate-100 border border-slate-100"
              }`}
            >
              <RiUserFollowFill /> Popular
            </button>
            <button
              onClick={() => openFollower()}
              className={`flex items-center gap-2 py-4 px-6 max-md:p-2 max-md:text-base border-none rounded-full cursor-pointer transition-all duration-300 ${
                following
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                  : "bg-slate-100 text-slate-900 hover:bg-transparent hover:text-slate-100 border border-slate-100"
              }`}
            >
              <RiUserFollowFill /> Following
            </button>
            <button
              onClick={() => openNews()}
              className={`flex items-center gap-2 py-4 px-6 max-md:p-2 max-md:text-base border-none rounded-full cursor-pointer transition-all duration-300 ${
                news
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                  : "bg-slate-100 text-slate-900 hover:bg-transparent hover:text-slate-100 border border-slate-100"
              }`}
            >
              <RiAwardLine /> NoteWorthy
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className="w-[80%] max-md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {TopCreator.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className="w-[80%] max-md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className="w-[80%] max-md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {NewsArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      <div className="text-center">
        <div className="mx-auto pt-28 flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="bg-transparent text-slate-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-violet-500 mx-6 py-4 px-8 max-md:py-2 max-md:px-4 max-md:text-sm rounded-full border border-slate-100 shadow-lg shadow-indigo-500/20 text-xl"
          >
            Show me more
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white mx-6 py-4 px-8 max-md:py-2 max-md:px-4 max-md:text-sm rounded-full border border-indigo-500 shadow-lg shadow-indigo-500/20 text-xl transition-all duration-300 hover:shadow-xl"
          >
            Become author
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
