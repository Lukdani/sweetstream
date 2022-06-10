import { useEffect } from "react";

const useOnResize = (callback) => {
  useEffect(() => {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  });
  return true;
};

export default useOnResize;
