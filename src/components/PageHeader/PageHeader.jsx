import { useRef, useState, useEffect, useCallback } from "react";
import useRandomBytes from "../../hooks/useRandomBytes";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./PageHeader.css";

const PageHeader = ({ item, isDesktop, ctaElement }) => {
  const { title, sections, imageName, backgroundImages, cta } = item;
  const pageHeaderElement = useRef(null);
  const containerElement = useRef(null);
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
    console.log("test test");
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

  const sectionContainer = useRef(null);
  return backgroundImages?.length > 0 ? (
    <div
      ref={containerElement}
      style={{
        minHeight:
          backgroundImages?.length > 0
            ? containerElement?.current?.getBoundingClientRect().width * 0.36
            : null,
      }}
      className={
        backgroundImages?.length > 0
          ? "page-header-container page-header-container--image"
          : "page-header-container secondary-bg"
      }
    >
      {backgroundImages?.map((backgroundImageItem, index) => (
        <div
          style={{
            opacity: index === imageUrlIndex ? 1 : 0,
            backgroundImage: `url(./images/backgrounds/${backgroundImageItem})`,
          }}
          className="page-header-backgroundImage"
        />
      ))}
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
                    classes="mt-4"
                    label={cta.label}
                    onClick={() => ctaElement?.current?.scrollIntoView()}
                  >
                    <i className="fas fa-arrow-down"></i>
                  </Button>
                ) : null}
              </div>
              {imageName ? (
                <div className="col-12 col-lg-6 offset-lg-1 page-header-imgContainer">
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
                    className="col-12 col-lg-6"
                    style={{ zIndex: "2", backgroundColor: "var(--white)" }}
                  >
                    <div className="row content-container">
                      <div className="col-12">
                        <Card
                          header={title.text}
                          style={{ zIndex: "2" }}
                          noBorder={true}
                        >
                          <>
                            {sections.map((sectionItem) => (
                              <>
                                <h4>
                                  {/*<i className={`fas fa-${sectionItem.icon}`} />*/}
                                  {sectionItem.title}
                                </h4>
                                <p>{sectionItem.text}</p>
                              </>
                            ))}
                            {ctaElement?.current ? (
                              <Button
                                classes="mt-4"
                                label={cta.label}
                                onClick={() =>
                                  ctaElement?.current?.scrollIntoView()
                                }
                              >
                                <i className="fas fa-arrow-down"></i>
                              </Button>
                            ) : null}
                          </>
                        </Card>
                      </div>
                    </div>
                  </div>
                  <div
                    ref={pageHeaderElement}
                    className="col-12 col-lg-6 p-0"
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
  );
};

export default PageHeader;
