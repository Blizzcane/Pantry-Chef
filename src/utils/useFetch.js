import axios from "axios";
import { useEffect, useState } from "react";
//custom hook for fetching data and returns the data state and error state
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(url)
      .then((res) => setData(res.data.meals))
      .catch((err) => setError(err));
  }, [url]);

  return [data, error];
};

export default useFetch;
