
import React, { useState, useContext } from 'react';
import { PostContext } from '../../context/PostContext';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { createPost } = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="mb-2 p-2 border rounded w-full"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        className="mb-2 p-2 border rounded w-full"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Create Post
      </button>
    </form>
  );
};

export default PostForm;
