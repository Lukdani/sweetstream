import { useRef, useState, useEffect, useCallback } from "react";
import useRandomBytes from "../../hooks/useRandomBytes";
import Button from "../Button/Button";
import "./PageHeader.css";

const PageHeader = ({ item, isDesktop, ctaElement }) => {
  const { title, sections, imageName, backgroundImages, cta, videoName } = item;
  const pageHeaderElement = useRef(null);
  const containerElement = useRef(null);
  const videoElement = useRef(null);
  const sourceElement = useRef(null);
  const { randomBytes } = useRandomBytes(
    containerElement,
    isDesktop,
    backgroundImages?.length > 0
  );
  const [imageUrlIndex, setImageUrlIndex] = useState(0);
  const [maxImageHeight, setMaxImageHeight] = useState(0);

  useEffect(() => {
    setMaxImageHeight(
      sectionContainer?.current?.getBoundingClientRect().height
    );
  }, []);

  const setNewIndex = useCallback(() => {
    setImageUrlIndex((prevIndex) =>
      prevIndex >= backgroundImages?.length - 1 ? 0 : prevIndex + 1
    );
  }, [backgroundImages?.length]);

  useEffect(() => {
    const imageChanger = setInterval(() => {
      setNewIndex();
    }, 4000);
    return () => clearInterval(imageChanger);
  }, [setNewIndex]);

  useEffect(() => {
    videoElement.current?.pause();
    sourceElement.current?.setAttribute(
      "src",
      `./videos/${videoName}_${isDesktop ? "desktop" : "mobile"}.mp4`
    );
    videoElement.current?.load();
    videoElement.current?.play();
  }, [isDesktop, videoName]);

  const sectionContainer = useRef(null);
  return backgroundImages?.length > 0 || videoName ? (
    <div
      ref={containerElement}
      style={{
        position: "relative",
        minHeight:
          backgroundImages?.length > 0 || videoName
            ? containerElement?.current?.getBoundingClientRect().width * 0.35
            : null,
      }}
      className={
        backgroundImages?.length > 0 || videoName
          ? "page-header-container page-header-container--image"
          : "page-header-container secondary-bg"
      }
    >
      {backgroundImages?.map((backgroundImageItem, index) => (
        <div
          key={backgroundImageItem}
          style={{
            opacity: index === imageUrlIndex ? 1 : 0,
            backgroundImage: `url(./images/backgrounds/${backgroundImageItem})`,
          }}
          className="page-header-backgroundImage"
        />
      ))}
      {videoName ? (
        <div className="page-header-backgroundImage">
          <video ref={videoElement} muted loop id="heroVideo">
            <source ref={sourceElement} type="video/mp4" />
          </video>
        </div>
      ) : null}
      <div ref={pageHeaderElement} className="page-header page-header--hero">
        <div className="bytes">{randomBytes}</div>
        <div className="page-header-content">
          <div className="container-lg">
            <div className="row">
              <div
                ref={sectionContainer}
                className="col-12 col-lg-5 page-header-text-container"
              >
                <h3 className="page-header-hero-header">{title.text}</h3>
                {sections?.map((sectionItem, index) => {
                  return (
                    <div
                      key={sectionItem.title + index}
                      className="page-header-sectionItem"
                    >
                      <p>{sectionItem.text}</p>
                    </div>
                  );
                })}
                {ctaElement?.current ? (
                  <Button
                    classes="mt-3"
                    label={cta.label}
                    onClick={() => ctaElement?.current?.scrollIntoView()}
                  >
                    <i className="fas fa-arrow-down"></i>
                  </Button>
                ) : null}
              </div>
              {imageName ? (
                <div className="col-12 col-lg-6 offset-lg-1">
                  <img
                    src={`./images/${item.imageName}`}
                    alt={title.text}
                    style={{
                      maxHeight: maxImageHeight,
                    }}
                  />{" "}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="multi-container"
      style={{ backgroundColor: "var(--white)" }}
    >
      <div className="container">
        <div className="row mb-0">
          <div className="col-12">
            <div className="" style={{ position: "relative" }}>
              <div className="page-header page-header--sections">
                <div className="row">
                  <div
                    className="col-12 col-lg-5"
                    style={{ zIndex: "2", backgroundColor: "var(--white)" }}
                  >
                    <div className="row content-container">
                      <div className="col-12">
                        <h4 className="page-header-title">
                          {title.text}
                          <i className={`fas fa-${title.icon} ms-3`} />
                        </h4>

                        {sections.map((sectionItem) => (
                          <span key={sectionItem.title}>
                            <h4>
                              {/*<i className={`fas fa-${sectionItem.icon}`} />*/}
                              {sectionItem.title}
                            </h4>
                            <p>{sectionItem.text}</p>
                          </span>
                        ))}
                        {ctaElement?.current ? (
                          <Button
                            classes="mt-3"
                            label={cta.label}
                            onClick={() =>
                              ctaElement?.current?.scrollIntoView()
                            }
                          >
                            <i className="fas fa-arrow-down"></i>
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div
                    ref={containerElement}
                    className="col-12 offset-lg-1 col-lg-6 p-0"
                  >
                    <div
                      ref={containerElement}
                      className="page-header-imgContainer"
                      style={{ position: "relative" }}
                    >
                      <div className="bytes">{randomBytes}</div>
                      <img src={`./images/${imageName}`} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
