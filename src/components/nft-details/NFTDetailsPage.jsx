import React from "react";

import { NFTDescription, NFTDetailsImg } from "./NFTDetailsIndex";

const NFTDetailsPage = ({ nft }) => {
  return (
    <div className="w-full my-20 max-md:my-8">
      <div className="w-[80%] max-md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-20">
        <NFTDetailsImg nft={nft} />
        <NFTDescription nft={nft} />
      </div>
    </div>
  );
};

export default NFTDetailsPage;
