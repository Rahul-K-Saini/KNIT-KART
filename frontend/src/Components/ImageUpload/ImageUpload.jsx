import React, { useState } from "react";

function ImageUpload() {
  const [images, setImages] = useState(new Array(5).fill(null));

  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const updatedImages = [...images];
      updatedImages[index] = reader.result;
      setImages(updatedImages);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      // If no file is selected, set the entry to null
      const updatedImages = [...images];
      updatedImages[index] = null;
      setImages(updatedImages);
    }
  };

  const handleImageClick = (index) => {
    document.getElementById(`imageInput-${index}`).click();
  };

  const handleRemoveImage = (image) => {
    for (let i = 0; i < images.length; i++) {
      if (images[i] === image) {
        images[i] = null;
        break; 
      }
    }
    console.log(images);
    setImages([...images]); 
  };

  return (
    <div className="mb-4">
      <label htmlFor="images" className="block mb-1 text-text">
        Images
      </label>
      <div className="flex flex-wrap gap-5">
        {images.map((image, index) => (
          <div className="border-2 p-2" key={index}>
            <label
              htmlFor={`imageInput-${index}`}
              className="relative cursor-pointer inline-block size-14 border-dashed border-gray-300 rounded-lg"
            >
              {image ? (
                <>
                  <img
                    src={image}
                    alt={`Uploaded ${index + 1}`}
                    className="size-16 object-cover rounded cursor-pointer relative"
                    onClick={() => handleImageClick(index)}
                  />
                  <button
                    onClick={() => handleRemoveImage(image)}
                    className="absolute top-[-10px] right-[-12px] px-1 text-sm "
                  >
                    ❌
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    id={`imageInput-${index}`}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(event) => handleImageUpload(event, index)}
                  />
                  <svg
                    className="size-15 m-auto text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </>
              )}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUpload;
