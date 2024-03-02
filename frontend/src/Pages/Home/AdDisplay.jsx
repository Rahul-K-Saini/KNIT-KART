import React, { useEffect, useState } from "react";
import ads from "./ads.json";

function AdDisplay({ selectedCategory }) {
  const [adsArr, setAdsArr] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);

  const handleViewMore = () => {
    setDisplayCount(displayCount + 4);
  };

  useEffect(() => {
    if (selectedCategory === null) {
      setAdsArr(ads.slice(0, displayCount));
    } else {
      const filteredAds = ads.filter((ad) => selectedCategory === ad.category);
      setAdsArr(filteredAds.slice(0, displayCount));
    }
  }, [selectedCategory, displayCount]);

  if (adsArr.length <= 0) {
    return (
      <section className="bg-background py-6 px-2">
        <h2 className="mb-4">~Products~</h2>
        <p>No Products Available</p>
      </section>
    );
  }
  if (adsArr.length > 0) {
    return (
      <section className="bg-background py-6 px-2">
        <h2 className="mb-4">~Products~</h2>

        <div>
          <ul className="text-text">
            {adsArr.map((ad, index) => (
              <li
                key={index}
                className="inline-block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 lg:mb-0 lg:px-2"
              >
                <div className="border rounded  p-4 mb-4 hover:scale-105 hover:shadow">
                  <img src={ad.imageURL} alt="ad_img" className="mb-2" />
                  <h5 className="text-lg font-bold mb-1">₹ {ad.price}</h5>
                  <p className="text-sm mb-1">Ex. {ad.exchange}</p>
                  <p className="text-sm">{ad.description}</p>
                </div>
              </li>
            ))}
          </ul>
          {ads.length > adsArr.length && adsArr.length >= 4 ? (
            <>
              <div className="text-center mt-4">
                <button
                  className="bg-primary  text-text font-bold py-2 px-4 rounded"
                  onClick={handleViewMore}
                >
                  View More
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

export default AdDisplay;
