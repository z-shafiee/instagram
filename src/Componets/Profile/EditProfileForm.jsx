import React, { useState } from 'react';

const EditProfileForm = ({ user, onSave }) => {
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);

  const handleSave = () => {
    onSave({ username, bio });
  };

  return (
    <div className="edit-profile-form">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
      />
      <button onClick={handleSave}>Save</button>
