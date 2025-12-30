import React, { useState, useEffect, useContext } from "react";

// Internal Import
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  Slider,
  Loader,
} from "@/components";
import { getTopCreators } from "@/lib/creators";

// Importing Contract Data
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected, currentAccount, fetchNFTs } = useContext(
    NFTMarketplaceContext
  );
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  useEffect(() => {
    if (currentAccount) {
      fetchNFTs().then((items) => {
        setNfts(items?.reverse() || []);
        setNftsCopy(items || []);
      });
    }
  }, [currentAccount]);

  const creators = getTopCreators(nfts || []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <Service />
      <BigNFTSlider />

      {creators.length === 0 ? (
        <Loader />
      ) : (
        <FollowerTab TopCreator={creators} />
      )}

      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      {nfts?.length === 0 ? <Loader /> : <NFTCard NFTData={nfts} />}

      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
