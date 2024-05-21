import React from "react";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Categories = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="p-4 py-5 bg-footer dark:text-[#9583ac]">
      <ul className="flex gap-2 items-center">
        <h3 className="text-base text-text font-semibold">Categories:</h3>
        {/* For larger screen */}
        <div className="hidden md:flex gap-2 items-center">
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => onSelectCategory(category.name)}
              className={`cursor-pointer py-1 px-3 rounded transform transition-all duration-300 hover:scale-105 ${selectedCategory === category.name
                  ? "bg-secondary text-white"
                  : "bg-white"
                }`}
            >
              {capitalizeFirstLetter(category.name)}
            </li>
          ))}
        </div>

        {/* For smaller screen */}
        <select
          className="block md:hidden w-full py-1 px-2 bg-background text-text rounded-md shadow-sm"
          value={selectedCategory}
          onChange={(e) => onSelectCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.name}
              className="text-sm"
            >
              {capitalizeFirstLetter(category.name)}
            </option>
          ))}
        </select>
      </ul>
    </div>
  );
};

export default Categories;
