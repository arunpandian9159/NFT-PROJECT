import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../../common/Button/Button";
import images from "../../hooks";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../../context/NFTMarketplaceContext";

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1 className="gradient-text">{titleData} 🚀</h1>
          <p>
            Discover, collect, and trade extraordinary NFTs in the most advanced
            marketplace. Create your unique digital assets and join the future
            of digital ownership.
          </p>
          <Button
            btnName="Explore NFTs"
            handleClick={() => router.push("/searchPage")}
          />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
