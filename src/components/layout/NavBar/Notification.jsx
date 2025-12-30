import React from "react";
import Image from "next/image";

import images from "@/images";

const Notification = () => {
  return (
    <div className="absolute p-8 shadow-lg shadow-indigo-500/20 text-base w-[25rem] rounded-2xl -left-80 top-14 z-[2222222222] bg-slate-900 max-md:w-[21rem] max-md:-left-44">
      <p className="text-xl font-semibold mb-8">Notification</p>
      <div className="flex items-start gap-4 p-4 transition-all duration-300 rounded hover:bg-slate-100 hover:text-slate-800 group cursor-pointer max-md:p-1">
        <div className="rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={images.user1}
            alt="profile image"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="leading-tight -mt-1">
          <h4 className="font-semibold">Shoaib Akhter</h4>
          <p className="text-sm leading-tight max-md:text-xs">
            Measure action your user...
          </p>
          <small className="text-slate-400 group-hover:text-slate-600">
            3 minutes ago
          </small>
        </div>
        <span className="w-2 h-2 rounded-full bg-slate-100 group-hover:bg-slate-900 flex-shrink-0"></span>
      </div>
    </div>
  );
};

export default Notification;
