import React from 'react';

function PostHeader({ username, timestamp }) {
  return (
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
      <div>
        <h3 className="text-lg font-bold">{username}</h3>
        <p className="text-gray-600 text-sm">{timestamp}</p>
      </div>
    </div>
  );
}

export default PostHeader;
