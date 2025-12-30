import React, { useContext } from "react";
import Image from "next/image";

import images from "@/images";
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const Error = () => {
  const { error, setOpenError } = useContext(NFTMarketplaceContext);

  return (
    <div
      className="bg-slate-900/90 w-full h-full fixed z-[1111111] top-0 left-0 cursor-pointer flex items-center justify-center"
      onClick={() => setOpenError(false)}
    >
      <div className="bg-slate-900 py-8 px-20 rounded-2xl shadow-lg shadow-indigo-500/20 text-center w-[90%] md:w-[40%] max-md:px-8 animate-scale-in">
        <div>
          <Image
            alt="error"
            src={images.errorgif}
            width={200}
            height={200}
            className="mx-auto rounded-xl"
          />
          <p className="text-xl text-slate-100 mt-6">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
