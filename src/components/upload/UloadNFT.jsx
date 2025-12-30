import React, { useState } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import { useRouter } from "next/router";

import images from "@/images";
import Button from "../common/Button";
import { DropZone } from "./uploadNFTIndex.js";

const UploadNFT = ({ uploadToIPFS, createNFT, uploadToPinata }) => {
  const [price, setPrice] = useState("");
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState(0);
  const [properties, setProperties] = useState("");
  const [image, setImage] = useState(null);

  const router = useRouter();

  const categoryArry = [
    { image: images.nft_image_1, category: "Sports" },
    { image: images.nft_image_2, category: "Arts" },
    { image: images.nft_image_3, category: "Music" },
    { image: images.nft_image_1, category: "Digital" },
    { image: images.nft_image_2, category: "Time" },
    { image: images.nft_image_3, category: "Photography" },
  ];

  return (
    <div>
      <DropZone
        title="JPG, PNG, WEBM , MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
        name={name}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        properties={properties}
        setImage={setImage}
        uploadToIPFS={uploadToIPFS}
        uploadToPinata={uploadToPinata}
      />

      <div className="mt-8">
        <div className="mb-6">
          <label htmlFor="nft" className="block text-lg font-semibold mb-2">
            Item Name
          </label>
          <input
            type="text"
            placeholder="NFT Name"
            className="w-full py-4 px-6 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="website" className="block text-lg font-semibold mb-2">
            Website
          </label>
          <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl overflow-hidden focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all">
            <div className="px-4 text-2xl text-indigo-400">
              <MdOutlineHttp />
            </div>
            <input
              type="text"
              placeholder="https://website.com"
              className="flex-1 py-4 px-2 bg-transparent text-slate-100 outline-none"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <p className="text-slate-400 text-sm mt-2 px-4">
            Ciscrypt will include a link to this URL on this item's detail page.
          </p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-lg font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            cols="30"
            rows="6"
            placeholder="Something about your NFT in few words"
            className="w-full py-4 px-6 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all resize-y"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p className="text-slate-400 text-sm mt-2">
            The description will be included on the item's detail page.
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Choose Collection
          </label>
          <p className="text-slate-400 text-sm mb-4">
            Choose an existing collection or create a new one
          </p>

          <div className="flex flex-wrap gap-4">
            {categoryArry.map((el, i) => (
              <div
                className={`border rounded-2xl p-4 cursor-pointer transition-all hover:border-indigo-500 ${
                  active == i + 1
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 border-indigo-500"
                    : "border-slate-700"
                }`}
                key={i + 1}
                onClick={() => {
                  setActive(i + 1);
                  setCategory(el.category);
                }}
              >
                <div className="flex items-center gap-8">
                  <div>
                    <Image
                      src={el.image}
                      alt="background image"
                      width={70}
                      height={70}
                      className="rounded-full"
                    />
                  </div>
                  <div
                    className={`rounded-full p-1 ${
                      active == i + 1
                        ? "bg-white text-indigo-500"
                        : "bg-slate-100 text-slate-900"
                    }`}
                  >
                    <TiTick />
                  </div>
                </div>
                <p className="text-lg font-bold mt-2">
                  Crypto Legend - {el.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-lg font-semibold mb-2">
              Royalties
            </label>
            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl overflow-hidden focus-within:border-indigo-500 transition-all">
              <div className="px-4 text-xl text-indigo-400">
                <FaPercent />
              </div>
              <input
                type="text"
                placeholder="20%"
                className="flex-1 py-4 px-2 bg-transparent text-slate-100 outline-none"
                onChange={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Size</label>
            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl overflow-hidden focus-within:border-indigo-500 transition-all">
              <div className="px-4 text-xl text-indigo-400">
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                placeholder="165MB"
                className="flex-1 py-4 px-2 bg-transparent text-slate-100 outline-none"
                onChange={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">
              Properties
            </label>
            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl overflow-hidden focus-within:border-indigo-500 transition-all">
              <div className="px-4 text-xl text-indigo-400">
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Properties"
                className="flex-1 py-4 px-2 bg-transparent text-slate-100 outline-none"
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Price</label>
            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl overflow-hidden focus-within:border-indigo-500 transition-all">
              <div className="px-4 text-xl text-indigo-400">
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Price in ETH"
                className="flex-1 py-4 px-2 bg-transparent text-slate-100 outline-none"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 my-16 gap-8">
          <Button
            btnName="Upload"
            handleClick={async () =>
              createNFT(name, price, image, description, router)
            }
            classStyle="w-full text-lg"
          />
          <Button
            btnName="Preview"
            handleClick={() => {}}
            classStyle="w-full text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
