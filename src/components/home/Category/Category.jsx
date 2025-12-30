import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

import images from "@/images";

const Category = () => {
  const CategoryArray = [
    { images: images.creatorbackground1, name: "Dance Monkey" },
    { images: images.creatorbackground2, name: "Sports" },
    { images: images.creatorbackground3, name: "Entertainment Art" },
    { images: images.creatorbackground4, name: "Time Life" },
    { images: images.creatorbackground5, name: "Animals Art" },
    { images: images.creatorbackground6, name: "Music" },
    { images: images.creatorbackground7, name: "Digital Arts" },
    { images: images.creatorbackground8, name: "Hobby" },
    { images: images.creatorbackground8, name: "Bad Arts" },
    { images: images.creatorbackground9, name: "Arts" },
    { images: images.creatorbackground10, name: "My Fav" },
  ];

  return (
    <div className="w-[80%] mx-auto max-md:w-[90%]">
      <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
        {CategoryArray.map((el, i) => (
          <div
            className="leading-none transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer pb-4 hover:shadow-lg hover:shadow-indigo-500/20 bg-slate-800/50 group"
            key={i + 1}
          >
            <Image
              src={el.images}
              className="rounded-2xl w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
              alt="Background image"
              width={350}
              height={150}
            />

            <div className="flex items-center p-4 gap-4">
              <span className="text-4xl mt-4 text-indigo-400">
                <BsCircleFill />
              </span>
              <div>
                <h4 className="text-slate-100 font-semibold">{el.name}</h4>
                <small className="text-slate-400">{i + 1}995 NFTs</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
