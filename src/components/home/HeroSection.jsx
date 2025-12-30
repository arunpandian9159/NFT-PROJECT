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
          <p className="mb-10 text-lg leading-relaxed text-slate-400">
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
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
            className="rounded-2xl shadow-lg shadow-indigo-500/20 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-indigo-500/30"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
