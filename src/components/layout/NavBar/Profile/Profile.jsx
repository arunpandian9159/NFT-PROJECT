import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import Link from "next/link";

import images from "@/images";

const Profile = ({ currentAccount }) => {
  return (
    <div className="absolute py-8 px-2 shadow-lg shadow-indigo-500/20 text-base w-80 rounded-2xl -left-[17rem] top-[4.5rem] z-[22222222222] bg-slate-900 max-md:-left-[13.5rem]">
      <div className="flex items-start gap-8 p-6">
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className="rounded-full"
        />

        <div className="leading-tight">
          <p className="font-semibold">Shoaib Bhai</p>
          <small className="text-slate-400">
            {currentAccount.slice(0, 18)}..
          </small>
        </div>
      </div>

      <div>
        <div>
          <div className="flex items-center gap-8 px-6 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-800 rounded cursor-pointer">
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/author" }}>My Profile</Link>
            </p>
          </div>
          <div className="flex items-center gap-8 px-6 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-800 rounded cursor-pointer">
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/author" }}>My Items</Link>
            </p>
          </div>
          <div className="flex items-center gap-8 px-6 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-800 rounded cursor-pointer">
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/account" }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-700">
          <div className="flex items-center gap-8 px-6 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-800 rounded cursor-pointer">
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/contactus" }}>Help</Link>
            </p>
          </div>
          <div className="flex items-center gap-8 px-6 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-800 rounded cursor-pointer">
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
