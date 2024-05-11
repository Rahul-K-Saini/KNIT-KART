import { forwardRef, useEffect, useState,useImperativeHandle } from "react";

const ImageUpload = forwardRef((props,ref) => {
  const [images, setImages] = useState(new Array(5).fill(null));

  useEffect(() => {
    props.handleImage(images.filter((image) => image !== null));
  }, [images]);

  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const updatedImages = [...images];
      updatedImages[index] = file; // Storing the file object in the array
      setImages(updatedImages);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      const updatedImages = [...images];
      updatedImages[index] = null;
      setImages(updatedImages);
    }
  };

  const clearImages = () => {
    setImages(new Array(5).fill(null));
  };

  useImperativeHandle(ref, () => ({
    clearImages: clearImages
  }));

  const handleImageClick = (index) => {
    document.getElementById(`imageInput-${index}`).click();
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
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
                    src={URL.createObjectURL(image)}
                    alt={`Uploaded ${index + 1}`}
                    className="size-16 object-cover rounded cursor-pointer relative"
                    onClick={() => handleImageClick(index)}
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
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
})

export default ImageUpload;
