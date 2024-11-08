
import { useState, useEffect } from 'react';
import { fetchData } from '../services/api';

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData(endpoint);
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
