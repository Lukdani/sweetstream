import StepItem from "./StepItem";
import "./HowItWorks.css";
import { useEffect, useRef } from "react";
import PageHeader from "../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import GetStartedButton from "../Button/GetStartedButton";

const pageHeaderItems = {
  title: {
    icon: "puzzle-piece",
    text: "How it works",
  },
  sections: [
    {
      title: "What does it do?",
      icon: "question-circle",
      text: (
        <span>
          Sweet Stream acquires and transforms data from turbines and pushes it
          into a <strong>Kafka cluster</strong>.
          <br />
          <br />
          Sweet Stream - together with the Kafka platform - fully supports the
          zone model of Industrial Control Systems{" "}
          <strong>(ISA/IEC 62443)</strong>.
        </span>
      ),
    },
    {
      title: "How is it implemented?",
      icon: "wrench",
      text: (
        <span>
          The first step is to install the Sweet Stream connector on your edge
          infrastructure.
          <br />
          <br />
          The stream can now be configured - and you can read from as many data
          sources and tags as you want.
          <br />
          <br />
          Our{" "}
          <Link className="hyperlink" to="/our-team">
            consultants
          </Link>{" "}
          will assist your team with all configuration work.
        </span>
      ),
    },
  ],
  imageName: "turbine.png",
  backgroundImage: "turbine.png",
  cta: { label: "View roadmap" },
};

const items = [
  {
    header: "Install the connector",
    text: "Install the Sweet Stream connector on your edge infrastructure.\\n It will acquire data from any industry standard protocol and push it into a Kafka cluster. \\n The software is designed as a zero-footprint component (very light weight) and can be installed on virtually any device, old as new, powerful or not",
    imageName: "geek_tool.png",
    imageNameAlt: "geek_tool_2.png",
  },
  {
    header: "Configure data center",
    text: "Once the connector is ready, we will install a Kafka cluster and set up a topic to get the data. \\n If you already have Kafka cluster, we can simply add a topic for the data here. \\nIn this process, there will be some network configuration as well. Our team will support you on this part as well. \\n Configure it all from the comfort of your offices.",
    imageName: "geek_keyboard.png",
    imageNameAlt: "geek_keyboard_2.png",
  },
  {
    header: "Read from anywhere",
    text: "You can now stream the data to any destination – to the surveillance center, your SCADA system, to the board room’s KPI visualization software (e.g Microsoft PowerBI)  - while having complied with all security policies and standards.",
    imageName: "geek_monitor.png",
    imageNameAlt: "geek_monitor_2.png",
  },
];

const HowItWorks = ({ isDesktop }) => {
  useEffect(() => {
    document.title = "How it works";
  }, []);

  const element = useRef();

  return (
    <>
      <PageHeader
        item={pageHeaderItems}
        isDesktop={isDesktop}
        ctaElement={element}
      />
      <div
        ref={element}
        className="mediumGray-bg"
        style={{ scrollMarginTop: "var(--navbar-height" }}
      >
        <div className="container-lg content-container">
          <div className="row gy-2 text-center">
            <div className="col-12">
              <div>
                <i
                  className="fas fa-road"
                  style={{ color: "var(--dark)", fontSize: "1.5rem" }}
                ></i>
                <h3>Roadmap</h3>
                <p>
                  The roadmap of course depends on your specific situation and
                  infrastructure.
                  <br />
                  Below, however, is a rough sketch of the core steps in the
                  implementation.
                </p>
                {items.map((item, index) => (
                  <div
                    key={item.imageName}
                    className="col-12 how-it-works-item-container"
                  >
                    <StepItem step={item} index={index} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12">
              <GetStartedButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
