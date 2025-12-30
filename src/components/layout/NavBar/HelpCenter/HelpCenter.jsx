import React from "react";
import Link from "next/link";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "aboutus",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
    {
      name: "Sign Up",
      link: "signUp",
    },
    {
      name: "LogIn",
      link: "login",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  return (
    <div>
      {helpCenter.map((el, i) => (
        <div
          className="py-2 px-4 transition-all duration-300 hover:bg-slate-100 hover:text-slate-800 rounded cursor-pointer"
          key={i + 1}
        >
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
