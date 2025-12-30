import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import images from "@/images";

const Brand = () => {
  const router = useRouter();

  return (
    <div className="w-full py-16 px-8 bg-gradient-to-br from-slate-800/90 to-slate-900/95 rounded-2xl my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-violet-400 bg-clip-text text-transparent mb-4">
            Earn crypto with the top NFTs
          </h1>
          <p className="text-base text-slate-400 leading-relaxed mb-8">
            A creative agency that leads and inspires your business. We help
            businesses grow by providing them with state-of-the-art NFT
            solutions and digital marketplace technology.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button
              onClick={() => router.push("/uploadNFT")}
              className="py-3 px-8 rounded-full text-base font-medium cursor-pointer transition-all duration-300 bg-gradient-to-r from-violet-500 to-indigo-500 border-none text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30"
            >
              Create
            </button>
            <button
              onClick={() => router.push("/searchPage")}
              className="py-3 px-8 rounded-full text-base font-medium cursor-pointer transition-all duration-300 bg-transparent border border-violet-500/50 text-white hover:bg-violet-500/10 hover:border-violet-500"
            >
              Discover
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={images.nft_image_1}
            alt="NFT Brand"
            width={800}
            height={600}
            className="rounded-2xl shadow-2xl"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
