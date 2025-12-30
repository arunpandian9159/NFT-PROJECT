import React from "react";
import Image from "next/image";

import images from "@/images";

const Loader = () => {
  return (
    <div className="w-full my-16">
      <div className="w-1/2 mx-auto text-center">
        <div className="mb-56 -mt-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <Image
              src={images.loader}
              alt="loader"
              width={200}
              height={200}
              className="relative rounded-full mx-auto animate-spin"
              style={{ objectFit: "cover", animationDuration: "2s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
