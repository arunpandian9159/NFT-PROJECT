import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
} from "react-icons/ti";
import { DiJqueryLogo } from "react-icons/di";

import images from "@/images";
import Button from "../../common/Button";

const SideBar = ({ setOpenSideMenu, currentAccount, connectWallet }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const router = useRouter();

  const discover = [
    { name: "Collection", link: "collection" },
    { name: "Search", link: "searchPage" },
    { name: "Author Profile", link: "author" },
    { name: "NFT Details", link: "NFT-details" },
    { name: "Account Setting", link: "account" },
    { name: "Upload NFT", link: "uploadNFT" },
    { name: "Connect Wallet", link: "connectWallet" },
    { name: "Blog", link: "blog" },
  ];

  const helpCenter = [
    { name: "About", link: "aboutus" },
    { name: "Contact Us", link: "contactus" },
    { name: "Sign Up", link: "signUp" },
    { name: "LogIn", link: "login" },
    { name: "Subscription", link: "subscription" },
  ];

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className="bg-slate-900 h-full overflow-y-auto scrollbar-hide">
      <GrClose
        className="absolute top-12 right-8 transition-all duration-200 cursor-pointer shadow-lg shadow-indigo-500/20 hover:rotate-45 text-xl bg-slate-100 p-1 rounded"
        onClick={() => closeSideBar()}
      />

      <div className="p-8 border-b border-slate-100 bg-slate-900">
        <a href="/">
          <DiJqueryLogo className="text-7xl mb-12 mt-8 text-slate-100" />
        </a>
        <p className="-mt-8 text-slate-400">
          Discover the most outstanding articles on all topics of NFT & write
          your own stories and share them
        </p>
        <div className="flex gap-5 text-2xl items-center mt-6">
          <a
            href="#"
            className="p-1 rounded-full transition-all duration-300 grid hover:bg-gradient-to-r from-indigo-500 to-violet-500 hover:text-white hover:shadow-lg"
          >
            <TiSocialFacebook />
          </a>
          <a
            href="#"
            className="p-1 rounded-full transition-all duration-300 grid hover:bg-gradient-to-r from-indigo-500 to-violet-500 hover:text-white hover:shadow-lg"
          >
            <TiSocialLinkedin />
          </a>
          <a
            href="#"
            className="p-1 rounded-full transition-all duration-300 grid hover:bg-gradient-to-r from-indigo-500 to-violet-500 hover:text-white hover:shadow-lg"
          >
            <TiSocialTwitter />
          </a>
          <a
            href="#"
            className="p-1 rounded-full transition-all duration-300 grid hover:bg-gradient-to-r from-indigo-500 to-violet-500 hover:text-white hover:shadow-lg"
          >
            <TiSocialYoutube />
          </a>
          <a
            href="#"
            className="p-1 rounded-full transition-all duration-300 grid hover:bg-gradient-to-r from-indigo-500 to-violet-500 hover:text-white hover:shadow-lg"
          >
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className="p-8 uppercase font-medium border-b border-slate-100">
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenDiscover(!openDiscover)}
          >
            <p>Discover</p>
            <TiArrowSortedDown
              className={`transition-transform ${
                openDiscover ? "rotate-180" : ""
              }`}
            />
          </div>

          {openDiscover && (
            <div className="px-4 mt-4 animate-fade-in">
              {discover.map((el, i) => (
                <p
                  key={i + 1}
                  className="py-2 text-sm normal-case hover:text-indigo-400 transition-colors"
                >
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenHelp(!openHelp)}
          >
            <p>Help Center</p>
            <TiArrowSortedDown
              className={`transition-transform ${openHelp ? "rotate-180" : ""}`}
            />
          </div>

          {openHelp && (
            <div className="px-4 mt-4 animate-fade-in">
              {helpCenter.map((el, i) => (
                <p
                  key={i + 1}
                  className="py-2 text-sm normal-case hover:text-indigo-400 transition-colors"
                >
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-8 flex flex-col gap-4">
        {currentAccount == "" ? (
          <Button btnName="Connect" handleClick={() => connectWallet()} />
        ) : (
          <Button
            btnName="Create"
            handleClick={() => router.push("/uploadNFT")}
          />
        )}

        <Button btnName="Connect Wallet" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default SideBar;
