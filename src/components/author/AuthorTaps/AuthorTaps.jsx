import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

const AuthorTaps = ({
  setCollectiables,
  setCreated,
  setLike,
  setFollower,
  setFollowing,
  currentAccount,
}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openTab = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Listed NFTs") {
      setCollectiables(true);
      setCreated(false);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setActiveBtn(1);
    } else if (btnText == "Own NFT") {
      setCollectiables(false);
      setCreated(true);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setActiveBtn(2);
    } else if (btnText == "Liked") {
      setCollectiables(false);
      setCreated(false);
      setFollower(false);
      setFollowing(false);
      setLike(true);
      setActiveBtn(3);
    } else if (btnText == "Following") {
      setCollectiables(false);
      setCreated(false);
      setFollower(false);
      setFollowing(true);
      setLike(false);
      setActiveBtn(4);
    } else if (btnText == "Followers") {
      setCollectiables(false);
      setCreated(false);
      setFollower(true);
      setFollowing(false);
      setLike(false);
      setActiveBtn(5);
    }
  };

  return (
    <div className="w-[80%] max-md:w-[90%] mx-auto mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-wrap gap-4">
          <button
            className={`py-4 px-6 max-md:py-2 max-md:px-4 rounded-full border-none cursor-pointer font-semibold transition-all duration-300 ${
              activeBtn == 1
                ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                : "bg-slate-700 text-slate-100 hover:bg-slate-600"
            }`}
            onClick={(e) => openTab(e)}
          >
            Listed NFTs
          </button>
          <button
            className={`py-4 px-6 max-md:py-2 max-md:px-4 rounded-full border-none cursor-pointer font-semibold transition-all duration-300 ${
              activeBtn == 2
                ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                : "bg-slate-700 text-slate-100 hover:bg-slate-600"
            }`}
            onClick={(e) => openTab(e)}
          >
            Own NFT
          </button>
          <button
            className={`py-4 px-6 max-md:py-2 max-md:px-4 rounded-full border-none cursor-pointer font-semibold transition-all duration-300 ${
              activeBtn == 3
                ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                : "bg-slate-700 text-slate-100 hover:bg-slate-600"
            }`}
            onClick={(e) => openTab(e)}
          >
            Liked
          </button>
          <button
            className={`py-4 px-6 max-md:py-2 max-md:px-4 rounded-full border-none cursor-pointer font-semibold transition-all duration-300 ${
              activeBtn == 4
                ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                : "bg-slate-700 text-slate-100 hover:bg-slate-600"
            }`}
            onClick={(e) => openTab(e)}
          >
            Following
          </button>
          <button
            className={`py-4 px-6 max-md:py-2 max-md:px-4 rounded-full border-none cursor-pointer font-semibold transition-all duration-300 ${
              activeBtn == 5
                ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                : "bg-slate-700 text-slate-100 hover:bg-slate-600"
            }`}
            onClick={(e) => openTab(e)}
          >
            Followers
          </button>
        </div>

        <div className="relative">
          <div
            className="flex items-center gap-4 py-4 px-6 bg-slate-800 rounded-full cursor-pointer hover:bg-slate-700 transition-colors border border-slate-700"
            onClick={() => setOpenList(!openList)}
          >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div className="absolute right-0 top-16 w-56 bg-slate-900 shadow-lg shadow-indigo-500/20 rounded-2xl p-4 z-50 animate-fade-in">
              {listArray.map((el, i) => (
                <div
                  key={i + 1}
                  onClick={() => {
                    setSelectedMenu(el);
                    setOpenList(false);
                  }}
                  className="flex items-center justify-between py-3 px-4 cursor-pointer transition-all rounded-lg hover:bg-slate-100 hover:text-slate-900"
                >
                  <p>{el}</p>
                  <span className="text-green-400">
                    {selectedMenu == el && <TiTick />}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;
