import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

import { Button } from "@/components";

const ContactUs = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="w-[80%] max-md:w-[90%] mx-auto">
        <h1 className="text-5xl max-md:text-3xl font-bold mb-12 text-center gradient-text">
          Contact
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">🗺 ADDRESS</h3>
              <p className="text-slate-400 leading-relaxed">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">💌 EMAIL</h3>
              <p className="text-slate-400">nc.example@example.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">☎ PHONE</h3>
              <p className="text-slate-400">000-123-456-7890</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">🌏 SOCIALS</h3>
              <div className="flex gap-4 text-2xl">
                <a
                  href="#"
                  className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 transition-all duration-300 hover:shadow-lg"
                >
                  <TiSocialFacebook />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 transition-all duration-300 hover:shadow-lg"
                >
                  <TiSocialLinkedin />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 transition-all duration-300 hover:shadow-lg"
                >
                  <TiSocialInstagram />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 transition-all duration-300 hover:shadow-lg"
                >
                  <TiSocialYoutube />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 transition-all duration-300 hover:shadow-lg"
                >
                  <TiSocialTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block font-bold text-lg mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-slate-700 py-4 px-6 rounded-2xl bg-slate-800 outline-none text-slate-100 focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block font-bold text-lg mb-2">
                  Email
                </label>
                <div className="w-full border border-slate-700 rounded-2xl flex items-center gap-4 overflow-hidden focus-within:border-indigo-500 transition-colors">
                  <div className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-500 py-3 px-4 text-white grid">
                    <HiOutlineMail />
                  </div>
                  <input
                    type="text"
                    placeholder="Email*"
                    className="flex-1 border-0 bg-transparent outline-none text-slate-100 py-4"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block font-bold text-lg mb-2"
                >
                  Message
                </label>
                <textarea
                  cols="30"
                  rows="6"
                  placeholder="Your message here..."
                  className="w-full bg-slate-800 outline-none rounded-2xl p-4 border border-slate-700 text-slate-100 focus:border-indigo-500 transition-colors resize-y"
                ></textarea>
              </div>
              <Button
                btnName="Send Message"
                handleClick={() => {}}
                classStyle="w-full flex justify-center text-lg"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
