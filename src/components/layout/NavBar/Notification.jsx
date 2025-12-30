import React from "react";
import Image from "next/image";

import images from "@/images";

const Notification = () => {
  return (
    <div className="absolute p-8 text-base w-[25rem] rounded-2xl -left-80 top-14 z-[2222222222] bg-gray-900 max-md:w-[21rem] max-md:-left-44 shadow-[8px_8px_16px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(50,50,50,0.3)] border border-cyan-400/20">
      <p className="text-xl font-semibold mb-8 gradient-text">Notification</p>
      <div className="flex items-start gap-4 p-4 transition-all duration-300 rounded hover:bg-cyan-400/10 group cursor-pointer max-md:p-1">
        <div className="rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={images.user1}
            alt="profile image"
            width={50}
            height={50}
            className="rounded-full ring-2 ring-cyan-400/30"
          />
        </div>
        <div className="leading-tight -mt-1">
          <h4 className="font-semibold">Shoaib Akhter</h4>
          <p className="text-sm leading-tight max-md:text-xs text-gray-400">
            Measure action your user...
          </p>
          <small className="text-gray-500 group-hover:text-cyan-400">
            3 minutes ago
          </small>
        </div>
        <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
      </div>
    </div>
  );
};

export default Notification;
