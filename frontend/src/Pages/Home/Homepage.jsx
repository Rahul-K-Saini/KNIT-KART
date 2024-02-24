import Categories from "@/Components/Categories/Categories";
import React from "react";
import { useState } from "react";
import Hero from "@/Components/Hero/Hero";

function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Household" },
    { id: 3, name: "Sports Items" },
    { id: 4, name: "Kitchen Ware" },
    { id: 5, name: "Stationaries" },
    { id: 6, name: "Furniture" },
  ];

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    // other server side fetching logic
  };
  return (
    <>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <Hero />
    </>
  );
}

export default Homepage;
