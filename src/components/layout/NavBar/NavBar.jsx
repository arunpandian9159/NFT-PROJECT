import React, { useState, useContext } from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/router";

import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import Button from "../../common/Button";
import Error from "../../common/Error";
import images from "@/images";

import { NFTMarketplaceContext } from "../../../context/NFTMarketplaceContext";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const router = useRouter();

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  const { currentAccount, connectWallet, openError } = useContext(
    NFTMarketplaceContext
  );

  return (
    <div className="w-full py-4 sticky top-0 bg-gray-950/95 backdrop-blur-lg border-b border-cyan-400/20 z-[1000]">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-2 items-center justify-between gap-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center">
          <div className="text-white text-6xl cursor-pointer hover:text-cyan-400 transition-colors">
            <DiJqueryLogo onClick={() => router.push("/")} />
          </div>
          <div className="hidden md:block">
            <div className="w-[70%] bg-gray-900 flex items-center py-3 px-4 rounded-xl transition-all duration-300 focus-within:border-cyan-400 focus-within:ring-4 focus-within:ring-cyan-400/10 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(50,50,50,0.2)]">
              <input
                type="text"
                placeholder="Search NFT"
                className="w-[90%] border-none outline-none bg-transparent text-white"
              />
              <BsSearch className="cursor-pointer text-xl text-gray-400 hover:text-cyan-400 transition-colors" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-[1fr_1fr_0.5fr_1fr_0.3fr] gap-4 items-center">
          <div className="relative cursor-pointer hidden md:block">
            <p
              onClick={(e) => openMenu(e)}
              className="hover:text-cyan-400 transition-colors"
            >
              Discover
            </p>
            {discover && (
              <div className="absolute p-4 text-base w-60 rounded-2xl bg-gray-900 animate-fade-in shadow-[8px_8px_16px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(50,50,50,0.3)] border border-cyan-400/20">
                <Discover />
              </div>
            )}
          </div>

          <div className="relative cursor-pointer hidden md:block">
            <p
              onClick={(e) => openMenu(e)}
              className="hover:text-cyan-400 transition-colors"
            >
              Help Center
            </p>
            {help && (
              <div className="absolute p-4 text-base w-60 rounded-2xl bg-gray-900 animate-fade-in shadow-[8px_8px_16px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(50,50,50,0.3)] border border-cyan-400/20">
                <HelpCenter />
              </div>
            )}
          </div>

          <div className="relative cursor-pointer">
            <MdNotifications
              className="text-3xl hover:text-cyan-400 transition-colors"
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          <div className="relative cursor-pointer hidden md:block">
            {currentAccount == "" ? (
              <Button btnName="Connect" handleClick={() => connectWallet()} />
            ) : (
              <Button
                btnName="Create"
                handleClick={() => router.push("/uploadNFT")}
              />
            )}
          </div>

          <div className="relative cursor-pointer">
            <div className="relative">
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className="rounded-full hover:ring-2 hover:ring-cyan-400 transition-all"
              />

              {profile && <Profile currentAccount={currentAccount} />}
            </div>
          </div>

          <div className="block md:hidden">
            <CgMenuRight
              className="text-4xl cursor-pointer hover:text-cyan-400 transition-colors"
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {openSideMenu && (
        <div className="fixed top-0 right-0 w-96 bg-gray-950 h-screen overflow-y-auto z-[11111] animate-slide-down shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          <SideBar
            setOpenSideMenu={setOpenSideMenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
          />
        </div>
      )}

      {openError && <Error />}
    </div>
  );
};

export default NavBar;
