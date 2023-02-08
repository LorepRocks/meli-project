import { useState, useEffect } from 'react';
import { Result } from '../types';
const useFetch = (url) => {
  const [data, setData] = useState<Result>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setError(data?.error || null);
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
