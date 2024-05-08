import React, { useState } from "react";
import ImageUpload from "../../Components/ImageUpload/ImageUpload";
import axios from "axios";
import { useSelector } from "react-redux";
import { useUserContext } from "@/context/userContext";



function PostAd() {
  // const userId = useSelector(state => state.auth.user.id);
  const {user} = useUserContext();
  const [imagesArr, setImagesArr] = useState([]);

  const imageArrHandler = (prop) => {
    setImagesArr(prop);
    // console.log("prop : "+prop)
  }

  const [adData, setAdData] = useState({
    id: "blah",
    title: "",
    description: "",
    price: "",
    category: "",
    exchange: "",

  })

  const postAdHandler = () => {
    const data = {
      id:user.user._id,
      // id: adData.userId,
      title: adData.title,
      description: adData.description,
      price: adData.price,
      category: adData.category,
      exchange: adData.exchange,
      images: imagesArr
    }



    // axios.post(url, data).then((response) => {
    //   alert('Your Ad has been posted!🎉')
    // }).catch((err)=>{
    //     console.error(`Error! ${err}`);
    // });
    console.log(user);
    console.log(data);

  }

  return (
    <div className="w-full bg-background">
      <div className="max-w-md mx-auto md:max-w-2xl ">
        <div className="p-6">
          <h2 className="text-3xl font-medium mb-4 text-text">Post Ad</h2>
          <div className="mb-4">
            <label htmlFor="title" className="block text-text">
              Product Title
            </label>
            <input
              value={adData.title}
              onChange={e => setAdData({ ...adData, title: e.target.value })}
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
              onChange={e => setAdData({ ...adData, category: e.target.value })}
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
                onChange={e => setAdData({ ...adData, price: e.target.value })}
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
              onChange={e => setAdData({ ...adData, exchange: e.target.value })}
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
              onChange={e => setAdData({ ...adData, description: e.target.value })}
              placeholder="About your product"
              id="description"
              className="border-2 border-gray-200 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button onClick={postAdHandler} className="bg-accent hover:bg-blue-700 dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-all duration-300 hover:scale-105">
            Post Ad
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostAd;
