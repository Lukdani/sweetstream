import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./VideoHeader.css";

const VideoHeader = ({ isDesktop, videoName, text, ctaLabel, ctaLink }) => {
  const videoElement = useRef(null);
  const sourceElement = useRef(null);

  const [minHeight, setMinHeight] = useState(0);

  const containerElement = useCallback((element) => {
    if (element !== null) {
      setMinHeight(element.getBoundingClientRect().width * 0.35);
    }
  }, []);

  useEffect(() => {
    videoElement.current?.pause();
    sourceElement.current?.setAttribute(
      "src",
      `./videos/${videoName}_${isDesktop ? "desktop" : "mobile"}.mp4`
    );
    videoElement.current?.load();
    videoElement.current?.play();
  }, [isDesktop, videoName]);

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
