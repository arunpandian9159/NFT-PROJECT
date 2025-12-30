import React from "react";
import Image from "next/image";

const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div>
      {dataTab.map((el, i) => (
        <div
          className="flex items-center gap-4 py-4 border-b border-slate-700"
          key={i + 1}
        >
          <Image
            src={el}
            alt="profile image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="grid self-start mt-1">
            <span className="font-bold flex items-center gap-2">
              Offer by $770 by{" "}
              <span className="text-indigo-400">Shoaib Bhai</span>
              {icon && <span className="text-indigo-400">{icon}</span>}
            </span>

            <small className="mt-1 text-slate-400">Jun 14 - 4:12 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;
