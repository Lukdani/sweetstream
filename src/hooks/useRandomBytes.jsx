import { useCallback, useEffect, useState } from "react";
import RandomByte from "../components/RandomByte/RandomByte";
import { generateByte } from "../utils/generateByte";

const useRandomBytes = (parentElement, isDesktop, lighten) => {
  const [randomBytes, setRandomBytes] = useState();

  const createRandomBytes = useCallback(() => {
    if (parentElement?.current) {
      const parentDimensions = parentElement?.current?.getBoundingClientRect();
      const bytes = [...Array(isDesktop ? 30 : 15)].map((item, index) => {
        const randomTop = Math.random() * parentDimensions.height;
        const randomLeft = Math.random() * parentDimensions.width;

        return (
          <RandomByte
            index={index}
            randomTop={randomTop}
            randomLeft={randomLeft}
            parentDimensions={parentDimensions}
            byte={generateByte()}
            lighten={lighten}
          />
        );
      });
      setRandomBytes(null);
      setRandomBytes(bytes);
    }
  }, [isDesktop, lighten, parentElement]);

  useEffect(() => {
    createRandomBytes();
    const byteInterval = setInterval(() => {
      createRandomBytes();
    }, 5000);

    return () => clearInterval(byteInterval);
  }, [createRandomBytes]);

  return { randomBytes, createRandomBytes };
};

export default useRandomBytes;
