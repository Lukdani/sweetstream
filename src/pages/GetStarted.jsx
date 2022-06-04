import { useRef } from "react";
import GetStartedForm from "../components/GetStarted/GetStartedForm";
import GetStartedIntro from "../components/GetStarted/GetStartedIntro";
import TurbineBackground from "../components/TurbineBackground/TurbineBackground";

const GetStarted = () => {
  const element = useRef(null);
  return (
    <>
      <div
        className="multi-container"
        style={{ backgroundColor: "var(--secondary)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="content-container">
                <GetStartedIntro />
              </div>
            </div>

            <div className="col-12 col-lg-6 p-0">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={element}
        className="mediumGray-bg"
        style={{ position: "relative" }}
      >
        <div className="container-lg">
          <div className="row content-container text-center">
            <div className="col-12">
              <h2>Ready or not?</h2>
              <br />
              <h4 className="text-center">
                Sometimes your organization is ready go.
                <br /> Sometimes it needs more time to evaluate.
              </h4>
              <br />
              <h4>
                We have all the patience in the world. <br />
                We are ready when you are.
              </h4>
            </div>
          </div>
        </div>
        <TurbineBackground containerElement={element} />
      </div>
    </>
  );
};

export default GetStarted;
