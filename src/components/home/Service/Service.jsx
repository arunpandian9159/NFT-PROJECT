import React from "react";
import Image from "next/image";

import images from "@/images";

const Service = () => {
  const services = [
    {
      image: images.service1,
      step: "Step 1",
      title: "Filter & Discover",
      description:
        "Browse through thousands of unique NFTs using advanced filters and discover your next digital treasure.",
    },
    {
      image: images.service2,
      step: "Step 2",
      title: "Connect Wallet",
      description:
        "Securely connect your crypto wallet to start buying, selling, and trading NFTs on our platform.",
    },
    {
      image: images.service3,
      step: "Step 3",
      title: "Create NFTs",
      description:
        "Mint your own unique digital assets and showcase your creativity to the world.",
    },
    {
      image: images.service1,
      step: "Step 4",
      title: "Start Trading",
      description:
        "Buy, sell, and trade NFTs with confidence in our secure marketplace ecosystem.",
    },
  ];

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto my-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-slate-800 p-8 rounded-2xl border border-indigo-500/10 transition-all duration-300 shadow-md shadow-indigo-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="my-8">
              <span className="py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold text-sm">
                {service.step}
              </span>
            </p>
            <h3 className="text-xl font-semibold mb-3 text-slate-100">
              {service.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
