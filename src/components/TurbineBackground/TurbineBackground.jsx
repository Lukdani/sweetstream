import { useEffect, useCallback, useRef, useState } from "react";

const maxHeight = 200;
const minHeight = maxHeight * 0.45;

const TurbineBackground = ({ containerElement }) => {
  const [turbineImages, setTurbineImages] = useState(null);
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback((node) => {
    setTimeout(() => {
      if (node !== null) {
        setHeight(node.getBoundingClientRect().height);
      }
    }, 200);
  }, []);

  const generateTurbineImages = useCallback(() => {
    let images = [];
    const maxWidth = containerElement?.current?.clientWidth;
    let remainingWidth = maxWidth;
    const remapWidth = () =>
      (images = images.map((item) => ({
        ...item,
        width: item.width + remainingWidth / images.length,
      })));
    while (remainingWidth > 0) {
      if (remainingWidth < minHeight) {
        remapWidth();
        break;
      }
      const width =
        remainingWidth < minHeight
          ? remainingWidth
          : Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
      const opacity = Math.random() * (0.2 - 0.3) + 0.5 / 3;
      remainingWidth -= width;
      images.push({ width, opacity });
    }
    return images;
  }, [containerElement]);

  useEffect(() => {
    setTurbineImages(generateTurbineImages());
  }, [generateTurbineImages]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          maxWidth: "100%",
        }}
      >
        <div
          ref={measuredRef}
          style={{
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
          }}
        >
          {turbineImages?.map((image) => (
            <img
              src="./images/turbine_field.png"
              alt="turbine illustration"
              style={{
                width: image.width,
                opacity: image.opacity,
              }}
            />
          ))}
        </div>
      </div>
      <div style={{ paddingTop: `${height}px` }} />
    </>
  );
};

export default TurbineBackground;
