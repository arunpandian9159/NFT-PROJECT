import React from "react";
import Image from "next/image";

import { Brand } from "@/components";
import images from "@/images";

const AboutUs = () => {
  const founderArray = [
    { name: "Arunpandian", position: "Co-founder", images: images.founder1 },
    { name: "Tejas", position: "Co-founder", images: images.founder2 },
    { name: "Gokulakannan", position: "Co-founder", images: images.founder3 },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="w-[80%] max-md:w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h1 className="text-5xl max-md:text-3xl font-bold mb-6 gradient-text">
              👋 About Us.
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              We're impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div>
            <Image
              src={images.hero2}
              alt="About us"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">⛱ Founder</h2>
          <p className="text-slate-400 text-lg">
            We're impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founderArray.map((el, i) => (
            <div key={i} className="text-center group">
              <Image
                src={el.images}
                alt={el.name}
                width={500}
                height={500}
                className="rounded-2xl w-full group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300"
              />
              <h3 className="text-2xl font-bold mt-6 gradient-text">
                {el.name}
              </h3>
              <p className="text-slate-400">{el.position}</p>
            </div>
          ))}
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default AboutUs;
