import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SliderCard = ({ el, i }) => {
  return (
    <motion.div className="p-4 max-sm:p-2">
      <div className="transition-all duration-300 rounded-2xl pb-4 hover:shadow-lg hover:shadow-indigo-500/20 bg-slate-800/50">
        <motion.div>
          <Image
            src={el.background}
            className="rounded-2xl w-full"
            alt="slider profile"
            width={500}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <div className="flex items-center px-8 justify-between gap-4 mt-4">
          <p className="text-lg max-sm:text-base font-bold">
            NFT Video #{i + 1}
          </p>
          <div className="flex items-center gap-2">
            <small className="text-slate-400">{i + 4} of 100</small>
          </div>
        </div>

        <div className="flex justify-between px-8 mt-4 text-end">
          <div className="border border-slate-100 py-1 px-4 max-sm:px-2 rounded">
            <small className="bg-slate-100 py-1 px-2 rounded text-slate-900 text-xs">
              Current Bid
            </small>
            <p className="text-xl max-sm:text-base font-bold mt-4 gradient-text">
              {i + 2}.000 ETH
            </p>
          </div>

          <div className="grid items-end">
            <small className="text-slate-400">Remaining time</small>
            <p className="text-xl max-sm:text-base font-bold">
              {i + 1}h : 15m : {i + 4}0s
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
