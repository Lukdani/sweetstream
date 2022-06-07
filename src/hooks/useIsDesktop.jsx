import { useCallback, useEffect, useState } from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const handleWidthChange = useCallback(
    (windowWidth) => {
      const isNowDesktop = windowWidth >= 992;
      if (isDesktop !== isNowDesktop) {
        setIsDesktop(isNowDesktop);
      }
    },
    [isDesktop]
  );

  useEffect(() => {
    handleWidthChange(window.innerWidth);
    window.addEventListener("resize", handleWidthChange);
    return () => window.removeEventListener("resize", handleWidthChange);
  }, [handleWidthChange]);

  return { isDesktop };
};

export default useIsDesktop;
