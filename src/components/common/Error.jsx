import React, { useContext } from "react";
import Image from "next/image";

import images from "@/images";
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const Error = () => {
  const { error, setOpenError } = useContext(NFTMarketplaceContext);

  return (
    <div
      className="bg-gray-950/90 w-full h-full fixed z-[1111111] top-0 left-0 cursor-pointer flex items-center justify-center backdrop-blur-sm"
      onClick={() => setOpenError(false)}
    >
      <div className="bg-gray-900 py-8 px-20 rounded-2xl text-center w-[90%] md:w-[40%] max-md:px-8 animate-scale-in shadow-[8px_8px_16px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(50,50,50,0.3)] border border-fuchsia-500/30">
        <div>
          <Image
            alt="error"
            src={images.errorgif}
            width={200}
            height={200}
            className="mx-auto rounded-xl"
          />
          <p className="text-xl text-white mt-6">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
