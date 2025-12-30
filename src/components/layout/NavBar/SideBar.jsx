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
    <div className="bg-gray-950 h-full overflow-y-auto scrollbar-hide">
      <GrClose
        className="absolute top-12 right-8 transition-all duration-200 cursor-pointer hover:rotate-45 text-xl bg-cyan-400 text-gray-950 p-1 rounded shadow-[0_0_15px_rgba(34,211,238,0.4)]"
        onClick={() => closeSideBar()}
      />

      <div className="p-8 border-b border-cyan-400/20 bg-gray-950">
        <a href="/">
          <DiJqueryLogo className="text-7xl mb-12 mt-8 text-white hover:text-cyan-400 transition-colors" />
        </a>
        <p className="-mt-8 text-gray-400">
          Discover the most outstanding articles on all topics of NFT & write
          your own stories and share them
        </p>
        <div className="flex gap-5 text-2xl items-center mt-6">
          <a
            href="#"
            className="p-1 rounded-full transition-all duration-300 grid bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          >
            <TiSocialFacebook />
          </a>
          <a
            href="#"
            className="p-1 rounded-full transition-all duration-300 grid bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          >
            <TiSocialLinkedin />
          </a>
          <a
            href="#"
            className="p-1 rounded-full transition-all duration-300 grid bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          >
            <TiSocialTwitter />
          </a>
          <a
            href="#"
            className="p-1 rounded-full transition-all duration-300 grid bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          >
            <TiSocialYoutube />
          </a>
          <a
            href="#"
            className="p-1 rounded-full transition-all duration-300 grid bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          >
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className="p-8 uppercase font-medium border-b border-cyan-400/20">
        <div>
          <div
            className="flex justify-between items-center cursor-pointer hover:text-cyan-400 transition-colors"
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
                  className="py-2 text-sm normal-case hover:text-cyan-400 transition-colors"
                >
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6">
          <div
            className="flex justify-between items-center cursor-pointer hover:text-cyan-400 transition-colors"
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
                  className="py-2 text-sm normal-case hover:text-cyan-400 transition-colors"
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
