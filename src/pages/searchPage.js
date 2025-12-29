import React, { useEffect, useState, useContext } from "react";

// Internal Import
import Style from "@/styles/searchPage.module.css";
import { Slider, Brand, Loader, Filter } from "@/components";
import { SearchBar } from "@/components/search/searchBarIndex";
import { NFTCardTwo, Banner } from "@/components/collection/collectionIndex";
import images from "@/img";

// Smart Contract Import
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const SearchPage = () => {
  const { fetchNFTs, setError, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    try {
      if (currentAccount) {
        fetchNFTs().then((items) => {
          setNfts(items?.reverse());
          setNftsCopy(items);
        });
      }
    } catch (error) {
      setError("Please reload the browser", error);
    }
  }, [currentAccount]);

  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };

  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
      <Filter />
      {nfts?.length === 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />}
      <Slider />
      <Brand />
    </div>
  );
};

export default SearchPage;
