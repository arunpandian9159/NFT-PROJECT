import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

import images from "@/images";

const CollectionProfile = () => {
  const cardArray = [1, 2, 3, 4];

  return (
    <div className="w-full z-20 mt-20">
      <div className="w-[80%] max-md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 bg-slate-900 p-10 max-md:p-6 rounded-2xl shadow-lg shadow-indigo-500/20">
        <div>
          <Image
            src={images.nft_image_1}
            alt="nft image"
            width={800}
            height={800}
            className="rounded-2xl w-full"
          />

          <div className="flex items-center justify-center gap-4 mt-6 text-2xl">
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 border border-indigo-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-transparent hover:text-slate-100"
            >
              <TiSocialFacebook />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 border border-indigo-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-transparent hover:text-slate-100"
            >
              <TiSocialInstagram />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 border border-indigo-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-transparent hover:text-slate-100"
            >
              <TiSocialLinkedin />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full grid p-2 border border-indigo-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-transparent hover:text-slate-100"
            >
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-4xl max-md:text-3xl font-bold mb-6 gradient-text">
            Awesome NFTs Collection
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Karafuru is home to 5,555 generative arts where colors reign
            supreme. Leave the drab reality and enter the world of Karafuru by
            Museum of Toys.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {cardArray.map((el, i) => (
              <div
                className="bg-slate-800 p-6 rounded-2xl text-center border border-slate-700 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
                key={i + 1}
              >
                <small className="text-slate-400">Floor price</small>
                <p className="text-2xl font-bold gradient-text">
                  ${i + 1}95,4683
                </p>
                <span className="text-green-400 font-semibold">
                  + {i + 2}.11%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionProfile;
