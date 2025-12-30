import React from "react";

const Button = ({ btnName, handleClick, icon, classStyle }) => {
  return (
    <div>
      <button
        className={`bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-3 border-none rounded-xl text-base font-semibold text-white cursor-pointer transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5),0_0_50px_rgba(217,70,239,0.3)] ${
          classStyle || ""
        }`}
        onClick={() => handleClick()}
      >
        {icon} {btnName}
      </button>
    </div>
  );
};

export default Button;
