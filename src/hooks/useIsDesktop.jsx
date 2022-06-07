import { useCallback, useEffect, useState } from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const handleWidthChange = useCallback(() => {
    const isNowDesktop = window.innerWidth >= 992;
    if (isDesktop !== isNowDesktop) {
      setIsDesktop(isNowDesktop);
    }
    console.log(window.innerWidth);
  }, [isDesktop]);

  useEffect(() => {
    handleWidthChange();
    window.addEventListener("resize", handleWidthChange);
    return () => window.removeEventListener("resize", handleWidthChange);
  }, [handleWidthChange]);

  return { isDesktop };
};

export default useIsDesktop;
