import React, { useState, useContext } from "react";
import Image from "next/image";

import images from "@/images";

// Smart Contract Import
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const ConnectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);

  const providerArray = [
    { provider: images.provider1, name: "Metamask" },
    { provider: images.provider2, name: "WalletConnect" },
    { provider: images.provider3, name: "WalletLink" },
    { provider: images.provider1, name: "Formatic" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="w-[80%] max-md:w-[90%] mx-auto max-w-2xl">
        <h1 className="text-5xl max-md:text-3xl font-bold mb-6 text-center gradient-text">
          Connect your wallet
        </h1>
        <p className="text-slate-400 text-lg text-center mb-12">
          Connect with one of our available wallet providers or create a new one
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {providerArray.map((el, i) => (
            <div
              className={`flex items-center gap-6 p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 ${
                activeBtn === i + 1
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 border-indigo-500"
                  : "border-slate-700 hover:border-indigo-500"
              }`}
              key={i + 1}
              onClick={() => {
                setActiveBtn(i + 1);
                connectWallet();
              }}
            >
              <Image
                src={el.provider}
                alt={el.name}
                width={50}
                height={50}
                className="rounded-xl"
              />
              <p className="text-xl font-semibold">{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
