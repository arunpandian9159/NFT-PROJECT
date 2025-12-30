import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Button from "../common/Button";
import images from "@/images";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto my-16 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="pr-0 lg:pr-8">
          <h1 className="text-4xl lg:text-6xl leading-tight mb-6 font-extrabold gradient-text">
            {titleData} 🚀
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-gray-400">
            Discover, collect, and trade extraordinary NFTs in the most advanced
            marketplace. Create your unique digital assets and join the future
            of digital ownership.
          </p>
          <Button
            btnName="Explore NFTs"
            handleClick={() => router.push("/searchPage")}
          />
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
            className="relative rounded-2xl transition-all duration-300 group-hover:scale-[1.02] shadow-[8px_8px_16px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(50,50,50,0.3)]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
