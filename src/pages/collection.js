import React from "react";

// Internal Import
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
    <div className="min-h-screen">
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <div className="w-[80%] max-md:w-[90%] mx-auto my-16">
        <NFTCardTwo NFTData={collectionArray} />
      </div>
      <Slider />
      <Brand />
    </div>
  );
};

export default Collection;
