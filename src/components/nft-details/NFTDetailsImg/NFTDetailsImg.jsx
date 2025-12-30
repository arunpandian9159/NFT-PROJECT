import React, { useState } from "react";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const NFTDetailsImg = ({ nft }) => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  return (
    <div className="w-full">
      <div>
        <div className="grid relative">
          <div className="flex items-center justify-between col-span-full row-span-full z-20 self-start px-8 pt-4">
            <BsImages className="text-2xl text-slate-100" />
            <p
              onClick={() => setLike(!like)}
              className="bg-slate-100 py-1 px-4 text-slate-900 flex items-center gap-2 rounded-full cursor-pointer hover:bg-gradient-to-r hover:from-indigo-500 hover:to-violet-500 hover:text-white transition-all"
            >
              {like ? (
                <AiOutlineHeart className="text-2xl" />
              ) : (
                <AiFillHeart className="text-2xl text-red-500" />
              )}
              <span>23</span>
            </p>
          </div>

          <div className="col-span-full row-span-full">
            <img
              src={nft.image}
              className="rounded-2xl w-full"
              alt="NFT image"
            />
          </div>
        </div>

        <div
          className="flex items-center justify-between bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg px-4 cursor-pointer mt-4 py-4"
          onClick={() => setDescription(!description)}
        >
          <p className="text-white font-semibold">Description</p>
          {description ? (
            <TiArrowSortedUp className="text-white" />
          ) : (
            <TiArrowSortedDown className="text-white" />
          )}
        </div>

        {description && (
          <div className="p-4 text-slate-400 bg-slate-800/50 rounded-b-lg animate-fade-in">
            <p>{nft.description}</p>
          </div>
        )}

        <div
          className="flex items-center justify-between bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg px-4 cursor-pointer mt-4 py-4"
          onClick={() => setDetails(!details)}
        >
          <p className="text-white font-semibold">Details</p>
          {details ? (
            <TiArrowSortedUp className="text-white" />
          ) : (
            <TiArrowSortedDown className="text-white" />
          )}
        </div>

        {details && (
          <div className="p-4 text-slate-400 bg-slate-800/50 rounded-b-lg animate-fade-in">
            <small>2000 x 2000 px. IMAGE (685KB)</small>
            <p className="mt-2">
              <small className="text-slate-500">Contract Address</small>
              <br />
              <span className="text-slate-100 break-all">{nft.seller}</span>
            </p>
            <p className="mt-2">
              <small className="text-slate-500">Token ID</small>
              &nbsp;&nbsp;
              <span className="text-slate-100">{nft.tokenId}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImg;
