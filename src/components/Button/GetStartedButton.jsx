import { Link } from "react-router-dom";
import Button from "./Button";

const GetStartedButton = (color) => {
  return (
    <Link to="/get-started">
      {" "}
      <Button
        label="Get started"
        classes="me-2"
        endIcon={<i className="fas fa-arrow-right ms-2"></i>}
        color={color}
      />
    </Link>
  );
};

export default GetStartedButton;
