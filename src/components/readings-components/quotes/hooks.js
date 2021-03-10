import { useState, useEffect } from 'react';

function useFetch(data) {
  const [quoteList, setQuoteList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(data);
    const json = await response.json();

    setQuoteList(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return [quoteList, loading];
}

export { useFetch };