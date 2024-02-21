import React from "react";
import ImageUpload from "../Components/ImageUpload/ImageUpload";
function PostAd() {
  return (
    <div className="max-w-md mx-auto  md:max-w-2xl">
      <div className="p-6">
        <h2 className="text-3xl font-medium mb-4">Post Ad</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Product Title
          </label>
          <input
            type="text"
            placeholder="Title"
            id="title"
            className="border-2 border-gray-200 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="categories" className="block text-gray-700">
            Categories:
          </label>
          <select
            name="categories"
            id="categories"
            className="border-2 border-gray-200 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Study Material</option>
            <option value="">Electronics</option>
            <option value="">Household</option>
            <option value="">Sports item</option>
            <option value="">Kitchen Ware</option>
            <option value="">Stationaries </option>
            <option value="">Furniture</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">
            Price
          </label>
          <div className="border-2 border-gray-200 rounded w-full py-2 px-3  focus:border-blue-500">
            <span>₹ </span>
            <input
              type="text"
              placeholder="Price"
              id="price"
              className=" border-l-[1px] px-2 w-[90%]  focus:outline-none"
            />
          </div>
        </div>
        <ImageUpload />
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            placeholder="About your product"
            id="description"
            className="border-2 border-gray-200 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="bg-accent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Post Ad
        </button>
      </div>
    </div>
  );
}

export default PostAd;
