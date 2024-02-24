import React from "react";
import { Moon, Sun } from "lucide-react";
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
    <button onClick={handleTheme} className="dark:text-gray-50">
      {theme === "dark" && <Sun />}
      {theme === "light" && <Moon />}
    </button>
  );
}

export default ThemeToggle;
