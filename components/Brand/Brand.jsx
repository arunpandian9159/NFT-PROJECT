import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";

const Brand = () => {
  return (
    <div className={Style.brand}>
      <div className={Style.brand_box}>
        <div className={Style.brand_box_left}>
          <h1>Earn crypto with the top NFTs</h1>
          <p>
            A creative agency that leads and inspires your business. We help
            businesses grow by providing them with state-of-the-art NFT
            solutions and digital marketplace technology.
          </p>
          <div className={Style.brand_box_left_btn}>
            <button>Create</button>
            <button>Discover</button>
          </div>
        </div>
        <div className={Style.brand_box_right}>
          <Image
            src={images.nft_image_1}
            alt="NFT Brand"
            width={800}
            height={600}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
