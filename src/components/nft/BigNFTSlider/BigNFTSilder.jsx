import React, { useState, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

import images from "@/images";
import Button from "../../common/Button/Button";

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
        <div className="col-span-6 max-lg:col-span-1 row-span-full bg-slate-900 shadow-md shadow-indigo-500/10 rounded-2xl p-8 max-lg:p-6 z-10 min-h-[90vh]">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            {sliderData[idNumber].title}
          </h2>

          <div className="grid grid-cols-2 max-lg:grid-cols-[1.8fr_1fr] items-center gap-4">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full"
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div>
                <p className="text-slate-400 text-sm">Creator</p>
                <h4 className="flex items-center gap-2 font-semibold">
                  {sliderData[idNumber].name}
                  <span className="text-indigo-400">
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <AiFillFire className="text-5xl max-lg:text-2xl text-orange-500" />
              <div>
                <p className="text-slate-400 text-sm">Collection</p>
                <h4 className="font-semibold">
                  {sliderData[idNumber].collection}
                </h4>
              </div>
            </div>
          </div>

          <div className="border-2 border-slate-700 my-8 px-8 max-lg:px-4 py-4 rounded-xl bg-slate-800/50">
            <small className="bg-slate-700 py-4 px-8 rounded-lg font-semibold inline-block">
              Current Bid
            </small>
            <p className="text-2xl font-bold mt-4 gradient-text">
              {sliderData[idNumber].price}{" "}
              <span className="text-slate-400 text-base">$221,21</span>
            </p>

            <p className="flex items-center gap-4 mt-6 text-slate-400">
              <MdTimer className="text-3xl text-indigo-400" />
              <span>Auction ending in</span>
            </p>

            <div className="flex items-center gap-8 max-lg:gap-4 text-center py-4 pb-8 border-b border-slate-700">
              <div>
                <p className="text-3xl max-lg:text-xl font-black">
                  {sliderData[idNumber].time.days}
                </p>
                <span className="text-slate-400">Days</span>
              </div>
              <div>
                <p className="text-3xl max-lg:text-xl font-black">
                  {sliderData[idNumber].time.hours}
                </p>
                <span className="text-slate-400">Hours</span>
              </div>
              <div>
                <p className="text-3xl max-lg:text-xl font-black">
                  {sliderData[idNumber].time.minutes}
                </p>
                <span className="text-slate-400">mins</span>
              </div>
              <div>
                <p className="text-3xl max-lg:text-xl font-black">
                  {sliderData[idNumber].time.seconds}
                </p>
                <span className="text-slate-400">secs</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8">
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className="flex items-center gap-8 text-3xl mt-8">
            <TbArrowBigLeftLines
              className="cursor-pointer transition-all duration-300 hover:bg-slate-700 hover:rounded-full hover:p-2 hover:text-4xl"
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className="cursor-pointer transition-all duration-300 hover:bg-slate-700 hover:rounded-full hover:p-2 hover:text-4xl"
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className="col-start-6 col-span-7 max-lg:col-span-1 max-lg:col-start-1 row-span-full max-lg:-mt-[70rem] p-4 bg-slate-900 rounded-3xl shadow-md shadow-indigo-500/10">
          <div className="relative">
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className="rounded-2xl w-full"
              width={800}
              height={800}
            />

            <div className="absolute top-6 right-6 flex items-center gap-4 text-lg bg-slate-100 text-slate-800 py-2 px-4 rounded-full font-semibold">
              <AiFillHeart className="text-red-500" />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;
