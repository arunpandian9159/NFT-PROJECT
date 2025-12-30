import React from "react";
import { TiTick } from "react-icons/ti";

import Button from "../common/Button";

const Subscription = ({ el, i }) => {
  return (
    <div className="border border-cyan-400/20 p-8 rounded-2xl relative transition-all duration-300 cursor-pointer bg-gray-900 shadow-[8px_8px_16px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(50,50,50,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:border-cyan-400/50">
      <div>
        <span className="text-3xl font-black gradient-text">{el.plan}</span>
        {el.popular && (
          <small className="absolute right-12 top-8 text-lg bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white py-2 px-4 rounded-lg font-semibold shadow-[0_0_15px_rgba(34,211,238,0.4)]">
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
              <span className="text-cyan-400 text-2xl drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
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
