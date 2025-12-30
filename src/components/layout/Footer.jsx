import React from "react";
import { DiJqueryLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

import { Discover, HelpCenter } from "./NavBar/index";

const Footer = () => {
  return (
    <div className="w-full py-16 pb-8 bg-gray-900 border-t border-cyan-400/20 mt-24">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_2fr] items-start justify-between gap-12">
        <div>
          <a href="/">
            <DiJqueryLogo className="text-7xl text-white mb-4 hover:text-cyan-400 transition-colors" />
          </a>
          <p className="text-gray-400 leading-relaxed">
            The world's first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>

          <div className="flex gap-5 text-2xl items-center mt-6">
            <a
              href="#"
              className="p-2 rounded-full transition-all duration-300 grid bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:-translate-y-0.5"
            >
              <TiSocialFacebook />
            </a>
            <a
              href="#"
              className="p-2 rounded-full transition-all duration-300 grid bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:-translate-y-0.5"
            >
              <TiSocialLinkedin />
            </a>
            <a
              href="#"
              className="p-2 rounded-full transition-all duration-300 grid bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:-translate-y-0.5"
            >
              <TiSocialTwitter />
            </a>
            <a
              href="#"
              className="p-2 rounded-full transition-all duration-300 grid bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:-translate-y-0.5"
            >
              <TiSocialYoutube />
            </a>
            <a
              href="#"
              className="p-2 rounded-full transition-all duration-300 grid bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:-translate-y-0.5"
            >
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Discover</h3>
          <Discover />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Help Center</h3>
          <HelpCenter />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Subscribe</h3>

          <div className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-white rounded-xl mt-8 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <input
              type="email"
              placeholder="Enter your email *"
              className="bg-transparent border-none outline-none w-[90%] text-white placeholder:text-white/70"
            />
            <RiSendPlaneFill className="cursor-pointer text-3xl hover:scale-110 transition-transform" />
          </div>
          <div className="p-4">
            <p className="text-gray-400 text-sm">
              Discover, collect, and sell extraordinary NFTs OpenSea is the
              world first and largest NFT marketplace
            </p>
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-[1200px] mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>© 2024 NFT Marketplace. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
