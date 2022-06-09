import { useCallback, useState } from "react";

const fullUrl = (url) => `${process.env.REACT_APP_API_URL}api/${url}.php`;

const useApiPost = ({ url, body }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const postData = useCallback(
    async (callback) => {
      setIsLoading(true);
      try {
        const response = await fetch(fullUrl(url), {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        if (response) {
          const parsedResponse = await response.json();
          callback(parsedResponse);
        }
      } catch (error) {
        setError("There was an error.");
      } finally {
        setIsLoading(false);
      }
      console.log(error);
    },
    [body, error, url]
  );

  return { isLoading, postData, data, error };
};

export default useApiPost;
