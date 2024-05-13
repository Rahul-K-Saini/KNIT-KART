import React, { useState, useEffect } from "react";
import ClosePrev from "../../assets/images/icon-close.svg";
import PrevBtn from "../../assets/images/icon-previous.svg";
import NextBtn from "../../assets/images/icon-next.svg";
import "./AdPage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AdPage = () => {
  const { id } = useParams();
  const [adDetails, setAdDetails] = useState(null);

  const getAdDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/ad/getAdById/${id}`);
      console.log(res.data);
      setAdDetails(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    getAdDetails();
  }, []);

  // increase or decrease desired item quantity before checkout
  const [itemQuantity, setItemQuantity] = useState(0);
  const incNum = () => {
    setItemQuantity(itemQuantity + 1);
    setItems({
      ...items,
      added_items: itemQuantity + 1,
      total_price: 125 * (itemQuantity + 1),
    });
  };
  const decNum = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
      setItems({
        ...items,
        added_items: itemQuantity - 1,
        total_price: 125 * (itemQuantity - 1),
      });
    } else {
      setItemQuantity(0);
    }
  };

  //cart item object
  const [items, setItems] = useState({
    id: Math.random() + 1,
    added_items: 0,
    total_price: 0,
  });


  // set active image
  const [activeImage, setActiveImage] = useState(firstImg);
  const adjustActiveImage = (index) => {
    setActiveImage(index);
    // what ever the user's image was before opening modal will display as active modal image
    setActiveModalImage(index);
  };

  // desktop gallery modal
  const [photoModal, setPhotoModal] = useState(false);
  const togglePhotoModal = () => {
    setPhotoModal(!photoModal);
    setActiveModalImage(activeImage);
  };

  // set active modal image
  const [activeModalImage, setActiveModalImage] = useState(activeImage);
  const adjustActiveModalImage = (index) => {
    setActiveModalImage(index);
  };

  // navigation button function
  // mobile image nav buttons
  const [mobileImgNav, setMobileImgNav] = useState(0);
  const mobileNextImg = (n) => {
    // map through the image to define the similar image in the array
    let mapImg = adDetails?.images.map((img, key) => {
      return activeImage === img ? (img = true) : null;
    });
    // let the number for the mobile image equal the index number in the array
    let mobileImgNav = mapImg.indexOf(true);
    // set the variable show to equal the sum which is the position in the array
    let show = mobileImgNav + n;
    if (show < 0) {
      show = adDetails?.images.length;
    } else if (show > adDetails?.images.length) {
      show = 0;
    }
    // when user clicks on the images, the position from the array will update
    setMobileImgNav(show);
    // display as active image
    setActiveImage(adDetails?.images[show]);
  };

  // desktop image modal
  const [imageNav, setImgNav] = useState(0);
  const nextImg = (n) => {
    let mapImg = adDetails?.images.map((img, key) => {
      return activeModalImage === img ? (img = true) : null;
    });
    let imageNav = mapImg.indexOf(true);
    let show = imageNav + n;
    if (show < 0) {
      show = adDetails?.images.length;
    } else if (show > adDetails?.images.length) {
      show = 0;
    }
    setImgNav(show);
    setActiveModalImage(adDetails?.images[show]);
  };
  console.log(adDetails?.images.length)

  return (
    <main className="mb-24">
      <Toaster />
      <div className="gallery" data-aos="zoom-in">
        <div className="main-image ">
          <button onClick={togglePhotoModal}>
            <img className="previewed-img" src={activeImage} alt="item image" />
          </button>
          <div className="navigation-btns">
            <button className="prev" onClick={() => mobileNextImg(-1)}>
              <img src={PrevBtn} alt="previous button" />
            </button>
            <button className="next" onClick={() => mobileNextImg(1)}>
              <img src={NextBtn} alt="next button" />
            </button>
          </div>
        </div>
        <div className="photo-options">
          {
            adDetails?.images.map((img, key) => (
              <button
                key={key}
                style={{ backgroundImage: `url(${img})` }}
                className={`img ${activeImage === img ? "selected" : ""}`}
                onClick={() => adjustActiveImage(img)}
              ></button>
            ))
          }
        </div>
      </div>
      <div
        className="description"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="0"
        data-aos-offset="0"
      >
        <div className="info">
          <div className="flex justify-between items-center">
            <p className="catagory">{adDetails?.category}</p>
            <p className="font-semibold">Owner: {adDetails?.user.name.charAt(0).toUpperCase() + adDetails?.user.name.substr(1)}</p>
          </div>
          <h1 className="text-xl md:text-3xl mb-6">
            {adDetails?.title}
          </h1>
          <p className="item-info">
            {" "}
            {adDetails?.description}
          </p>
          <div className="price-tag">
            <div className="flex flex-row">
              <p className="price">₹{adDetails?.price}</p>
              {/* <p className="font-semibold text-orange-500 bg-orange-100 rounded-xl px-2 m-2 ">
                 
              </p> */}
            </div>
            <p className="retail-price">Exchange - {adDetails?.exchange}</p>
          </div>
          <div className="description-btn">
            <button className="add-to-cart transform transition-all duration-300 hover:scale-105">
              <span>Contact: {adDetails?.user?.email}</span>
            </button>
          </div>
        </div>
      </div>
      {/* ===========================modal=========================== */}
      <div
        className="images-modal"
        style={photoModal ? null : { display: `none` }}
      >
        <div className="modal-bg" onClick={togglePhotoModal}></div>
        <div className="wrapper">
          <div className="modal-gallery">
            <button className="close-btn" onClick={togglePhotoModal}>
              <img src={ClosePrev} alt="close" />
            </button>
            <div className="modal-preview">
              <img
                className="previewed-img"
                src={activeModalImage}
                alt="item image"
              />
              <div className="navigation-btns">
                <button className="prev" onClick={() => nextImg(-1)}>
                  <img src={PrevBtn} alt="previous button" />
                </button>
                <button className="next" onClick={() => nextImg(1)}>
                  <img src={NextBtn} alt="next button" />
                </button>
              </div>
            </div>
            <div className="photo-options">
              {
                adDetails?.images.map((img, key) => (
                  <button
                    key={key}
                    style={{ backgroundImage: `url(${img})` }}
                    className={`img ${activeModalImage === img ? "selected" : ""
                      }`}
                    onClick={() => adjustActiveModalImage(img)}
                  ></button>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdPage;
