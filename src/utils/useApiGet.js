import { useCallback, useState } from "react";

const fullUrl = (url, queryParams) =>
  `${process.env.REACT_APP_API_URL}api/${url}.php${
    queryParams ? `?${queryParams}` : ""
  }`;

const useApiGet = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = useCallback(
    async (queryParams) => {
      setIsLoading(true);
      const response = await fetch(fullUrl(url, queryParams));
      setIsLoading(false);
      if (response) {
        const parsedData = await response.json();
        if (parsedData) {
          setData(parsedData);
        }
        return true;
      }
      return false;
    },
    [url]
  );

  return { isLoading, fetchData, data };
};

export default useApiGet;
