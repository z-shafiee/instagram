import React from 'react';
import PostCard from '../Feed/PostCard';

const ProfilePosts = ({ posts }) => {
  return (
    <div className="profile-posts">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ProfilePosts;
