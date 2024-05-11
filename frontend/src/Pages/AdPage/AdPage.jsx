import React, { useState, useEffect } from "react";
import Image1 from "../../assets/images/product-1.jpg";
import Image2 from "../../assets/images/product-2.jpg";
import Image3 from "../../assets/images/product-3.jpg";
import Image4 from "../../assets/images/product-4.jpg";
import ClosePrev from "../../assets/images/icon-close.svg";
import PrevBtn from "../../assets/images/icon-previous.svg";
import NextBtn from "../../assets/images/icon-next.svg";
import "./AdPage.css";
// import shortid from "shortid";
// import { useDispatch } from "react-redux";
// call the action I will use
// import { add_items } from "../actions";
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

  // add item to cart if quantity is more than 0
  // const addItem = () => {
  // 	if (itemQuantity === 0) {
  // 		alert("Please select a quantity");
  // 		return;
  // 	}
  // 	//update array id and reset item quantity
  // 	setItems({ ...items, id: shortid.generate() });
  // 	setItemQuantity(0);
  // 	// execute add item function to redux STORE
  // 	dispatch(add_items(items));
  // };

  //cart item object
  const [items, setItems] = useState({
    id: Math.random() + 1,
    added_items: 0,
    total_price: 0,
  });

  // desktop gallery modal
  const [photoModal, setPhotoModal] = useState(false);
  const togglePhotoModal = () => {
    setPhotoModal(!photoModal);
    setActiveModalImage(activeImage);
  };

  // set active images in modal and preview view
  const galleryArray = [Image1, Image2, Image3, Image4];

  // set active image
  const [activeImage, setActiveImage] = useState(galleryArray[0]);
  const adjustActiveImage = (index) => {
    setActiveImage(index);
    // what ever the user's image was before opening modal will display as active modal image
    setActiveModalImage(index);
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
    let mapImg = galleryArray.map((img) => {
      return activeImage === img ? (img = true) : null;
    });
    // let the number for the mobile image equal the index number in the array
    let mobileImgNav = mapImg.indexOf(true);
    // set the variable show to equal the sum which is the position in the array
    let show = mobileImgNav + n;
    if (show < 0) {
      show = 3;
    } else if (show > 3) {
      show = 0;
    }
    // when user clicks on the images, the position from the array will update
    setMobileImgNav(show);
    // display as active image
    setActiveImage(galleryArray[show]);
  };

  // desktop image modal
  const [imageNav, setImgNav] = useState(0);
  const nextImg = (n) => {
    let mapImg = galleryArray.map((img) => {
      return activeModalImage === img ? (img = true) : null;
    });
    let imageNav = mapImg.indexOf(true);
    let show = imageNav + n;
    if (show < 0) {
      show = 3;
    } else if (show > 3) {
      show = 0;
    }
    setImgNav(show);
    setActiveModalImage(galleryArray[show]);
  };

  return (
    <main className="mb-24">
      <Toaster />
      <div className="gallery" data-aos="zoom-in">
        <div className="main-image ">
          <button onClick={togglePhotoModal}>
            <img className="previewed-img" src={adDetails?.images[0]} alt="item image" />
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
          <button
            style={{backgroundImage: `url(${adDetails?.images[0]})`}}
            className={`img ${activeImage === adDetails?.images[1] ? "selected" : ""}`}
            onClick={() => adjustActiveImage(galleryArray[0])}
          ></button>
          <button
            style={{backgroundImage: `url(${adDetails?.images[1]})`}}
            className={`img ${activeImage === Image2 ? "selected" : ""}`}
            onClick={() => adjustActiveImage(galleryArray[1])}
          ></button>
          <button
            style={{backgroundImage: `url(${adDetails?.images[2]})`}}
            className={`img ${activeImage === Image3 ? "selected" : ""}`}
            onClick={() => adjustActiveImage(galleryArray[2])}
          ></button>
          <button
            style={{backgroundImage: `url(${adDetails?.images[3]})`}}
            className={`img ${activeImage === Image4 ? "selected" : ""}`}
            onClick={() => adjustActiveImage(galleryArray[3])}
          ></button>
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
          <p className="catagory">{adDetails?.category}</p>
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
            <p className="retail-price">Ex-{adDetails?.exchange}</p>
          </div>
          <div className="description-btn">
            {/* <div className="quantity-wrapper">
                                <button className="min" onClick={decNum}></button>
                                <p className="quantity">{itemQuantity}</p>
                                <button className="add" onClick={incNum}></button>
                            </div> */}
            {/* cart button */}
            {/* <button className="add-to-cart" onClick={() => addItem()}> */}
            <button className="add-to-cart transform transition-all duration-300 hover:scale-105">
              <span>Contact: +91{adDetails?.user.contact}</span>
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
              <button
                className={`img ${
                  activeModalImage === adDetails?.images[1] ? "selected" : ""
                }`}
                onClick={() => adjustActiveModalImage(adDetails?.images[1])}
              ></button>
              <button
                className={`img ${
                  activeModalImage === adDetails?.images[2] ? "selected" : ""
                }`}
                onClick={() => adjustActiveModalImage(adDetails?.images[2])}
              ></button>
              <button
                className={`img ${
                  activeModalImage === adDetails?.images[3] ? "selected" : ""
                }`}
                onClick={() => adjustActiveModalImage(adDetails?.images[3])}
              ></button>
              <button
                className={`img ${
                  activeModalImage === adDetails?.images[4] ? "selected" : ""
                }`}
                onClick={() => adjustActiveModalImage(adDetails?.images[4])}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdPage;
