import React, { useState } from 'react';

function CommentForm() {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mt-1"
        placeholder="Add a comment..."
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-2">Comment</button>
    </form>
  );
}

export default CommentForm;
