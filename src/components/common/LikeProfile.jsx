import React from "react";
import Image from "next/image";

import images from "@/images";

const LikeProfile = () => {
  const imageArray = [images.user1, images.user2, images.user3, images.user4];

  return (
    <div className="flex items-start -space-x-2">
      {imageArray.map((el, i) => (
        <div className="border-2 border-slate-100 rounded-full" key={i + 1}>
          <Image
            src={el}
            width={15}
            height={15}
            alt={`user ${i + 1}`}
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;
