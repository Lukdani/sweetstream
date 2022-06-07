import Card from "../Card/Card";
import "./GetStartedIntro.css";
import Photo from "../../bdh_profile.png";

const GetStartedIntro = () => {
  return (
    <Card header="Get started" noBorder alternate>
      <div className="get-started-intro">
        <h4>
          <i className="fas fa-quote-left get-started-quoteIcon"></i>
          We are experienced in implementing our solution in{" "}
          <strong>industry scale</strong> parks.
          <br />
          <br />
          We understand that there are many considerations in regard to your{" "}
          <strong>concrete infrastructure</strong> and{" "}
          <strong>security policies</strong>.
          <br />
          <br />
          Let's have a non-obligating talk about your current situation.
        </h4>
        <p className="mt-4">
          <strong>Brian Heilskov</strong>
          <br />
          <small className="get-started-title">
            {" "}
            Project Manager and co-founder
          </small>
        </p>
        <img className="get-started-photo" src={Photo} alt="" />
      </div>
    </Card>
  );
};

export default GetStartedIntro;
