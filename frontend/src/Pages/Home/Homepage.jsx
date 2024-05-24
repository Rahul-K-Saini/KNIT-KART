import Categories from "@/Components/Categories/Categories";
import React from "react";
import { useState } from "react";
import Hero from "@/Components/Hero/Hero";
import Faq from "@/Components/FAQs/FAQs";
import { Link, useNavigate } from "react-router-dom";
import AdDisplay from "./AdDisplay";

function Homepage() {

  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 1, name: "electronics" },
    { id: 2, name: "household" },
    { id: 3, name: "sportsItems" },
    { id: 4, name: "kitchenware" },
    { id: 5, name: "stationeries" },
    { id: 6, name: "furniture" },
    { id: 7, name: "studyMaterial" },
  ];

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    // other server side fetching logic
  };
  return (
    <>
      <div className="flex justify-between items-center bg-footer sticky top-20 z-[1]">
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        <Link
          to="/postad"
          className="dark:text-gray-50 bg-accent data:bg-accent mx-6 px-4 py-2 rounded hover:opacity-85 transform transition-all duration-300 hover:scale-105 animate-wiggle animate-infinite animate-duration-[2500ms]"
        >
          Post Ad
        </Link>
      </div>
      <Hero />
      <AdDisplay selectedCategory={selectedCategory} />
      <Faq />
    </>
  );
}

export default Homepage;
