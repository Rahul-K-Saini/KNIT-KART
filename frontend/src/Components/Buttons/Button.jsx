import React from "react";

function Button({
  text = "Button",
  onClick,
  className = "py-3 px-5 rounded bg-black text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-50",
}) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
