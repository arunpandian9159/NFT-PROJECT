import React from "react";
import Image from "next/image";

const Banner = ({ bannerImage }) => {
  return (
    <div>
      <div className="hidden md:block">
        <Image
          src={bannerImage}
          style={{ objectFit: "cover" }}
          alt="background"
          width={1600}
          height={100}
          className="w-full"
        />
      </div>

      <div className="block md:hidden">
        <Image
          src={bannerImage}
          style={{ objectFit: "cover" }}
          alt="background"
          width={1600}
          height={300}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
