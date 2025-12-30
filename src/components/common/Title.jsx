import React from "react";

const Title = ({ heading, paragraph }) => {
  return (
    <div className="w-full my-16 mb-8">
      <div className="w-[90%] max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl leading-tight mb-4 font-bold gradient-text">
          {heading}
        </h2>
        <p className="text-lg text-gray-400 max-w-[600px] mx-auto leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Title;
