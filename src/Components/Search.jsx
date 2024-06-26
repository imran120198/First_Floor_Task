import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaHouse, FaLocationDot } from "react-icons/fa6";
import { HiCurrencyRupee } from "react-icons/hi";

const Search = () => {
  return (
    <div className="absolute bottom-[-75px] left-1/2 transform -translate-x-1/2 bg-white w-[90%] md:w-3/4 lg:w-1/2 p-4 rounded-lg shadow-lg flex flex-col space-y-4 z-80">
      <div className="flex justify-around w-[150px] text-lg">
        <button className="cursor-pointer">Buy</button>
        <button className="cursor-pointer">Rent</button>
        <button className="cursor-pointer">PGs</button>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full rounded-lg overflow-hidden space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center border border-black-800 rounded-lg w-full md:w-auto">
          <FaLocationDot size={20} className="text-green-700 mx-2" />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 text-lg focus:outline-none"
          />
        </div>
        <div className="flex items-center border border-black-800 rounded-lg w-full md:w-auto">
          <FaHouse size={22} className="text-green-700 mx-2" />
          <input
            type="text"
            placeholder="Property Type"
            className="w-full p-2 text-lg focus:outline-none"
          />
        </div>
        <div className="flex items-center border border-black-800 rounded-lg w-full md:w-auto">
          <HiCurrencyRupee size={24} className="text-green-700 mx-2" />
          <input
            type="text"
            placeholder="Budget"
            className="w-full p-2 text-lg focus:outline-none"
          />
        </div>
        <button className="bg-blue-500 text-white p-2 flex items-center justify-center">
          <FaSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default Search;
