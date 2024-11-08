import React from 'react';

function PostImage({ src }) {
  return (
    <img src={src} alt="post" className="w-full rounded-lg mb-2" />
  );
}

export default PostImage;
