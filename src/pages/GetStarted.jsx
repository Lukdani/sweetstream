import GetStartedForm from "../components/GetStarted/GetStartedForm";
import GetStartedIntro from "../components/GetStarted/GetStartedIntro";

const GetStarted = () => {
  return (
    <>
      <div
        className="multi-container"
        style={{ backgroundColor: "var(--white)" }}
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
      <div className="mediumGray-bg">
        <div className="container-lg">
          <div className="row content-container">
            <div className="col-12">
              <h3 className="text-center">
                Sometimes it's an easy decision to get started.
                <br /> Sometimes you need more time
                <br />
                <br />- We have all the patience in the world and are ready when
                you are.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
