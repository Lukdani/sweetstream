import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import TurbineSpinner from "../TurbineSpinner";
import "./StepItem.css";

const StepItem = ({ step, index }) => {
  const { header, text, imageName, imageNameAlt } = step;
  const [imageUrl, setImageUrl] = useState(step.imageName);
  const [offset, setOffset] = useState(0);

  const image = useRef(null);

  const updateImageUrl = useCallback(() => {
    setImageUrl((prevName) =>
      prevName === imageName ? imageNameAlt : imageName
    );
  }, [imageName, imageNameAlt]);

  useEffect(() => {
    let interval;
    if (imageNameAlt) {
      interval = setInterval(() => {
        updateImageUrl();
      }, 500);
    }
    return () => clearInterval(interval);
  }, [imageNameAlt, updateImageUrl]);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prerenderedImage = useMemo(
    () => (
      <img
        ref={image}
        style={{
          opacity: imageUrl === imageName ? 1 : 0,
        }}
        src={`./images/${imageName}`}
        alt="step"
      />
    ),
    [imageName, imageUrl]
  );

  return (
    <div className="how-it-works-step">
      <div className="row" style={{ display: image.current ? "flex" : "none" }}>
        <div
          style={{
            minHeight: image?.current?.clientHeight,
            opacity:
              image?.current?.getBoundingClientRect()?.top + window.scrollY >
              window.innerHeight + offset
                ? 0
                : (window.innerHeight -
                    image?.current?.getBoundingClientRect().top) /
                  image?.current?.clientHeight,
          }}
          className={`col-12 col-lg-2  ${
            index % 2 === 0 ? "offset-lg-3" : "order-lg-4"
          } how-it-works-step-image-container`}
        >
          {prerenderedImage}
          {imageNameAlt ? (
            <img
              style={{
                opacity: imageNameAlt === imageUrl ? 1 : 0,
              }}
              src={`./images/${imageNameAlt}`}
              alt="step"
            />
          ) : null}
        </div>
        <div
          className={`col-12 col-lg-4 ${
            index % 2 === 0 ? "" : "offset-lg-3"
          } how-it-works-step-text-container`}
        >
          <div className="how-it-works-step-text">
            <h4>{header}</h4>
            <p>
              {text.split("\\n").map((textItem, index) => (
                <span key={textItem}>
                  {textItem}
                  {index < text.split("\\n").length - 1 ? (
                    <>
                      <br />
                      <br />
                    </>
                  ) : null}
                </span>
              ))}
            </p>
            {index === 2 ? null : (
              <div
                style={{
                  left: index % 2 === 0 ? "0" : "unset",
                  right: index % 2 !== 0 ? "0" : "unset",
                }}
                className="how-it-works-step-line"
              />
            )}
          </div>
        </div>
      </div>

      <div
        style={{ display: !image.current && index === 0 ? "block" : "none" }}
      >
        <TurbineSpinner />
      </div>
    </div>
  );
};

export default StepItem;
