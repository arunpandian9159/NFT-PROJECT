import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

import images from "@/images";
import Button from "../common/Button";

const AuthorProfileCard = ({ currentAccount }) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    setShare(!share);
    setReport(false);
  };
  const openReport = () => {
    setReport(!report);
    setShare(false);
  };

  return (
    <div className="w-full z-20 mt-20">
      <div className="w-[80%] max-md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_4fr_1.3fr] items-center bg-slate-900 p-10 max-md:p-4 rounded-2xl shadow-lg shadow-indigo-500/20 gap-12 max-md:gap-4">
        <div className="max-md:w-1/2">
          <Image
            src={images.nft_image_1}
            className="rounded-2xl"
            alt="NFT IMAGES"
            width={220}
            height={220}
          />
        </div>

        <div>
          <h2 className="text-4xl max-md:text-3xl font-bold flex items-center gap-2 mb-4">
            Dony Herrera
            <span className="text-indigo-400">
              <MdVerified />
            </span>
          </h2>

          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              value={currentAccount || ""}
              id="myInput"
              readOnly
              className="outline-none w-[35%] max-md:w-[85%] text-base border-none bg-transparent text-slate-400"
            />
            <FiCopy
              onClick={() => copyAddress()}
              className="transition-all duration-300 hover:shadow-lg cursor-pointer hover:text-indigo-400 text-xl"
            />
          </div>

          <p className="text-lg leading-relaxed w-[90%] text-slate-400 mb-6">
            Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
            Contributing to @ether_cards, an NFT Monetization Platform.
          </p>

          <div className="flex items-center gap-4 text-2xl">
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 border border-indigo-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-transparent hover:text-slate-100"
            >
              <TiSocialFacebook />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 border border-indigo-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-transparent hover:text-slate-100"
            >
              <TiSocialInstagram />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 border border-indigo-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-transparent hover:text-slate-100"
            >
              <TiSocialLinkedin />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 border border-indigo-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-transparent hover:text-slate-100"
            >
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className="flex items-center self-start gap-8 relative max-md:col-span-1 max-md:row-span-1 max-md:p-4">
          <Button btnName="Follow" handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className="text-4xl cursor-pointer hover:text-indigo-400 transition-colors"
          />

          {share && (
            <div className="absolute p-4 w-60 shadow-lg shadow-indigo-500/20 rounded-2xl bg-slate-900 left-8 top-20 z-50 animate-fade-in">
              <p className="flex items-center gap-4 cursor-pointer transition-all py-2 px-3 hover:bg-slate-100 hover:text-slate-900 rounded-lg">
                <span className="text-2xl">
                  <TiSocialFacebook />
                </span>{" "}
                Facebook
              </p>
              <p className="flex items-center gap-4 cursor-pointer transition-all py-2 px-3 hover:bg-slate-100 hover:text-slate-900 rounded-lg">
                <span className="text-2xl">
                  <TiSocialInstagram />
                </span>{" "}
                Instagram
              </p>
              <p className="flex items-center gap-4 cursor-pointer transition-all py-2 px-3 hover:bg-slate-100 hover:text-slate-900 rounded-lg">
                <span className="text-2xl">
                  <TiSocialLinkedin />
                </span>{" "}
                LinkedIn
              </p>
              <p className="flex items-center gap-4 cursor-pointer transition-all py-2 px-3 hover:bg-slate-100 hover:text-slate-900 rounded-lg">
                <span className="text-2xl">
                  <TiSocialYoutube />
                </span>{" "}
                YouTube
              </p>
            </div>
          )}

          <BsThreeDots
            onClick={() => openReport()}
            className="text-4xl cursor-pointer hover:text-indigo-400 transition-colors"
          />

          {report && (
            <p className="absolute flex items-center gap-4 p-4 w-40 shadow-lg shadow-indigo-500/20 rounded-2xl bg-slate-900 left-20 top-16 z-50 animate-fade-in cursor-pointer hover:bg-slate-100 hover:text-slate-900 transition-colors">
              <span>
                <MdOutlineReportProblem />
              </span>{" "}
              Report abuse
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
