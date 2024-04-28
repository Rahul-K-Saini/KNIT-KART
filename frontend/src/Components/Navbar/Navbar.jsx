import React, { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import logo from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logo-dark.png";
import { useTheme } from "../../context/themeContext";
import { useUserContext } from "@/context/userContext";


function Navbar() {

  const {theme, setTheme} = useTheme();
  const {user} = useUserContext(); 
 
  const [isFocused, setIsFocused] = useState(false);
  const token = localStorage.getItem("token");
  console.log(token);
  console.log("******2nd*****");
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

  return (
    <nav className="w-full px-4 py-1 top-0 sticky z-50 border-b-2 border-gray-300  bg-background">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img
              src={theme === "light" ? logo : logoDark}
              alt="logo"
              className="w-25 h-20"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <div
            className={`relative ${
              isFocused ? "w-60" : "w-40"
            } transition-width duration-300 ease-in-out`}
          >
            <input
              type="search"
              placeholder="Search"
              className="rounded-full px-4 py-2 w-full"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <button className="dark:text-gray-50 bg-secondary data:bg-secondary px-4 py-2 rounded hover:opacity-85 transform transition-all duration-300 hover:scale-105">
            <a href="#products">Products</a>
          </button>
          {user && (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="Profile image" src={user.profileImage} />
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
          )}
          {!user && (
            <Link
              to="/entrance"
              className="dark:text-gray-50 bg-accent data:bg-accent px-4 py-2 rounded hover:opacity-85 transform transition-all duration-300 hover:scale-105"
            >
              Login
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
