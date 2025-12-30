import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

import { Button } from "@/components";

// Smart Contract Import
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const ReSellToken = () => {
  const { createSale } = useContext(NFTMarketplaceContext);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();
  const { id, tokenURI } = router.query;

  const fetchNFT = async () => {
    if (!tokenURI) return;

    const { data } = await axios.get(tokenURI);

    setImage(data.image);
  };

  useEffect(() => {
    fetchNFT();
  }, [id]);

  const resell = async () => {
    try {
      await createSale(tokenURI, price, true, id);
      router.push("/author");
    } catch (error) {
      console.log("Error while resell", error);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="w-[80%] max-md:w-[90%] mx-auto max-w-2xl">
        <h1 className="text-5xl max-md:text-3xl font-bold mb-12 text-center gradient-text">
          ReSell Your Token, Set Price
        </h1>
        <div className="mb-8">
          <label htmlFor="name" className="block font-bold text-xl mb-2">
            Price
          </label>
          <input
            type="number"
            min={1}
            placeholder="ReSell price in ETH"
            className="w-full border border-slate-700 py-4 px-6 rounded-2xl bg-slate-800 outline-none text-slate-100 focus:border-indigo-500 transition-colors"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="flex justify-center mb-8">
          {image && (
            <Image
              src={image}
              alt="resell nft"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          )}
        </div>

        <div className="flex justify-center">
          <Button
            btnName="Resell NFT"
            handleClick={() => resell()}
            classStyle="text-xl px-12"
          />
        </div>
      </div>
    </div>
  );
};

export default ReSellToken;
