import React, { useState, useEffect, createContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";

// Internal Import
import {
  NFTMarketplaceAddress,
  NFTMarketplaceABI,
  handleNetworkSwitch,
} from "./constants";

// Fetching Smart Contract - ethers v6 compatible
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

// Connecting With Smart Contract - ethers v6 compatible
const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    // ethers v6: BrowserProvider instead of Web3Provider
    const provider = new ethers.BrowserProvider(connection);
    const signer = await provider.getSigner();

    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};

export const NFTMarketplaceContext = createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "Discover, collect, and sell NFTs";

  // State
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const router = useRouter();

  // Check If Wallet Is Connected
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");
      await handleNetworkSwitch();

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        // ethers v6: BrowserProvider instead of Web3Provider
        const provider = new ethers.BrowserProvider(window.ethereum);
        const getBalance = await provider.getBalance(accounts[0]);
        // ethers v6: formatEther is now a standalone function
        const bal = ethers.formatEther(getBalance);
        setAccountBalance(bal);
        return accounts[0];
      } else {
        console.log("No account");
      }
    } catch (error) {
      console.log("not connected");
    }
  };

  // Connect Wallet Function
  const connectWallet = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");
      await handleNetworkSwitch();
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts);
      setCurrentAccount(accounts[0]);

      connectingWithSmartContract();
    } catch (error) {
      setError("Error while connecting to wallet");
      setOpenError(true);
    }
  };

  // Upload To Pinata IPFS Function
  const uploadToPinata = async (file) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
            pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_KEY,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

        return ImgHash;
      } catch (error) {
        setError("Unable to upload image to Pinata");
        setOpenError(true);
        console.log(error);
      }
    }
    setError("File Is Missing, Kindly provide your file");
    setOpenError(true);
  };

  // Create NFT Function
  const createNFT = async (name, price, image, description, router) => {
    if (!name || !description || !price || !image)
      return setError("Data Is Missing"), setOpenError(true);

    const data = JSON.stringify({ name, description, image });

    try {
      const response = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        data: data,
        headers: {
          pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
          pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_KEY,
          "Content-Type": "application/json",
        },
      });

      const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      console.log(url);

      await createSale(url, price);
      router.push("/searchPage");
    } catch (error) {
      setError("Error while creating NFT");
      setOpenError(true);
    }
  };

  // Create Sale Function - ethers v6 compatible
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      // ethers v6: parseUnits is now a standalone function
      const price = ethers.parseUnits(formInputPrice, "ether");

      const contract = await connectingWithSmartContract();

      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
      console.log(transaction);
    } catch (error) {
      setError("error while creating sale");
      setOpenError(true);
      console.log(error);
    }
  };

  // Fetch NFTs Function - ethers v6 compatible
  const fetchNFTs = async () => {
    try {
      const address = await checkIfWalletConnected();
      if (address) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        // ethers v6: BrowserProvider instead of Web3Provider
        const provider = new ethers.BrowserProvider(connection);

        const contract = fetchContract(provider);

        const data = await contract.fetchMarketItems();

        console.log(data);

        const items = await Promise.all(
          data.map(
            async ({ tokenId, seller, owner, price: unformattedPrice }) => {
              const tokenURI = await contract.tokenURI(tokenId);

              const {
                data: { image, name, description },
              } = await axios.get(tokenURI, {});
              // ethers v6: formatUnits is now a standalone function
              const price = ethers.formatUnits(
                unformattedPrice.toString(),
                "ether"
              );

              return {
                price,
                // ethers v6: BigInt uses Number() instead of .toNumber()
                tokenId: Number(tokenId),
                seller,
                owner,
                image,
                name,
                description,
                tokenURI,
              };
            }
          )
        );
        console.log("NFT", items);
        return items;
      }
    } catch (error) {
      setError("Error while fetching NFTS");
      setOpenError(true);
      console.log(error);
    }
  };

  // Fetching My NFT Or Listed NFTs - ethers v6 compatible
  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const address = await checkIfWalletConnected();
      if (address) {
        const contract = await connectingWithSmartContract();

        const data =
          type === "fetchItemsListed"
            ? await contract.fetchItemsListed()
            : await contract.fetchMyNFTs();

        const items = await Promise.all(
          data.map(
            async ({ tokenId, seller, owner, price: unformattedPrice }) => {
              const tokenURI = await contract.tokenURI(tokenId);
              const {
                data: { image, name, description },
              } = await axios.get(tokenURI);
              // ethers v6: formatUnits is now a standalone function
              const price = ethers.formatUnits(
                unformattedPrice.toString(),
                "ether"
              );

              return {
                price,
                // ethers v6: BigInt uses Number() instead of .toNumber()
                tokenId: Number(tokenId),
                seller,
                owner,
                image,
                name,
                description,
                tokenURI,
              };
            }
          )
        );
        return items;
      }
    } catch (error) {
      setError("Error while fetching listed NFTs");
      setOpenError(true);
      console.log(error);
    }
  };

  // Buy NFT Function - ethers v6 compatible
  const buyNFT = async (nft) => {
    try {
      const address = await checkIfWalletConnected();
      if (address) {
        const contract = await connectingWithSmartContract();
        // ethers v6: parseUnits is now a standalone function
        const price = ethers.parseUnits(nft.price.toString(), "ether");

        const transaction = await contract.createMarketSale(nft.tokenId, {
          value: price,
        });

        await transaction.wait();
        router.push("/author");
      }
    } catch (error) {
      setError("Error While buying NFT");
      setOpenError(true);
    }
  };

  return (
    <NFTMarketplaceContext.Provider
      value={{
        uploadToPinata,
        checkIfWalletConnected,
        connectWallet,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        createSale,
        currentAccount,
        titleData,
        setOpenError,
        openError,
        error,
        accountBalance,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
