import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/themeContext";
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <button onClick={handleTheme} className="dark:text-gray-50">
      {theme === "dark" && <IoSunnyOutline className="text-2xl" />}
      {theme === "light" && <FiMoon className="text-2xl" />}
    </button>
  );
}

export default ThemeToggle;
