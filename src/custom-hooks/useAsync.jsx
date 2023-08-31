import { useState, useEffect } from "react";

export const useAsync = (asyncFunction, dependencies = []) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    asyncFunction()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [asyncFunction, dependencies]);

  return { data, error, loading };
};
