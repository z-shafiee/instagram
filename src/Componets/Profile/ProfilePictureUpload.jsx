import React, { useState } from 'react';

const ProfilePictureUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      // آپلود فایل به سرور
      onUpload(file);
    }
  };

  return (
    <div className="profile-picture-upload">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ProfilePictureUpload;
