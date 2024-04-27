import React, { useState } from "react";
import ThemeToggle from "./theme-toggle";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import logo from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logo-dark.png";
import { useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

function Navbar() {
  const theme = useSelector((state) => state.theme.theme);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <nav className="w-full px-4 py-1 top-0 sticky z-50 border-b-2 border-gray-300  bg-background">
      <div className="flex justify-between items-center">
        <div className="min-w-fit">
          <Link to="/">
            <img
              src={theme === "light" ? logo : logoDark}
              alt="logo"
              className="w-auto h-20"
            />
          </Link>
        </div>

        <div className="flex items-center md:space-x-8 space-x-3">

          <div>
            <div className={`relative ${isFocused ? "w-60" : "w-40"
              } transition-width duration-300 ease-in-out md:block hidden`}>
                <input
                type="search"
                placeholder="Search"
                className="rounded-full px-4 py-2 w-full"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>

            <div className="relative md:hidden block">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text" />
            </div>
          </div>

          <button className="flex item-center justify-center dark:text-gray-50 bg-secondary data:bg-accent md:px-4 px-2 py-2 rounded hover:opacity-85 transform transition-all duration-300 hover:scale-105">
            <a href="#products">
              <span className="md:block mr-2 hidden">Products</span>
            </a>
            <HiOutlineBuildingStorefront className="text-xl" />
          </button>
          <Link
            to="/entrance"
            className="flex item-center justify-center dark:text-gray-50 bg-accent data:bg-accent md:px-4 px-2 py-2 rounded hover:opacity-85 transform transition-all duration-300 hover:scale-105"
          >
            <span className="md:block mr-2 hidden">Login</span>
            <FaRegUserCircle className="text-xl" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
