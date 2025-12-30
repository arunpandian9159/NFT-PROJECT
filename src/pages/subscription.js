import React from "react";

import Subscription from "../components/subscription/Subscription";

const SubscriptionPage = () => {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$5/mo",
      popular: "",
      service: ["Automated Reporting", "Faster Processing", "Customizations"],
      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "BASIC",
      price: "$15/mo",
      popular: "POPULAR",
      service: [
        "Everything in Starter",
        "100 Builds",
        "Progress Reports",
        "Premium Support",
      ],
      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "PLUS",
      price: "$25/mo",
      popular: "",
      service: [
        "Everything in Basic",
        "Unlimited Builds",
        "Advanced Analytics",
        "Company Evaluations",
      ],
      info: "Literally you probably haven't heard of them jean shorts.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="w-[80%] max-md:w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl max-md:text-3xl font-bold mb-6 gradient-text">
            💎 Subscription
          </h1>
          <p className="text-slate-400 text-lg">
            Pricing to fit the needs of any company size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionArray.map((el, i) => (
            <Subscription key={i + 1} i={i} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
