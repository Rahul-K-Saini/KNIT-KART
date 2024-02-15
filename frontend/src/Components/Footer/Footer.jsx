import React from "react";

const Footer = () => {
  return (
    <div className="px-4 md:px-11 py-10 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mb-8 md:mb-0">
          <h1 className="text-lg md:text-2xl mb-4">Contact Us</h1>
          <ul className="list-none space-y-4">
            <li>Phone: +91 1234567890</li>
            <li>Email: info@example.com</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="mb-8 md:mb-0">
            <h1 className="text-lg md:text-2xl mb-4">Quick Links</h1>
            <ul className="list-none space-y-4">
              <li className="cursor-pointer">
                <a
                  href="/#"
                  className="relative after:w-0 after:left-0 after:bottom-0 after:border-b-2 after:rounded after:absolute after:duration-300 after:hover:w-full"
                >
                  Home
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="/#FAQs"
                  className="relative after:w-0 after:left-0 after:bottom-0 after:border-b-2 after:rounded after:absolute after:duration-300 after:hover:w-full"
                >
                  FAQ
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="/#"
                  className="relative after:w-0 after:left-0 after:bottom-0 after:border-b-2 after:rounded after:absolute after:duration-300 after:hover:w-full"
                >
                  About
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="/#"
                  className="relative after:w-0 after:left-0 after:bottom-0 after:border-b-2 after:rounded after:absolute after:duration-300 after:hover:w-full"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col mb-8 md:mb-0">
          <h1 className="text-lg md:text-2xl mb-4">Social Media</h1>
          <ul className="list-none space-x-4 flex mb-10">
            <li className="cursor-pointer hover:scale-125 duration-300">x</li>
            <li className="cursor-pointer hover:scale-125 duration-300">in</li>
            <li className="cursor-pointer hover:scale-125 duration-300">f</li>
          </ul>
          <div className="flex flex-col space-y-2">
            <h1 className="text-lg md:text-2xl mb-2">Newsletter</h1>
            <p>No signup required for exploring the products</p>
            <div className="flex space-x-2">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="h-10 px-2 text-black flex-grow focus:outline-none rounded"
              />
              <button className="px-4 py-1 font-medium text-lg bg-white text-gray-900 transition duration-300 hover:bg-teal-500 hover:text-white rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10 border-gray-600" />
      <p className="mt-5 text-center text-sm">
        &copy; 2024 KNIT KART, All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
