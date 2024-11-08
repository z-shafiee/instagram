import { useState, useEffect } from 'react';
import { getPosts, createPost, deletePost } from '../services/api';

const usePost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const addPost = async (post) => {
    const newPost = await createPost(post);
    setPosts([...posts, newPost]);
  };

  const removePost = async (postId) => {
    await deletePost(postId);
    setPosts(posts.filter(post => post.id !== postId));
  };

  return { posts, loading, addPost, removePost };
};

export default usePost;
