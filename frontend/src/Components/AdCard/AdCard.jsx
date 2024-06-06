import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const AdCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showPopUp = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const updateAd = async (e, id) => {
    e.preventDefault();
    const form = e.target;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const exchange = e.target.exchange.value;

    const updatedData = {
      price,
      category,
      description,
      exchange,
    };
    try {
      const res = await axios.put(
        "http://localhost:8000/ad/updateAd/" + id,
        updatedData
      );
      toast.success("Ad Updated Successfully");
      closeModal();
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="relative place-self-center flex w-80 flex-col mt-16 mb-16 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div
          className={`relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-cover bg-center text-white shadow-lg shadow-blue-gray-500/40`}
          style={{ backgroundImage: `url(${props.ad.images[0]})` }}
        ></div>

        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {props.ad.title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {props.ad.description}
          </p>
        </div>
        <div className="p-6 pt-0 flex">
          <button
            onClick={showPopUp}
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Edit
          </button>
          <button
            onClick={() => props.deleteAd(props.ad._id)}
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-danger hover:bg-dangerHover ml-2 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Delete Ad
          </button>
        </div>
      </div>

      {modalOpen && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center bg-gray-800 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Edit Ad
                </h3>
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form
                className="p-4 md:p-5"
                onSubmit={(e) => updateAd(e,props.ad._id)}
              >
                <div class="grid gap-4 mb-4 grid-cols-2">
                  <div class="col-span-2 sm:col-span-1">
                    <label
                      for="price"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder=" ₹2999"
                      required
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-1">
                    <label
                      for="exchange"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Exchange Item
                    </label>
                    <input
                      type="text"
                      name="exchange"
                      id="exchange"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Exchange item"
                      required
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-1">
                    <label
                      for="category"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
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
                  <div class="col-span-2">
                    <label
                      for="description"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Description
                    </label>
                    <textarea
                    name="description"
                      id="description"
                      rows="4"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write product description here"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update Product
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdCard;
