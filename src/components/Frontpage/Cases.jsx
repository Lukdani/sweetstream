import Case from "./Case";
import "./Cases.css";

const cases = [
  {
    header: "1000 turbines",
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
  },
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
  },
];

const Cases = () => {
  return (
    <div className="container-lg">
      <div className="content-container">
        <div className="row">
          <div className="col-12">
            <img
              className="cases-image"
              src="./images/turbine_illustration.png"
              alt=""
            />
            <h2 className="text-center mb-4 mt-2">Solved cases</h2>
          </div>
          <div className="col-12">
            <div className="row g-4">
              {cases.map((caseItem, index) => (
                <div key={`case-${index}`} className="col-12 col-lg-6">
                  <Case caseItem={caseItem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
