import React, { createContext, useState, useEffect } from 'react';
import { fetchData, postData } from '../services/api';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPosts = async () => {
    setLoading(true);
    try {
      const data = await fetchData('posts');
      setPosts(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (post) => {
    setLoading(true);
    try {
      const newPost = await postData('posts', post);
      setPosts([newPost, ...posts]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading, error, getPosts, createPost }}>
      {children}
    </PostContext.Provider>
  );
};
