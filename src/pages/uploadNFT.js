import React, { useContext } from "react";

// Internal Import
import { UploadNFT } from "@/components/upload/uploadNFTIndex";

// Smart Contract Import
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const UploadNFTPage = () => {
  const { uploadToIPFS, createNFT, uploadToPinata } = useContext(
    NFTMarketplaceContext
  );

  return (
    <div className="min-h-screen py-20">
      <div className="w-[80%] max-md:w-[90%] mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl max-md:text-3xl font-bold mb-6 gradient-text">
            Create New NFT
          </h1>
          <p className="text-slate-400 text-lg">
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Image, Audio</h2>
          <p className="text-slate-400">
            File types supported: JPG, PNG, GIF, MP3
          </p>
        </div>

        <div>
          <UploadNFT
            uploadToIPFS={uploadToIPFS}
            createNFT={createNFT}
            uploadToPinata={uploadToPinata}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadNFTPage;
