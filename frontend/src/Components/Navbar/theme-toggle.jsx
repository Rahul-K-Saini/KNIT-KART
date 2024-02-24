import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeProvider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  
  return (
    <button onClick={handleTheme}>
      {theme === "light" && (
        <IoSunnyOutline className="text-2xl"/>
      )}
      {theme === "dark" && (
        <FiMoon className="text-2xl"/>
      )}
    </button>
  );
}

export default ThemeToggle;
