import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaHouse, FaLocationDot } from "react-icons/fa6";
import { HiCurrencyRupee } from "react-icons/hi";

const Search = () => {
  return (
    <div className="bg-white m-auto w-[100%] h-[150px] md:w-3/4 lg:w-1/2 mt-8 p-4 rounded-lg shadow-lg flex items-center">
      <div className="flex items-center w-full rounded-lg overflow-hidden">
        <div className="flex items-center border border-black-800 rounded-lg ">
          <FaLocationDot size={24} className="text-green-700 mx-2" />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 text-lg focus:outline-none"
          />
        </div>
        <div className="flex items-center border border-black-800 rounded-lg ">
          <FaHouse size={24} className="text-green-700 mx-2" />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 text-lg focus:outline-none"
          />
        </div>
        <div className="flex items-center border border-black-800 rounded-lg ">
          <HiCurrencyRupee size={24} className="text-green-700 mx-2" />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 text-lg focus:outline-none"
          />
        </div>
      </div>
      <button className="bg-blue-500 text-white p-2 flex items-center justify-center">
        <FaSearch size={18} />
      </button>
    </div>
  );
};

export default Search;
