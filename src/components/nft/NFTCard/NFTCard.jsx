import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Link from "next/link";

const NFTCard = ({ NFTData }) => {
  const [like, setLike] = useState(true);

  const likeNft = () => {
    setLike(!like);
  };

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
      {NFTData.map((el, i) => (
        <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1}>
          <div className="bg-slate-800 p-6 rounded-2xl border border-indigo-500/10 grid grid-cols-4 grid-rows-4 cursor-pointer transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/30 hover:border-indigo-500 group">
            {/* Update Section (Top) */}
            <div className="col-span-4 row-span-3 row-start-1 z-20 flex items-start justify-between overflow-hidden">
              <div
                className="bg-slate-100 py-2 px-4 text-slate-900 rounded-full m-4 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  likeNft();
                }}
              >
                <div className="flex items-center text-lg gap-2">
                  {like ? (
                    <AiOutlineHeart />
                  ) : (
                    <AiFillHeart className="text-red-500" />
                  )}
                  22
                </div>
              </div>

              <div className="bg-slate-900 py-2 px-12 max-sm:px-8 text-center skew-x-[45deg] rounded-bl-2xl -mr-8">
                <div className="skew-x-[-45deg]">
                  <small className="text-slate-400">Remaining time</small>
                  <p className="text-lg max-sm:text-base font-bold">
                    3h : 15m : 20s
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="col-span-4 row-span-4 row-start-1 overflow-hidden rounded-2xl">
              <img
                src={el.image}
                alt="NFT images"
                className="rounded-2xl transition-all duration-500 object-contain w-full group-hover:scale-105"
              />
            </div>

            {/* Details Section (Bottom) */}
            <div className="col-span-4 row-span-2 row-start-3 z-20 grid grid-cols-[1.5fr_1fr] items-end overflow-hidden">
              <div className="bg-slate-900 -ml-12 py-3 skew-x-[45deg] rounded-tr-2xl">
                <div className="skew-x-[-45deg] pl-12">
                  <h4 className="text-xl font-bold gradient-text">
                    {el.name} #{el.tokenId}
                  </h4>

                  <div className="flex justify-between items-end mt-2 gap-4 flex-wrap">
                    <div className="border border-slate-100 py-1 px-2 rounded">
                      <small className="bg-slate-100 text-slate-900 rounded px-1 text-xs">
                        Current Bid
                      </small>
                      <p className="pt-2 font-semibold">{el.price}ETH</p>
                    </div>
                    <div>
                      <small className="text-slate-400">61 in stock</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-slate-100 text-right m-6 text-2xl">
                <BsImages />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCard;
