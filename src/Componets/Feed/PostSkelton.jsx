import React from 'react';

function PostSkeleton() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 animate-pulse">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
        <div>
          <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
      <div className="w-full h-48 bg-gray-300 rounded-lg mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
  );
}

export default PostSkeleton;
