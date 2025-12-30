import React, { useEffect, useState } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

const SearchBar = ({ onHandleSearch, onClearSearch }) => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  return (
    <div className="w-full">
      <div className="w-[40%] max-md:w-[90%] mx-auto bg-slate-900 flex rounded-full items-center mt-32 max-md:mt-8 mb-12 max-md:mb-4 shadow-lg shadow-indigo-500/20 border border-indigo-500/20">
        <BsSearch className="text-4xl px-3 cursor-pointer text-slate-100" />
        <input
          type="text"
          placeholder="Type your keyword..."
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
          className="w-[85%] border-0 outline-0 py-8 px-4 bg-slate-900 text-slate-100 placeholder:text-slate-400 placeholder:text-lg"
        />
        <BsArrowRight className="text-4xl px-3 cursor-pointer text-slate-100 hover:text-indigo-400 transition-colors" />
      </div>
    </div>
  );
};

export default SearchBar;
