import React from "react";

function Ad({ ad }) {

  return (
    <div class="w-full max-w-sm bg-[rgb(250,250,250)] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg h-80 object-cover w-full"
          src={ad.images[0]}
          alt="product image"
        />
      </a>

      <div class="px-6 py-5">
        <a href="#">
          <h5 class="text-xl font-medium text-text">
            {ad.title}
          </h5>
        </a>
        
        <div className="w-full py-2 my-3">
          Exchange it with : {ad.exchange}
        </div>

        <div class="flex items-center justify-between">
          <span class="text-2xl font-medium text-gray-900 dark:text-white">
            ₹{ad.price}
          </span>
          <a
            href="#"
            class="text-white bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2 shadow-lg text-center dark:focus:ring-blue-800 transition-all duration-300 hover:scale-105"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}

export default Ad;
