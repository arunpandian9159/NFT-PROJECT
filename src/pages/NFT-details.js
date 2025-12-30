import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

// Internal Import
import { Category, Brand } from "@/components";
import NFTDetailsPage from "@/components/nft-details/NFTDetailsPage";

// Smart Contract Import
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const NFTDetails = () => {
  const { currentAccount } = useContext(NFTMarketplaceContext);

  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setNft(router.query);
  }, [router.isReady]);

  return (
    <div className="min-h-screen">
      <NFTDetailsPage nft={nft} />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;
