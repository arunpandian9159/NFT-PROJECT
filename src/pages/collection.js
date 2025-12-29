import React from "react";

// Internal Import
import Style from "@/styles/collection.module.css";
import images from "@/images";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "@/components/collection/collectionIndex";
import { Slider, Brand, Filter } from "@/components";

const Collection = () => {
  const collectionArray = [
    { image: "img/nft-image-1.png" },
    { image: "img/nft-image-2.png" },
    { image: "img/nft-image-3.png" },
    { image: "img/nft-image-1.png" },
    { image: "img/nft-image-2.png" },
    { image: "img/nft-image-3.png" },
    { image: "img/nft-image-1.png" },
    { image: "img/nft-image-2.png" },
  ];

  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default Collection;
