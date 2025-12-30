import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

import images from "@/images";
import Button from "../common/Button";
import { NFTTabs } from "./NFTDetailsIndex";

import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const NFTDescription = ({ nft }) => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);

  const router = useRouter();

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provananceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user1,
    images.user8,
    images.user2,
    images.user6,
    images.user5,
  ];

  const openSocial = () => {
    setSocial(!social);
    setNFTMenu(false);
  };
  const openNFTMenu = () => {
    setNFTMenu(!NFTMenu);
    setSocial(false);
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Bid History") {
      setHistory(true);
      setProvanance(false);
      setOwner(false);
    } else if (btnText == "Provanance") {
      setHistory(false);
      setProvanance(true);
      setOwner(false);
    }
  };

  const openOwmer = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvanance(false);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);

  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        {/* Part ONE */}
        <div className="flex items-center justify-between relative">
          <p className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white py-1 px-4 rounded-full text-sm">
            Virtual Worlds
          </p>
          <div className="flex items-center gap-8 text-xl">
            <MdCloudUpload
              className="cursor-pointer hover:text-indigo-400 transition-colors"
              onClick={() => openSocial()}
            />

            {social && (
              <div className="absolute top-20 right-0 w-56 bg-slate-900 shadow-lg shadow-indigo-500/20 rounded-xl p-4 z-50 animate-fade-in">
                <a
                  href="#"
                  className="flex items-center gap-4 transition-all py-2 text-base hover:bg-slate-100 hover:text-slate-900 rounded px-2"
                >
                  <TiSocialFacebook /> Facebook
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 transition-all py-2 text-base hover:bg-slate-100 hover:text-slate-900 rounded px-2"
                >
                  <TiSocialInstagram /> Instagram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 transition-all py-2 text-base hover:bg-slate-100 hover:text-slate-900 rounded px-2"
                >
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 transition-all py-2 text-base hover:bg-slate-100 hover:text-slate-900 rounded px-2"
                >
                  <TiSocialTwitter /> Twitter
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 transition-all py-2 text-base hover:bg-slate-100 hover:text-slate-900 rounded px-2"
                >
                  <TiSocialYoutube /> YouTube
                </a>
              </div>
            )}

            <BsThreeDots
              className="cursor-pointer hover:text-indigo-400 transition-colors"
              onClick={() => openNFTMenu()}
            />

            {NFTMenu && (
              <div className="absolute top-20 right-0 w-56 bg-slate-900 shadow-lg shadow-indigo-500/20 rounded-xl p-4 z-50 animate-fade-in">
                <a
                  href="#"
                  className="flex items-center gap-4 transition-all py-2 text-base hover:bg-slate-100 hover:text-slate-900 rounded px-2"
                >
                  <BiDollar /> Change price
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 transition-all py-2 text-base hover:bg-slate-100 hover:text-slate-900 rounded px-2"
                >
                  <BiTransferAlt /> Transfer
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 transition-all py-2 text-base hover:bg-slate-100 hover:text-slate-900 rounded px-2"
                >
                  <MdReportProblem /> Report abuse
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 transition-all py-2 text-base hover:bg-slate-100 hover:text-slate-900 rounded px-2"
                >
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Part TWO */}
        <div>
          <h1 className="text-4xl max-md:text-3xl font-bold mt-6 mb-4 gradient-text">
            {nft.name} #{nft.tokenId}
          </h1>

          <div className="flex flex-wrap items-center gap-8 pb-6">
            <div className="flex items-center gap-4">
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <small className="text-slate-400 font-medium">Creator</small>
                <br />
                <Link href={{ pathname: "/author" }}>
                  <span className="font-bold flex items-center gap-1 cursor-pointer hover:text-indigo-400">
                    Karli Costa <MdVerified className="text-indigo-400" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 border-l border-slate-100 pl-8 max-md:border-0 max-md:pl-0">
              <Image
                src={images.creatorbackground1}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <small className="text-slate-400 font-medium">Collection</small>
                <br />
                <span className="font-bold flex items-center gap-1">
                  Monkey app <MdVerified className="text-indigo-400" />
                </span>
              </div>
            </div>
          </div>

          <div className="my-4">
            <p className="flex items-center text-2xl gap-4 text-slate-400">
              <MdTimer className="text-indigo-400" />{" "}
              <span>Auction ending in:</span>
            </p>

            <div className="flex gap-12 items-center mt-4">
              <div>
                <p className="text-5xl font-black">2</p>
                <span className="text-slate-400 font-semibold">Days</span>
              </div>
              <div>
                <p className="text-5xl font-black">22</p>
                <span className="text-slate-400 font-semibold">hours</span>
              </div>
              <div>
                <p className="text-5xl font-black">45</p>
                <span className="text-slate-400 font-semibold">mins</span>
              </div>
              <div>
                <p className="text-5xl font-black">12</p>
                <span className="text-slate-400 font-semibold">secs</span>
              </div>
            </div>

            <div className="grid grid-cols-[4fr_1fr] max-md:grid-cols-[2fr_1fr] gap-12 max-md:gap-4 items-end mt-16">
              <div className="border-2 border-slate-100 rounded-xl">
                <small className="text-lg bg-slate-100 text-slate-900 py-2 px-4 rounded-lg ml-8">
                  Current Bid
                </small>
                <p className="p-4 text-2xl max-md:text-lg font-black gradient-text">
                  {nft.price} ETH{" "}
                  <span className="text-slate-400 text-base">
                    ( ≈ $3,221.22)
                  </span>
                </p>
              </div>
              <span className="text-slate-400">[96 in stock]</span>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 max-md:gap-4">
              {currentAccount == nft.seller?.toLowerCase() ? (
                <p className="text-slate-400">You can't buy your own NFT</p>
              ) : currentAccount == nft.owner?.toLowerCase() ? (
                <Button
                  icon={<FaWallet />}
                  btnName="List on Marketplace"
                  handleClick={() =>
                    router.push(
                      `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`
                    )
                  }
                />
              ) : (
                <Button
                  icon={<FaWallet />}
                  btnName="Buy NFT"
                  handleClick={() => buyNFT(nft)}
                />
              )}
              <Button
                icon={<FaPercentage />}
                btnName="Make offer"
                handleClick={() => {}}
              />
            </div>

            <div className="mt-12 flex gap-4 flex-wrap">
              <button
                onClick={(e) => openTabs(e)}
                className={`text-base py-4 px-8 border-0 rounded-full cursor-pointer font-semibold transition-all ${
                  history
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                    : "bg-slate-700 text-slate-100 hover:bg-slate-600"
                }`}
              >
                Bid History
              </button>
              <button
                onClick={(e) => openTabs(e)}
                className={`text-base py-4 px-8 border-0 rounded-full cursor-pointer font-semibold transition-all ${
                  provanance
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                    : "bg-slate-700 text-slate-100 hover:bg-slate-600"
                }`}
              >
                Provanance
              </button>
              <button
                onClick={() => openOwmer()}
                className={`text-base py-4 px-8 border-0 rounded-full cursor-pointer font-semibold transition-all ${
                  owner
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                    : "bg-slate-700 text-slate-100 hover:bg-slate-600"
                }`}
              >
                Owner
              </button>
            </div>

            {history && (
              <div className="mt-8 p-4 animate-fade-in">
                <NFTTabs dataTab={historyArray} />
              </div>
            )}
            {provanance && (
              <div className="mt-8 p-4 animate-fade-in">
                <NFTTabs dataTab={provananceArray} />
              </div>
            )}
            {owner && (
              <div className="mt-8 p-4 animate-fade-in">
                <NFTTabs dataTab={ownerArray} icon={<MdVerified />} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
