import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useOnResize from "../../hooks/useOnResize";
import Button from "../Button/Button";
import "./VideoHeader.css";

const VideoHeader = ({ isDesktop, videoName, text, ctaLabel, ctaLink }) => {
  const videoElement = useRef(null);
  const sourceElement = useRef(null);
  const containerElement = useRef(null);
  const handleResize = useCallback(() => {
    if (containerElement?.current !== null) {
      setMinHeight(
        containerElement.current.getBoundingClientRect()?.width *
          (isDesktop ? 0.35 : 1.5)
      );
      if (videoElement.current && sourceElement.current) {
        videoElement.current?.pause();
        sourceElement.current?.setAttribute(
          "src",
          `./videos/${videoName}_${isDesktop ? "desktop" : "mobile"}.mp4`
        );
        videoElement.current?.load();
        videoElement.current?.play();
      }
    }
  }, [isDesktop, videoName]);
  const resizeActive = useOnResize(handleResize);

  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    handleResize();
  }, [handleResize, isDesktop, videoName]);

  return (
    <div
      ref={containerElement}
      style={{
        position: "relative",
        minHeight: minHeight,
      }}
      className="video-header-container video-header-container--image"
    >
      <div className="container-lg video-header-textContainer">
        <h2>{text}</h2>
        {ctaLink ? (
          <Link to={ctaLink}>
            <Button classes="mt-3" label={ctaLabel}></Button>
          </Link>
        ) : null}
      </div>

      <div className="video-header-backgroundImage">
        <video ref={videoElement} muted loop id="heroVideo">
          <source ref={sourceElement} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoHeader;
