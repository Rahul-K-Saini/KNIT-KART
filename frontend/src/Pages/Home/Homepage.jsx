import Categories from "@/Components/Categories/Categories";
import React from "react";
import { useState } from "react";
import Hero from "@/Components/Hero/Hero";
import Faq from "@/Components/FAQs/FAQs";

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
     <div className="sticky top-20 z-50 hidden sm:block md:block">
  <Categories
    categories={categories}
    selectedCategory={selectedCategory}
    onSelectCategory={handleSelectCategory}
  />
</div>

      <Hero />
      <Faq />
    </>
  );
}

export default Homepage;
