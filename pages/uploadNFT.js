import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/upload-nft.module.css";
import { UploadNFT } from "../UploadNFT/uploadNFTIndex";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const uploadNFT = () => {
  const { uploadToIPFS, createNFT, uploadToPinata } = useContext(
    NFTMarketplaceContext
  );
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>

        <div className={Style.uploadNFT_box_title}>
          <h2>Image,Audio</h2>
          <p>
            File types supported: JPG, PNG, GIF, MP3, 
          </p>
        </div>

        <div className={Style.uploadNFT_box_form}>
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

export default uploadNFT;
