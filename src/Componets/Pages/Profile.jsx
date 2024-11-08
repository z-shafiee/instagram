import React from 'react';
import ProfileCard from '../components/Profile/ProfileCard';
import ProfilePosts from '../components/Profile/ProfilePosts';

function Profile() {
  const user = {
    username: 'user1',
    avatar: 'avatar1.png',
    bio: 'This is a sample bio',
  };

  const posts = [
    // Sample posts data
    { id: 1, image: 'post1.png', caption: 'Caption 1', timestamp: '2 hours ago' },
    { id: 2, image: 'post2.png', caption: 'Caption 2', timestamp: '3 hours ago' },
  ];

  return (
    <div className="container mx-auto p-4">
      <ProfileCard user={user} />
      <ProfilePosts posts={posts} />
    </div>
  );
}

export default Profile;
