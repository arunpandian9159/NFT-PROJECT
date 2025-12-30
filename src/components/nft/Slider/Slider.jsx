import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

import SliderCard from "./SliderCard/SliderCard";
import images from "@/images";

const Slider = () => {
  const FollowingArray = [
    { background: images.creatorbackground3, user: images.user3 },
    { background: images.creatorbackground4, user: images.user4 },
    { background: images.creatorbackground5, user: images.user5 },
    { background: images.creatorbackground6, user: images.user6 },
    { background: images.creatorbackground1, user: images.user1 },
    { background: images.creatorbackground2, user: images.user2 },
  ];

  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  });

  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="w-full">
      <div className="w-[80%] max-md:w-[90%] mx-auto pb-32">
        <h2 className="text-4xl max-md:text-3xl font-bold mb-6 gradient-text">
          Explore NFTs Video
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-slate-400">
            Click on play icon & enjoy NFTs Video
          </p>
          <div className="flex items-center gap-8 text-3xl">
            <div
              className="border border-slate-100 p-4 max-md:p-2 flex items-center rounded-full transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-500 hover:to-violet-500 hover:border-transparent hover:text-white hover:shadow-lg"
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className="border border-slate-100 p-4 max-md:p-2 flex items-center rounded-full transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-500 hover:to-violet-500 hover:border-transparent hover:text-white hover:shadow-lg"
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        <motion.div className="w-full overflow-hidden" ref={dragSlider}>
          <motion.div
            ref={dragSlider}
            className="grid grid-cols-[repeat(6,26.4rem)] max-md:grid-cols-[repeat(6,95%)] gap-4 py-16 max-md:py-8 cursor-grab scrollbar-hide"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {FollowingArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
