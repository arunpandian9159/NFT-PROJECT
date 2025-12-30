import React from "react";
import Image from "next/image";

import images from "@/images";

const Loader = () => {
  return (
    <div className="w-full my-16">
      <div className="w-1/2 mx-auto text-center">
        <div className="mb-56 -mt-8 animate-spin-slow">
          <Image
            src={images.loader}
            alt="loader"
            width={200}
            height={200}
            className="rounded-full mx-auto"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
