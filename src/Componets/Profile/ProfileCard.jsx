import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.profilePicture} alt="Profile" className="profile-picture" />
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default ProfileCard;
