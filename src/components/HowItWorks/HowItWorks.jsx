import StepItem from "./StepItem";
import "./HowItWorks.css";
import { useEffect, useRef } from "react";
import PageHeader from "../PageHeader/PageHeader";

const pageHeaderItems = {
  title: {
    icon: "puzzle-piece",
    text: "How it works",
  },
  sections: [
    {
      title: "What is it?",
      icon: "question-circle",
      text: (
        <span>
          Sweet Stream is a solution to stream data from wind turbines. <br />
          <br />
          It works by reading the data directly from the turbines and
          transforming the data into a format that can leverage the KAFKA
          technology.
        </span>
      ),
    },
    {
      title: "How is it implemented?",
      icon: "wrench",
      text: (
        <span>
          The Sweet Stream Connector is installed on the turbines.
          <br />
          The stream can now be read using the KAFKA technology.
          <br />
          <br />
          Using the KAFKA technology, we can transfer data between security
          zones.
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
                <h3>Rough roadmap</h3>
                {items.map((item, index) => (
                  <div className="col-12 how-it-works-item-container">
                    <StepItem key={item.imageName} step={item} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
