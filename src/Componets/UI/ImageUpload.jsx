import React, { useRef } from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Upload Image
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;
