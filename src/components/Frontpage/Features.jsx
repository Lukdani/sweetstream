import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Feature from "./Feature";
import "./Features.css";

const features = [
  {
    icon: "chart-line",
    header: "Scalable",
    text: "Scales extremely well. \nAdd data at a very low marginal cost.",
  },
  {
    icon: "lock",
    header: "Cyber security",
    text: "Designed for security zones used in the energy sector.",
  },
  {
    icon: "feather",
    header: "Light-weight",
    text: `Requires minor machine power. \n Install anywhere - zero footprint.`,
  },
  {
    icon: "square-check",
    header: "Compatible",
    text: "Designed for industri standards (IEC 104, OPC-XML DA and OPC-UA).",
  },
  {
    icon: "people-group",
    header: "Expert team",
    text: "We know the wind industry in-depth. \n We help you succeed.",
  },
  {
    icon: "hourglass",
    header: "On time",
    text: "Stream-lined process to ensure delivery. \n On time, on budget.",
  },
];

const Features = () => {
  const vidoeContainer = useRef(null);
  const [videoContainerWidth, setVideoContainerWidth] = useState();
  const element = useRef(null);
  const featuresElement = useRef(null);

  useEffect(() => {
    setVideoContainerWidth(vidoeContainer.current?.offsetWidth);
  }, []);

  return (
    <div
      ref={element}
      style={{ position: "relative" }}
      className="mediumGray-bg"
    >
      <div className="container-lg">
        <div className="row g-3 features">
          <div className="col-12 col-lg-5">
            <h3>
              Your benefits
              <i className="fas fa-gem ms-3" />
            </h3>
            <p>
              Modern, scalable and compatible.
              <br />
              Designed for industry scale parks.
            </p>
            <p className="mt-0">
              Our{" "}
              <Link to="/our-team" target="_blank" className="hyperlink">
                expert team
              </Link>{" "}
              assists you from A-Z.
            </p>
            <Button
              label="View benefits"
              onClick={() => featuresElement?.current?.scrollIntoView()}
            >
              <i className="fas fa-arrow-down btn--preIcon"></i>
            </Button>
          </div>
          <div ref={vidoeContainer} className="col-12 offset-lg-1 col-lg-5">
            {videoContainerWidth ? (
              <iframe
                width={videoContainerWidth}
                height={videoContainerWidth * 0.5625}
                src="https://www.youtube.com/embed/NXQSVozKSNU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : null}
          </div>
          <h4
            className="features-header"
            style={{
              color: "var(--primary)",
              scrollMarginTop: "var(--navbar-height)",
            }}
            ref={featuresElement}
          >
            Enjoy the following benefits
          </h4>
          {features.map((featureItem) => (
            <div
              key={featureItem.header}
              className="col-lg-4 col-md-6 col-12 feature-container"
            >
              <Feature
                icon={featureItem.icon}
                header={featureItem.header}
                text={featureItem.text}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
