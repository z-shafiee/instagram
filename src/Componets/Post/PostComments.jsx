import React from 'react';

function PostComments({ comments }) {
  return (
    <div className="mt-4">
      {comments.map((comment, index) => (
        <div key={index} className="mb-2">
          <p className="text-sm"><span className="font-bold">{comment.username}</span> {comment.text}</p>
        </div>
      ))}
    </div>
  );
}

export default PostComments;
