import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

import Button from "../../common/Button/Button";

const Form = () => {
  return (
    <div className="w-full">
      <div>
        <form>
          <div className="mt-8">
            <label
              htmlFor="name"
              className="block w-full ml-4 font-bold text-xl"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-slate-700 py-4 px-6 rounded-2xl bg-slate-800 mt-2 outline-none text-slate-100 focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="mt-8">
            <label
              htmlFor="email"
              className="block w-full ml-4 font-bold text-xl"
            >
              Email
            </label>
            <div className="w-full border border-slate-700 rounded-2xl flex items-center gap-4 overflow-hidden focus-within:border-indigo-500 transition-colors">
              <div className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-500 py-3 px-4 text-white grid cursor-pointer">
                <HiOutlineMail />
              </div>
              <input
                type="text"
                placeholder="Email*"
                className="w-[90%] border-0 bg-transparent outline-none text-slate-100"
              />
            </div>
          </div>

          <div className="mt-8">
            <label
              htmlFor="description"
              className="block w-full ml-4 font-bold text-xl"
            >
              Description
            </label>
            <textarea
              cols="30"
              rows="6"
              placeholder="Something about yourself in few words"
              className="w-full bg-slate-800 outline-none rounded-2xl p-4 border border-slate-700 text-slate-100 focus:border-indigo-500 transition-colors mt-2 resize-y"
            ></textarea>
          </div>

          <div className="mt-8">
            <label
              htmlFor="website"
              className="block w-full ml-4 font-bold text-xl"
            >
              Website
            </label>
            <div className="w-full border border-slate-700 rounded-2xl flex items-center gap-4 overflow-hidden focus-within:border-indigo-500 transition-colors">
              <div className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-500 py-3 px-4 text-white grid cursor-pointer">
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                placeholder="https://website.com"
                className="w-[90%] border-0 bg-transparent outline-none text-slate-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div>
              <label
                htmlFor="facebook"
                className="block w-full ml-4 font-bold text-xl"
              >
                Facebook
              </label>
              <div className="w-full border border-slate-700 rounded-2xl flex items-center gap-4 overflow-hidden focus-within:border-indigo-500 transition-colors">
                <div className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-500 py-3 px-4 text-white grid cursor-pointer">
                  <TiSocialFacebook />
                </div>
                <input
                  type="text"
                  placeholder="facebook.com/username"
                  className="w-[90%] border-0 bg-transparent outline-none text-slate-100"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Twitter"
                className="block w-full ml-4 font-bold text-xl"
              >
                Twitter
              </label>
              <div className="w-full border border-slate-700 rounded-2xl flex items-center gap-4 overflow-hidden focus-within:border-indigo-500 transition-colors">
                <div className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-500 py-3 px-4 text-white grid cursor-pointer">
                  <TiSocialTwitter />
                </div>
                <input
                  type="text"
                  placeholder="twitter.com/username"
                  className="w-[90%] border-0 bg-transparent outline-none text-slate-100"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Instagram"
                className="block w-full ml-4 font-bold text-xl"
              >
                Instagram
              </label>
              <div className="w-full border border-slate-700 rounded-2xl flex items-center gap-4 overflow-hidden focus-within:border-indigo-500 transition-colors">
                <div className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-500 py-3 px-4 text-white grid cursor-pointer">
                  <TiSocialInstagram />
                </div>
                <input
                  type="text"
                  placeholder="instagram.com/username"
                  className="w-[90%] border-0 bg-transparent outline-none text-slate-100"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <label
              htmlFor="wallet"
              className="block w-full ml-4 font-bold text-xl"
            >
              Wallet address
            </label>
            <div className="w-full border border-slate-700 rounded-2xl flex items-center gap-4 overflow-hidden focus-within:border-indigo-500 transition-colors">
              <div className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-500 py-3 px-4 text-white grid cursor-pointer">
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                placeholder="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
                className="flex-1 border-0 bg-transparent outline-none text-slate-100"
              />
              <div className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-500 py-3 px-4 text-white grid cursor-pointer hover:opacity-80 transition-opacity">
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className="my-16">
            <Button
              btnName="Upload profile"
              handleClick={() => {}}
              classStyle="w-full flex justify-center text-xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
