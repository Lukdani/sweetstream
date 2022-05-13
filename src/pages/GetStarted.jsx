import GetStartedForm from "../components/GetStarted/GetStartedForm";
import GetStartedIntro from "../components/GetStarted/GetStartedIntro";

const GetStarted = () => {
  return (
    <div className="container-lg content-container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <GetStartedIntro />
        </div>
        <div className="col-12 col-lg-6">
          <GetStartedForm />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
