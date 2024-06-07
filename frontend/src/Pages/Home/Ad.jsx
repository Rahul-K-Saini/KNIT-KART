import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Ad({ ad }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/ad/${ad._id}`)}
      style={{
        boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.2), -10px -10px 15px rgba(255, 255, 255, 0.2)',
        transition: 'all 0.2s ease-in-out'
      }}
      className="w-full max-w-sm bg-[rgb(250,250,250)] border border-gray-200 rounded-lg cursor-pointer shadow dark:bg-gray-800 dark:border-gray-700"
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)', e.currentTarget.style.boxShadow = '10px 10px 25px rgba(0, 0, 0, 0.2), -10px -10px 25px rgba(255, 255, 255, 0.2)' }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)', e.currentTarget.style.boxShadow = '10px 10px 15px rgba(0, 0, 0, 0.2), -10px -10px 15px rgba(255, 255, 255, 0.2)' }}
    >

      <img
        style={{boxShadow:'0px 2px 10px rgba(0, 0, 0, 0.2)',borderRadius:'10px', scale:'0.95'}}
        className="rounded-t-lg h-80 object-cover w-full"
        src={ad.images[0]}
        alt="product image"
      />


      <div className="px-6 py-5">
        <h5 className="text-xl font-medium text-text">
          {ad.title}
        </h5>

        <div className="w-full py-2 my-3 h-10">
          Exchange it with : {ad.exchange}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-medium text-gray-900 dark:text-white">
            ₹{ad.price}
          </span>
          <Link
            to={`/ad/${ad._id}`}
            className="text-white bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2 shadow-lg text-center dark:focus:ring-blue-800 transition-all duration-300 hover:scale-105"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ad;
