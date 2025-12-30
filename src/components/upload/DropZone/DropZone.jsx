import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import images from "@/images";

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  uploadToIPFS,
  uploadToPinata,
  setImage,
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToPinata(acceptedFile[0]);
    setFileUrl(url);
    setImage(url);
    console.log(url);
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className="w-full my-12">
      <div
        className="border-4 border-dashed border-indigo-500 rounded-2xl text-center p-8 cursor-pointer hover:bg-slate-800/50 transition-colors"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div>
          <p className="text-slate-400 mb-4">{title}</p>
          <div className="my-8">
            <Image
              src={images.upload}
              alt="upload"
              width={100}
              height={100}
              className="rounded-2xl mx-auto"
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-xl font-bold text-slate-100">{heading}</p>
          <p className="text-slate-400">{subHeading}</p>
        </div>
      </div>

      {fileUrl && (
        <aside className="p-8 border-4 border-dashed border-indigo-500 mt-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_4fr] gap-12">
            <img src={fileUrl} alt="nft image" className="w-full rounded-2xl" />

            <div>
              <div className="flex flex-wrap items-center justify-between font-bold text-lg gap-4">
                <p>
                  <span className="text-indigo-400 mr-4">NFT Name:</span>
                  {name || ""}
                </p>
                <p>
                  <span className="text-indigo-400 mr-4">Website:</span>
                  {website || ""}
                </p>
              </div>

              <div className="my-8">
                <p>
                  <span className="text-lg font-bold text-indigo-400 mr-4">
                    Description
                  </span>
                  <span className="text-slate-400">{description || ""}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <p>
                  <span className="text-lg font-bold text-indigo-400 mr-4 block">
                    Royalties
                  </span>
                  {royalties || ""}
                </p>
                <p>
                  <span className="text-lg font-bold text-indigo-400 mr-4 block">
                    FileSize
                  </span>
                  {fileSize || ""}
                </p>
                <p>
                  <span className="text-lg font-bold text-indigo-400 mr-4 block">
                    Properties
                  </span>
                  {properties || ""}
                </p>
                <p>
                  <span className="text-lg font-bold text-indigo-400 mr-4 block">
                    Category
                  </span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
