import { useEffect, useState } from "react";

const useFetch = (apiFunc) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiFunc().then(res => setData(res.data));
  }, []);

  return data;
};

export default useFetch;
