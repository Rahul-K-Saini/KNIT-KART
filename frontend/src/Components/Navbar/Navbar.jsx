import React from "react";
import ThemeToggle from "./theme-toggle";

function Navbar() {
  return (
    <nav className="flex justify-between items-center h-16 px-5 bg-teal-100 dark:bg-teal-900 dark:text-white top-0 sticky z-50">
      <h2 className="text-xl">
        KNIT-<span className="font-semibold">KART</span>
      </h2>
      <div className="flex items-center gap-8">
        <button>Log in</button>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
