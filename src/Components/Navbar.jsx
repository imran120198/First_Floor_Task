import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="w-full bg-white fixed top-0 z-50 opacity-120">
        <nav
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between"
        >
          <div className="flex items-center">
            <div>
              <img
                className="w-50 rounded-full"
                src="https://zameensquare.com/_next/static/media/zameen-logo.be926326.png"
                alt="logo"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ul className="hidden md:flex gap-6 mr-4">
              <li>
                <p className="text-lg font-normal text-blue">Buy</p>
              </li>
              <li>
                <p className="text-lg font-normal  text-blue">Rent</p>
              </li>
              <li>
                <p className="text-lg font-normal  text-blue">Sell</p>
              </li>
              <li>
                <p className="text-lg font-normal  text-blue">PG</p>
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <button className="text-lg text-white bg-blue-500 px-4 py-2 rounded-md">
                Post Property
              </button>
              <button className="text-lg text-blue px-4 py-2 rounded-md border-blue-500">
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
