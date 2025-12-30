import React from "react";
import Link from "next/link";

const Discover = () => {
  //--------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "searchPage",
    },
    {
      name: "Author Profile",
      link: "author",
    },
    {
      name: "Account Setting",
      link: "account",
    },
    {
      name: "Upload NFT",
      link: "uploadNFT",
    },
    {
      name: "Connect Wallet",
      link: "connectWallet",
    },
  ];

  return (
    <div>
      {discover.map((el, i) => (
        <div
          key={i + 1}
          className="py-2 px-4 transition-all duration-300 z-[2222222222] hover:bg-slate-100 hover:text-slate-800 rounded cursor-pointer"
        >
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
