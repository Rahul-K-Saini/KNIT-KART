import React, { useEffect, useState } from "react";
import Aos from "aos";
import axios from "axios";
import Ad from './Ad';

function AdDisplay({ selectedCategory }) {
  console.log(selectedCategory);
  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState([]);
  const [selectedCateAds, setSelectedCateAds] = useState([]);

  useEffect(() => {
    getAds();
  }, []);

  const getAds = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/ad/getAllAds");
      setAds(res.data);
    } catch (error) {
      console.error("Error fetching ads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      const filteredAds = ads.filter((ad) => ad.category === selectedCategory);
      setSelectedCateAds(filteredAds);
    } else {
      setSelectedCateAds(ads);
    }
    console.log(selectedCateAds);
  }, [selectedCategory, ads]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  if (loading) {
    return <h3 className="text-center">Loading...</h3>;
  }

  if (ads.length <= 0) {
    return (
      <section className="bg-background py-6 px-2">
        <h2 className="mb-4">~Products~</h2>
        <p>No Products Available</p>
      </section>
    );
  }

  const adsToDisplay = selectedCategory ? selectedCateAds : ads;

  return (
    <section className="bg-background py-6 px-2">
      <h2 className="mb-4 text-text">~Products~</h2>
      <div>
        <ul className="text-text">
          {adsToDisplay.map((ad, index) => (
            <li
              key={index}
              className="inline-block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 lg:mb-0 lg:px-2 my-8"
              data-aos="fade-up"
            >
              <Ad ad={ad} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AdDisplay;
