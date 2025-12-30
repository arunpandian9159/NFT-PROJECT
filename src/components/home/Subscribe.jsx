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
          <p className="text-lg text-slate-400">
            Subscribe to our super-exclusive drop list and be the first to know
            about upcoming drops
          </p>

          <div className="flex items-center gap-4 mt-8">
            <span className="bg-slate-100 text-slate-900 py-2 px-4 rounded-full w-16 text-center font-bold">
              01
            </span>
            <small className="text-base font-bold text-slate-100">
              Get more discount
            </small>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <span className="bg-slate-100 text-slate-900 py-2 px-4 rounded-full w-16 text-center font-bold">
              02
            </span>
            <small className="text-base font-bold text-slate-100">
              Get premium magazines
            </small>
          </div>

          <div className="mt-12 p-6 max-md:p-4 w-full md:w-[80%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-slate-900 flex items-center shadow-lg shadow-indigo-500/30">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-0 outline-none w-[90%] text-white placeholder:text-slate-200 text-lg"
            />
            <RiSendPlaneFill className="text-3xl cursor-pointer hover:scale-110 transition-transform text-white" />
          </div>
        </div>

        <div>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
