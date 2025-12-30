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
          <div className="bg-gray-900 p-6 rounded-2xl border border-cyan-400/10 grid grid-cols-4 grid-rows-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 group shadow-[8px_8px_16px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(50,50,50,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
            {/* Update Section (Top) */}
            <div className="col-span-4 row-span-3 row-start-1 z-20 flex items-start justify-between overflow-hidden">
              <div
                className="bg-gray-950 py-2 px-4 text-white rounded-full m-4 cursor-pointer border border-cyan-400/30 hover:border-cyan-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  likeNft();
                }}
              >
                <div className="flex items-center text-lg gap-2">
                  {like ? (
                    <AiOutlineHeart className="text-cyan-400" />
                  ) : (
                    <AiFillHeart className="text-fuchsia-500 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
                  )}
                  22
                </div>
              </div>

              <div className="bg-gray-950 py-2 px-12 max-sm:px-8 text-center skew-x-[45deg] rounded-bl-2xl -mr-8 border-b border-l border-cyan-400/30">
                <div className="skew-x-[-45deg]">
                  <small className="text-gray-400">Remaining time</small>
                  <p className="text-lg max-sm:text-base font-bold text-cyan-400">
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
              <div className="bg-gray-950 -ml-12 py-3 skew-x-[45deg] rounded-tr-2xl border-t border-r border-cyan-400/30">
                <div className="skew-x-[-45deg] pl-12">
                  <h4 className="text-xl font-bold gradient-text">
                    {el.name} #{el.tokenId}
                  </h4>

                  <div className="flex justify-between items-end mt-2 gap-4 flex-wrap">
                    <div className="border border-cyan-400/30 py-1 px-2 rounded">
                      <small className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white rounded px-1 text-xs">
                        Current Bid
                      </small>
                      <p className="pt-2 font-semibold text-cyan-400">
                        {el.price}ETH
                      </p>
                    </div>
                    <div>
                      <small className="text-gray-400">61 in stock</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white text-right m-6 text-2xl">
                <BsImages className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCard;
