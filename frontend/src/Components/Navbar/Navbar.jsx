import React, { useState } from "react";
import ThemeToggle from "./theme-toggle";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import logo from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logo-dark.png";
import { useTheme } from "../../context/themeContext";
import { useUserContext } from "@/context/userContext";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";


function Navbar() {

  const { theme, setTheme } = useTheme();
  const { user } = useUserContext();
  const [isFocused, setIsFocused] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  const token = localStorage.getItem("token");
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleLogOut = () => {
    localStorage.clear();
    location.reload();
  };

  const handleSearchVisible = () => {
    setIsSearchVisible(true)
  }
  const handleCloseSearch = () => {
    setIsSearchVisible(false)
  }

  const avatarClickHandler = () => {
    setUserMenu(!userMenu);
  }

  return (
    <nav className="w-full px-4 py-1 top-0 sticky z-50 border-gray-300  bg-background">
      <div className="flex justify-between items-center">
        <div className="min-w-fit">
          <Link to="/">
            <img
              src={theme === "light" ? logo : logoDark}
              alt="logo"
              className="w-auto h-20 object-contain"
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
          {user && (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div onClick={avatarClickHandler} className="w-10 rounded-full">
                    <img alt="Profile image" src={user.profileImage} />
                  </div>
                </div>
                <ul
                  onClick={avatarClickHandler}
                  style={{ display: userMenu ? "block" : "none" }}
                  tabIndex={0}
                  className="absolute mt-3 z-[1] shadow menu menu-sm dropdown-content bg-white rounded-lg"
                >
                  <Link to="/profile" className="justify-between">
                    <li className="px-4 py-2 cursor-pointer">
                      Profile
                    </li>
                  </Link>
                  <li className="px-4 py-2 cursor-pointer" onClick={handleLogOut}>
                    Logout
                  </li>
                </ul>
              </div>
            </>
          )}
          {!user && (
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
