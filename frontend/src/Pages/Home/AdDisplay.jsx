import React, { useEffect, useState } from "react";
import Aos from "aos";
import axios from "axios";
import Ad from './Ad';

function AdDisplay({ selectedCategory }) {
  const [ads,setAds] = useState([]);
  // const [adsArr, setAdsArr] = useState([]);
  // const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    getAds();
  }, []);
  
  const getAds = async () => {
    const res = await axios.post("http://localhost:8000/ad/getAllAds");
    setAds(res.data);
    // setAdsArr(res.data.slice(0, displayCount));
  };


  // const handleViewMore = () => {
  //   setDisplayCount((prev)=>prev + 4);
  //   console.log(displayCount);
  //   console.log(ads);
  //   console.log(adsArr);
  // };

  // useEffect(() => {
  //   if (selectedCategory === null) {
  //     setAdsArr(ads.slice(0, displayCount));
     
  //   } else {
  //     const filteredAds = ads.filter((ad) => selectedCategory === ad.category);
  //     setAdsArr(filteredAds.slice(0, displayCount));
  //   }
  // }, [selectedCategory, displayCount]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  if (ads.length <= 0) {
    return (
      <section className="bg-background py-6 px-2">
        <h2 className="mb-4">~Products~</h2>
        <p>No Products Available</p>
      </section>
    );
  }
  if (ads.length > 0) {
    return (
      <section className="bg-background py-6 px-2">
        <h2 className="mb-4 text-text">~Products~</h2>

        <div>
          <ul className="text-text">
            {ads.map((ad, index) => (
              <li
                key={index}
                className="inline-block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 lg:mb-0 lg:px-2 my-8"
                data-aos="fade-up"
              >
                <Ad ad={ad}/>

              </li>
            ))}
          </ul>
          
          {/* {ads.length > ads.length && adsArr.length >= 4 ? (
            <>
              <div className="text-center mt-4">
                <button
                  className="bg-primary  text-text font-bold py-2 px-4 rounded transform transition-all duration-300 hover:scale-105"
                  onClick={handleViewMore}
                >
                  View More
                </button>
              </div>
            </>
          ) : (
            ""
          )} */}
        </div>
      </section>
    );
  }
}

export default AdDisplay;
