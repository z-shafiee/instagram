import React from 'react';

function PostCard({ post }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <img src={post.userAvatar} alt="avatar" className="w-10 h-10 rounded-full mr-2" />
        <div>
          <h3 className="text-lg font-bold">{post.username}</h3>
          <p className="text-gray-600 text-sm">{post.timestamp}</p>
        </div>
      </div>
      <img src={post.image} alt="post" className="w-full rounded-lg mb-2" />
      <p>{post.caption}</p>
      {/* Add more post actions here */}
    </div>
  );
}

export default PostCard;
