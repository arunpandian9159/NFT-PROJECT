import React from "react";
import { TiTick } from "react-icons/ti";

import Button from "../common/Button/Button";

const Subscription = ({ el, i }) => {
  return (
    <div className="border border-slate-100 p-8 rounded-2xl relative transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500 bg-slate-800/50">
      <div>
        <span className="text-3xl font-black gradient-text">{el.plan}</span>
        {el.popular && (
          <small className="absolute right-12 top-8 text-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white py-2 px-4 rounded-lg font-semibold">
            {el.popular}
          </small>
        )}
        <p className="text-5xl font-black mt-6 gradient-text">{el.price}</p>

        <div className="my-16">
          {el.service.map((service, idx) => (
            <p
              className="flex items-center gap-8 font-medium text-xl max-md:text-base py-2"
              key={idx + 1}
            >
              <span className="text-green-400 text-2xl">
                <TiTick />
              </span>
              {service}
            </p>
          ))}
        </div>
        <Button
          btnName="Submit"
          handleClick={() => {}}
          classStyle="w-full text-lg"
        />
      </div>
    </div>
  );
};

export default Subscription;
