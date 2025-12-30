import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

import images from "@/images";

const DaysComponents = ({ el, i }) => {
  return (
    <div className="w-full rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/20 bg-slate-800/50">
      <div>
        <div>
          <Image
            src={el.background}
            className="rounded-t-2xl w-full"
            alt="profile background"
            width={500}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Image
            src={
              images[`creatorbackground${(i + 2) % 10 || 1}`] ||
              images.creatorbackground1
            }
            alt="profile"
            width={200}
            height={200}
            className="rounded-bl-2xl w-full"
            style={{ objectFit: "cover" }}
          />
          <Image
            src={
              images[`creatorbackground${(i + 4) % 10 || 1}`] ||
              images.creatorbackground1
            }
            alt="profile"
            width={200}
            height={200}
            className="w-full"
            style={{ objectFit: "cover" }}
          />
          <Image
            src={
              images[`creatorbackground${(i + 3) % 10 || 1}`] ||
              images.creatorbackground1
            }
            alt="profile"
            width={200}
            height={200}
            className="rounded-br-2xl w-full"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 gradient-text">
            Amazing Collection
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <Image
                src={el.user}
                alt="profile"
                width={30}
                height={30}
                className="rounded-full"
                style={{ objectFit: "cover" }}
              />

              <p className="text-slate-400">
                Creator
                <span className="font-semibold text-slate-100 px-2 flex items-center gap-1">
                  Shoaib Bhai
                  <small className="text-indigo-400">
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div>
              <small className="font-semibold border-2 border-slate-100 py-2 px-3 rounded-lg">
                {i + 4}.255 ETH
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
