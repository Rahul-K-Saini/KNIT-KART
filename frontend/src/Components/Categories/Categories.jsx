import React from "react";

const Categories = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="p-4 py-5 border-b rounded-md bg-background data:bg-background dark:text-text text-text">
      <ul className="flex gap-2 items-center">
        <h3 className="text-base font-semibold">Categories:</h3>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`cursor-pointer py-1 px-3 rounded ${
              selectedCategory === category.id
                ? "bg-secondary text-white"
                : "bg-white"
            } `}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
