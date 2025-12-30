import React from "react";

const Button = ({ btnName, handleClick, icon, classStyle }) => {
  return (
    <div>
      <button
        className={`bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 border-none rounded-xl text-base font-semibold text-white cursor-pointer transition-all duration-300 shadow-lg shadow-indigo-500/20 flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30 active:translate-y-0 ${
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
