import Categories from "@/Components/Categories/Categories";
import React from "react";
import { useState } from "react";
import Hero from "@/Components/Hero/Hero";
import Faq from "@/Components/FAQs/FAQs";
import Button from "@/Components/Buttons/Button";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  const [isLoggedin, setisLoggedin] = useState(false);
  const postAdHandler = ()=>{
    if(isLoggedin){
      navigate('/postAd')
    } else {
      navigate('/entrance')
    }
  }
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
      <div className="flex justify-between sticky top-20 z-50">
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        <Link
            onClick={postAdHandler}
            className="dark:text-gray-50 bg-accent data:bg-accent px-4 py-2 rounded hover:opacity-85"
          >
            Post Ad
          </Link>
      </div>
      <Hero />
      <Faq />
    </>
  );
}

export default Homepage;
