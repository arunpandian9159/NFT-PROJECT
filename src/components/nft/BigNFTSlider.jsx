import React, { useState, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

import images from "@/images";
import Button from "../common/Button";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Daulat Hussain",
      collection: "GYm",
      price: "00664 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: { days: 21, hours: 40, minutes: 81, seconds: 15 },
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Shoaib Hussain",
      collection: "Home",
      price: "0000004 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: { days: 77, hours: 11, minutes: 21, seconds: 45 },
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "0000064 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: { days: 37, hours: 20, minutes: 11, seconds: 55 },
    },
    {
      title: "Home NFT",
      id: 4,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "4664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_1,
      time: { days: 87, hours: 29, minutes: 10, seconds: 15 },
    },
  ];

  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div>
      <div className="mx-auto w-[80%] max-lg:w-[90%] py-32 max-lg:pt-[28rem] grid grid-cols-12 max-lg:grid-cols-1 items-center gap-4">
        <div className="col-span-6 max-lg:col-span-1 row-span-full bg-gray-900 rounded-2xl p-8 max-lg:p-6 z-10 min-h-[90vh] shadow-[8px_8px_16px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(50,50,50,0.3)] border border-cyan-400/10">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            {sliderData[idNumber].title}
          </h2>

          <div className="grid grid-cols-2 max-lg:grid-cols-[1.8fr_1fr] items-center gap-4">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full ring-2 ring-cyan-400/50"
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div>
                <p className="text-gray-400 text-sm">Creator</p>
                <h4 className="flex items-center gap-2 font-semibold">
                  {sliderData[idNumber].name}
                  <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <AiFillFire className="text-5xl max-lg:text-2xl text-fuchsia-500 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]" />
              <div>
                <p className="text-gray-400 text-sm">Collection</p>
                <h4 className="font-semibold">
                  {sliderData[idNumber].collection}
                </h4>
              </div>
            </div>
          </div>

          <div className="border-2 border-cyan-400/20 my-8 px-8 max-lg:px-4 py-4 rounded-xl bg-gray-950/50">
            <small className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 py-4 px-8 rounded-lg font-semibold inline-block text-white shadow-[0_4px_15px_rgba(34,211,238,0.3)]">
              Current Bid
            </small>
            <p className="text-2xl font-bold mt-4 gradient-text">
              {sliderData[idNumber].price}{" "}
              <span className="text-gray-400 text-base">$221,21</span>
            </p>

            <p className="flex items-center gap-4 mt-6 text-gray-400">
              <MdTimer className="text-3xl text-cyan-400" />
              <span>Auction ending in</span>
            </p>

            <div className="flex items-center gap-8 max-lg:gap-4 text-center py-4 pb-8 border-b border-gray-700">
              <div>
                <p className="text-3xl max-lg:text-xl font-black text-cyan-400">
                  {sliderData[idNumber].time.days}
                </p>
                <span className="text-gray-400">Days</span>
              </div>
              <div>
                <p className="text-3xl max-lg:text-xl font-black text-cyan-400">
                  {sliderData[idNumber].time.hours}
                </p>
                <span className="text-gray-400">Hours</span>
              </div>
              <div>
                <p className="text-3xl max-lg:text-xl font-black text-cyan-400">
                  {sliderData[idNumber].time.minutes}
                </p>
                <span className="text-gray-400">mins</span>
              </div>
              <div>
                <p className="text-3xl max-lg:text-xl font-black text-cyan-400">
                  {sliderData[idNumber].time.seconds}
                </p>
                <span className="text-gray-400">secs</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8">
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className="flex items-center gap-8 text-3xl mt-8">
            <TbArrowBigLeftLines
              className="cursor-pointer transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-400 rounded-full p-2 hover:text-4xl"
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className="cursor-pointer transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-400 rounded-full p-2 hover:text-4xl"
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className="col-start-6 col-span-7 max-lg:col-span-1 max-lg:col-start-1 row-span-full max-lg:-mt-[70rem] p-4 bg-gray-900 rounded-3xl shadow-[8px_8px_16px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(50,50,50,0.3)] border border-cyan-400/10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className="relative rounded-2xl w-full"
              width={800}
              height={800}
            />

            <div className="absolute top-6 right-6 flex items-center gap-4 text-lg bg-gray-950 text-white py-2 px-4 rounded-full font-semibold border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <AiFillHeart className="text-fuchsia-500 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]" />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;
