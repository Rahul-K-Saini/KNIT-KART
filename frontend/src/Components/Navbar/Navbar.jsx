import React, { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import logo from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logo-dark.png";
import { useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = localStorage.getItem("user");
  const theme = useSelector((state) => state.theme.theme);
  const [isFocused, setIsFocused] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleLogOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  const handleSearchVisible = () => {
    setIsSearchVisible(false)
  }
  const handleCloseSearch = () => {
    setIsSearchVisible(false)
  }

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
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text cursor-pointer"
                onClick={handleSearchVisible}
              />
            </div>
            {isSearchVisible && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
                <div className="bg-white p-4 rounded-lg flex items-center justify-center space-x-3">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 rounded border border-gray-300 mb-2"
                  />
                  <RxCross1 onClick={handleCloseSearch} className="text-xl" />
                </div>
              </div>
            )}
          </div>

          <button className="flex item-center justify-center dark:text-gray-50 bg-secondary data:bg-accent md:px-4 px-2 py-2 rounded hover:opacity-85 transform transition-all duration-300 hover:scale-105">
            <a href="#products">
              <span className="md:block mr-2 hidden">Products</span>
            </a>
            <HiOutlineBuildingStorefront className="text-xl" />
          </button>
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="Profile image" src={user?.profileImage} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li className="cursor-pointer" onClick={handleLogOut}>
                    Logout
                  </li>
                </ul>
              </div>

            </>
          ) : (
            <Link
              to="/entrance"
              className="flex item-center justify-center dark:text-gray-50 bg-accent data:bg-accent md:px-4 px-2 py-2 rounded hover:opacity-85 transform transition-all duration-300 hover:scale-105"
            >
              <span className="md:block mr-2 hidden">Login</span>
              <FaRegUserCircle className="text-xl" />
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
