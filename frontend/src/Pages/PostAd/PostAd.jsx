import React, { useState } from "react";
import ImageUpload from "../../Components/ImageUpload/ImageUpload";
import axios from "axios";
import { useUserContext } from "@/context/userContext";
import toast, { Toaster } from "react-hot-toast";
import './Loader.css'

function PostAd() {

  const { user } = useUserContext();
  const [imagesArr, setImagesArr] = useState([]);
  const [loader, setLoader] = useState(false);

  const imageArrHandler = (prop) => {
    setImagesArr(prop);
    // console.log("prop : "+prop)
  };

  const cleanAdData = {
    id: "",
    title: "",
    description: "",
    price: "",
    category: "",
    exchange: "",
  }

  const [adData, setAdData] = useState(cleanAdData);

  const clearAdData = () => {
    setAdData(cleanAdData);
  }

  const postAdHandler = async () => {

    setLoader(true);
    document.body.style.overflow='hidden';
    
    const formData = new FormData();

    formData.append('id', user.user._id);
    formData.append('title', adData.title);
    formData.append('description', adData.description);
    formData.append('price', adData.price);
    formData.append('category', adData.category);
    formData.append('exchange', adData.exchange);

    imagesArr.forEach((image) => {
      formData.append('images', image);
    });


    try {
      const res = await axios.post("http://localhost:8000/ad/postad", formData);
      console.log(res);
      clearAdData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      document.body.style.overflow='auto';
    }
  };
  
  
  return (
    <div className="w-full bg-background">
      <Toaster />
      <div className="max-w-md mx-auto md:max-w-2xl ">
        <div className="p-6">
          <h2 className="text-3xl font-medium mb-4 text-text">Post Ad</h2>
          <div className="mb-4">
            <label htmlFor="title" className="block text-text">
              Product Title
            </label>
            <input
              value={adData.title}
              onChange={(e) => setAdData({ ...adData, title: e.target.value })}
              type="text"
              placeholder="Title"
              id="title"
              className="border-2 border-gray-200 bg:input_box rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="categories" className="block text-textgray-700">
              Categories:
            </label>
            <select
              onChange={(e) =>
                setAdData({ ...adData, category: e.target.value })
              }
              name="categories"
              id="categories"
              className="border-2 border-gray-200 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="studyMaterial">Study Material</option>
              <option value="electronics">Electronics</option>
              <option value="household">Household</option>
              <option value="sportsItems">Sports item</option>
              <option value="kitchenware">Kitchen Ware</option>
              <option value="stationeries">Stationeries </option>
              <option value="furniture">Furniture</option>
              <option value="others">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-text">
              Price
            </label>
            <div className="border-2 border-gray-200 text-text rounded w-full py-1  pl-3 pr-1 focus:border-blue-500 flex items-center justify-between">
              <span className="pr-3">₹</span>
              <input
                value={adData.price}
                onChange={(e) =>
                  setAdData({ ...adData, price: e.target.value })
                }
                type="text"
                placeholder="Price"
                id="price"
                className=" border-l-[1px] border-text px-2 w-[97%] rounded py-2  focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-text">
              Exchange Item
            </label>
            <input
              value={adData.exchange}
              onChange={(e) =>
                setAdData({ ...adData, exchange: e.target.value })
              }
              type="text"
              placeholder="exchangeItem"
              id="exchangeItem"
              className="border-2 border-gray-200 bg:input_box rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <ImageUpload handleImage={imageArrHandler} />
          <div className="mb-4">
            <label htmlFor="description" className="block text-text">
              Description
            </label>
            <textarea
              value={adData.description}
              onChange={(e) =>
                setAdData({ ...adData, description: e.target.value })
              }
              placeholder="About your product"
              id="description"
              className="border-2 border-gray-200 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={postAdHandler}
            className="bg-accent hover:bg-blue-700 dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-all duration-300 hover:scale-105"
          >
            Post Ad
          </button>

          {
            loader && <div className="backdrop"><div className="loader"></div></div>
          }
        </div>
      </div>
    </div>
  );
}

export default PostAd;
