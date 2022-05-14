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
          Sweet Stream reads data directly from turbines and transforms the data
          into a format that can leverage the <strong>Kafka technology</strong>{" "}
          .
          <br />
          <br />
          Once inside a Kafka cluster, the data can be transferred in accordance
          with any <strong>security policy</strong> your organization uses.
        </span>
      ),
    },
    {
      title: "How is it implemented?",
      icon: "wrench",
      text: (
        <span>
          The first step is to install the Sweet Stream connector on your
          infrastrucutre.
          <br />
          <br />
          The stream for the turbine can now be configurered - and you can read
          from as many tags as you need.
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
    header: "Install connector",
    text: "Install the Sweet Stream connector on turbines. \\n It will receive data from any industri standard protocol and transform it into a format that can be streamed with the KAFKA technology. \\n The software is very light weight and can be installed and virtually any device, old as new, powerful or not.",
    imageName: "geek_tool.png",
    imageNameAlt: "geek_tool_2.png",
  },
  {
    header: "Configure data center",
    text: "You're now ready to receive the data through the KAFKA technology. \\n We'll work with your development team to set it up in any kind of security model you're using, such as zone models. \\n Configure it all from the comfort of your offices.",
    imageName: "geek_keyboard.png",
    imageNameAlt: "geek_keyboard_2.png",
  },
  {
    header: "Read from anywhere",
    text: "You can now read data from anywhere - from the surveillance center to the board room - while having complied with all security policies and standards. \\n Read data as time series and even compare with historic data.",
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
                  <div className="col-12 how-it-works-item-container">
                    <StepItem key={item.imageName} step={item} index={index} />
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
