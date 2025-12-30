import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import Link from "next/link";

import images from "@/images";

const Profile = ({ currentAccount }) => {
  return (
    <div className="absolute py-8 px-2 text-base w-80 rounded-2xl -left-[17rem] top-[4.5rem] z-[22222222222] bg-gray-900 max-md:-left-[13.5rem] shadow-[8px_8px_16px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(50,50,50,0.3)] border border-cyan-400/20">
      <div className="flex items-start gap-8 p-6">
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className="rounded-full ring-2 ring-cyan-400/50"
        />

        <div className="leading-tight">
          <p className="font-semibold">Shoaib Bhai</p>
          <small className="text-gray-400">
            {currentAccount.slice(0, 18)}..
          </small>
        </div>
      </div>

      <div>
        <div>
          <div className="flex items-center gap-8 px-6 py-2 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-400 rounded cursor-pointer">
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/author" }}>My Profile</Link>
            </p>
          </div>
          <div className="flex items-center gap-8 px-6 py-2 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-400 rounded cursor-pointer">
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/author" }}>My Items</Link>
            </p>
          </div>
          <div className="flex items-center gap-8 px-6 py-2 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-400 rounded cursor-pointer">
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/account" }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center gap-8 px-6 py-2 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-400 rounded cursor-pointer">
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/contactus" }}>Help</Link>
            </p>
          </div>
          <div className="flex items-center gap-8 px-6 py-2 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-400 rounded cursor-pointer">
            <TbDownload />
            <p>
              <Link href={{ pathname: "/aboutus" }}>About Us</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
