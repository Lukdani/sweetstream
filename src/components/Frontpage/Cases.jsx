import { useRef } from "react";
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
  cta: { label: "Solved cases" },
};
const cases = [
  {
    header: "1000 turbines",
    year: 2021,
    imageName: "1000_turbines.png",
    content: (
      <p>
        The client operated 1000 turbines placed on 12 different farms.
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
        Some turbines used the OPC-XML standard, others used the OPC-UA
        standard.
        <br />
        Some parks were placed onshore - others offshore.
        <br />
        <br />
        We had to implement the solution with neat regard to the customer's
        security zone model.
      </p>
    ),
  },
  {
    header: "Legacy data",
    imageName: "windmill.png",
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
  console.log(isDesktop);
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
                We have implemented the solution several times. <br /> Below
                you'll read some of the special obstacles, we have overcome.
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
