import { Link } from "react-router-dom";
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
  return (
    <div className="container-lg">
      <div className="row g-3 features">
        <h3 className="mb-0 mt-5">Your benefits</h3>
        <p>
          Sweet Stream is a modern, scalable solution for streaming data from
          wind turbines.
        </p>
        <p className="mt-0">
          Our{" "}
          <Link to="/our-team" target="_blank" className="hyperlink">
            expert team
          </Link>{" "}
          assists you from A-Z.
        </p>
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
  );
};

export default Features;
