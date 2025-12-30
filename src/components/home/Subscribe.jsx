import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

import images from "@/images";

const Subscribe = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] max-md:w-[90%] mx-auto py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Never miss a drop
          </h2>
          <p className="text-lg text-gray-400">
            Subscribe to our super-exclusive drop list and be the first to know
            about upcoming drops
          </p>

          <div className="flex items-center gap-4 mt-8">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white py-2 px-4 rounded-full w-16 text-center font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              01
            </span>
            <small className="text-base font-bold text-white">
              Get more discount
            </small>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white py-2 px-4 rounded-full w-16 text-center font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              02
            </span>
            <small className="text-base font-bold text-white">
              Get premium magazines
            </small>
          </div>

          <div className="mt-12 p-6 max-md:p-4 w-full md:w-[80%] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-white flex items-center shadow-[0_0_25px_rgba(34,211,238,0.4)]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-0 outline-none w-[90%] text-white placeholder:text-white/70 text-lg"
            />
            <RiSendPlaneFill className="text-3xl cursor-pointer hover:scale-110 transition-transform text-white" />
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
            className="relative rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(50,50,50,0.3)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
