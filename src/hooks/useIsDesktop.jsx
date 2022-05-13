import { useCallback, useEffect, useState } from "react";

const useIsDesktop = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleWidthChange = useCallback(() => {
    setWidth(window.innerWidth);
    setIsDesktop(width >= 992);
  }, [width]);

  useEffect(() => {
    handleWidthChange();
    window.addEventListener("resize", handleWidthChange);
    return () => window.removeEventListener("resize", handleWidthChange);
  }, [handleWidthChange]);

  return { isDesktop };
};

export default useIsDesktop;
