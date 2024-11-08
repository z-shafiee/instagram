

import React from 'react';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { data, loading, error } = useFetch('posts');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
