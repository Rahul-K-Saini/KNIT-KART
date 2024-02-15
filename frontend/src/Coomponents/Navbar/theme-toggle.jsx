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
    <button onClick={handleTheme}>
      {theme === "light" && (
        <Sun />
      )}
      {theme === "dark" && (
        <Moon />
      )}
    </button>
  );
}

export default ThemeToggle;
