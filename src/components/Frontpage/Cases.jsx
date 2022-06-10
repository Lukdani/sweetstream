import { useEffect, useRef } from "react";
import PageHeader from "../PageHeader/PageHeader";
import Case from "./Case";
import "./Cases.css";

const pageHeaderItems = {
  title: {
    icon: "people-group",
    text: "We are experienced",
  },
  sections: [
    {
      title: "Complete team",
      icon: "certificate",
      text: "in the wind domain",
    },
  ],
  videoName: "hero",
  cta: { label: "Cases we have solved" },
};
const cases = [
  {
    header: "1.000 turbines",
    year: 2021,
    imageName: "1000_turbines.png",
    content: (
      <p>
        The client operated 1000 turbines placed on 12 different farms.
        <br />
        <br />
        Some turbines used the OPC-XML standard, others used the OPC-UA
        standard.
        <br />
        Some parks were placed onshore - others offshore.
        <br />
        <br />
        We had to implement the solution with neat regard to the customer's
        security zone model. The client operated 1000 turbines placed on 12
        different farms.
        <br />
        <br />
      </p>
    ),
  },
  {
    header: "Legacy data",
    imageName: "windmill.png",
    year: 2021,
    content: (
      <p>
        The client operated 500 turbines placed on 6 different farms.
        <br />
        <br />
        The majority of turbines had generated data for years, and now the data
        format had to be changed for future projects involving AI.
        <br />
        <br />
        The task was to update the data format while keeping the old data still
        available for existing consumers.
        <br />
        <br />
        We solved the above using modern Kafka tools.
      </p>
    ),
  } /*
  {
    header: "Redudancy",
    year: 2021,
    content: (
      <p>
        The client operated 1000 turbines placed on 12 different farms.
        <br />
        Some turbines used the OPC-XML standard, others used the OPC-UA
        standard.
        <br />
        Some parks were placed onshore - others offshore.
        <br />
        We had to implement the solution with neat regard to the customer's
        security zone model.
      </p>
    ),
  },*/,
];

const Cases = ({ isDesktop }) => {
  useEffect(() => {
    document.title = "Solved cases";
  }, []);

  const element = useRef();
  return (
    <>
      <PageHeader
        item={pageHeaderItems}
        ctaElement={element}
        isDesktop={isDesktop}
      />

      <div
        ref={element}
        style={{ scrollMarginTop: "var(--navbar-height)" }}
        className="container-lg"
      >
        <div className="content-container">
          <div className="row">
            <div className="col-12">
              <h4>Solved cases</h4>
              <p className="mb-4 mt-2">
                We are experienced in implementing the solution in the wind
                domain. <br /> Below you can read a sample of cases, we have
                solved.
              </p>
            </div>
            <div className="col-12">
              <div className="row g-4">
                {cases.map((caseItem, index) => (
                  <div key={`case-${index}`} className="col-12 col-lg-6">
                    <Case caseItem={caseItem} isDesktop={isDesktop} />
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

export default Cases;
