import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/index";
import { useTheme } from "../../context/themeContext";
function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleTheme} className="dark:text-gray-50">
      {theme === "dark" && <IoSunnyOutline className="text-2xl" />}
      {theme === "light" && <FiMoon className="text-2xl" />}
    </button>
  );
}

export default ThemeToggle;
