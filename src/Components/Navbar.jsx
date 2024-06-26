import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full bg-white fixed top-0 z-50 opacity-120">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile view */}
        <div className="flex justify-between items-center h-16 sm:hidden">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="https://zameensquare.com/_next/static/media/zameen-mob-logo.74a5a37e.png"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <button className="text-gray-600 bg-gray-50 hover:text-blue-500 px-2 py-1 rounded-md text-sm font-medium flex items-center">
              Bengaluru
              <IoIosArrowDown className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium">
              Post Property
            </button>
            <button className="text-blue-500 border border-blue-500 px-3 py-1 rounded-md text-sm font-medium">
              Login
            </button>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden sm:flex sm:justify-between sm:h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="https://zameensquare.com/_next/static/media/zameen-logo.be926326.png"
                alt="logo"
              />
            </div>
            <div className="ml-6 flex space-x-8">
              <button className="text-gray-600 bg-gray-50 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                Bengaluru
                <IoIosArrowDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-blue-500 px-3 py-2 rounded-md text-md font-medium">
              Buy
            </p>
            <p className="text-blue-500 px-3 py-2 rounded-md text-md font-medium">
              Rent
            </p>
            <p className="text-blue-500 px-3 py-2 rounded-md text-md font-medium">
              Sell
            </p>
            <p className="text-blue-500 px-3 py-2 rounded-md text-md font-medium">
              PG
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
              Post Property
            </button>
            <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded-md text-sm font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
