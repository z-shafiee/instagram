
import React, { useContext, useEffect } from 'react';
import { PostContext } from '../../context/PostContext';
import PostCard from './PostCard';

const PostList = () => {
  const { posts, getPosts, loading, error } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
