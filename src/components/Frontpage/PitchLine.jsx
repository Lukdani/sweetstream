import AnimatedTurbine from "../AnimatedTurbine";
import IndustriStandard from "../IndustriStandard";
import "./PitchLine.css";

const PitchLine = () => {
  return (
    <div className="container-fluid">
      <div className="row pitchLine content-container">
        <div className="col-12">
          <i className="pitchLine-icon fa-solid fa-tags mb-2"></i>
          <h2>Gather from endless tags</h2>
          <p>
            Gather data from all tags with very limitied margin cost.
            <br />
            Gather from all industri standards
            <br />
            such as <IndustriStandard text="IEC 104" />{" "}
            <IndustriStandard text="OPC-XML DA" /> and{" "}
            <IndustriStandard text="OPC-UA" />
          </p>
        </div>

        <div className="pitchLine-turbines-container">
          <div style={{ transform: "translateX(70%)" }}>
            <AnimatedTurbine scale={150} uniqueKey="pitchline-1-" />
          </div>{" "}
          <div>
            <AnimatedTurbine scale={200} uniqueKey="pitchline-2-" />
          </div>
          <div style={{ transform: "translateX(-70%)" }}>
            <AnimatedTurbine scale={150} uniqueKey="pitchline-3-" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchLine;
