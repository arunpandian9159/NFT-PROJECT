import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdTimer } from "react-icons/md";
import Link from "next/link";

import LikeProfile from "../common/LikeProfile";

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(24);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {NFTData?.map((el, i) => (
        <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1}>
          <div className="bg-slate-800 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 group">
            <div className="relative">
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <BsImage className="text-slate-100 text-2xl" />
                <p
                  onClick={(e) => {
                    e.preventDefault();
                    likeNFT();
                  }}
                  className="flex items-center gap-2 bg-slate-100 text-slate-900 py-1 px-3 rounded-full cursor-pointer"
                >
                  {like ? (
                    <AiOutlineHeart />
                  ) : (
                    <AiFillHeart className="text-red-500" />
                  )}
                  <span>{likeInc + 1}</span>
                </p>
              </div>

              <img
                src={el.image}
                alt="NFT"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <LikeProfile />
                  <p className="font-semibold">{el.name}</p>
                </div>
                <small className="text-slate-400">4{i + 2}</small>
              </div>

              <div className="flex items-center justify-between border-t border-slate-700 pt-4">
                <div>
                  <small className="text-slate-400">Current Bid</small>
                  <p className="font-bold gradient-text">
                    {el.price || i + 4} ETH
                  </p>
                </div>
                <p className="flex items-center gap-2 text-slate-400">
                  <MdTimer className="text-indigo-400" />{" "}
                  <span>{i + 1} hours left</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCardTwo;
