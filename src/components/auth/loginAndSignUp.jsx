import React, { useState } from "react";
import Image from "next/image";

import images from "@/images";
import Button from "../common/Button/Button";

const LoginAndSignUp = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const socialImage = [
    { social: images.facebook, name: "Continue with Facebook" },
    { social: images.twitter, name: "Continue with Twitter" },
    { social: images.facebook, name: "Continue with Google" },
  ];

  return (
    <div>
      <div>
        <div>
          {socialImage.map((el, i) => (
            <div
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
              className={`flex items-center gap-8 mt-6 border-2 border-slate-700 p-4 rounded-2xl text-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500 ${
                activeBtn == i + 1
                  ? "shadow-lg shadow-indigo-500/20 border-indigo-500 bg-slate-800"
                  : ""
              }`}
            >
              <Image
                src={el.social}
                alt={el.name}
                width={30}
                height={30}
                className="rounded"
              />
              <p>
                <span className="font-semibold">{el.name}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 relative">
          <span className="relative z-10 bg-slate-900 px-4">OR</span>
          <span className="absolute left-0 top-1/2 w-[45%] h-px bg-slate-700"></span>
          <span className="absolute right-0 top-1/2 w-[45%] h-px bg-slate-700"></span>
        </p>

        <div className="mt-12">
          <div className="grid items-center mt-4">
            <label htmlFor="email" className="text-lg font-semibold mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              className="py-4 px-6 rounded-2xl mt-2 outline-none border border-slate-700 bg-slate-800 text-slate-100 focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="grid items-center mt-6">
            <label
              htmlFor="password"
              className="flex justify-between items-center text-lg font-semibold mb-2"
            >
              <p>Password</p>
              <p>
                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                  Forget password
                </a>
              </p>
            </label>
            <input
              type="password"
              className="py-4 px-6 rounded-2xl mt-2 outline-none border border-slate-700 bg-slate-800 text-slate-100 focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        <Button
          btnName="Continue"
          classStyle="w-full mt-12 flex justify-center text-lg"
        />
      </div>
    </div>
  );
};

export default LoginAndSignUp;
