import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/index";

function ThemeToggle() {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  const handleTheme = () => {
    console.log("curr theme: "+theme);
    dispatch(themeActions.toggle());
    console.log("now curr theme: "+theme);
  };

  return (
    <button onClick={handleTheme} className="dark:text-gray-50">
      {theme === "dark" && <IoSunnyOutline className="text-2xl" />}
      {theme === "light" && <FiMoon className="text-2xl" />}
    </button>
  );
}

export default ThemeToggle;
