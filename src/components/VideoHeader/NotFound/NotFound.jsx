import { Link } from "react-router-dom";
import Button from "../../Button/Button";

const NotFound = () => {
  return (
    <div className="text-center mt-4">
      <i class="fa-solid fa-face-thinking"></i>

      <h4>404</h4>

      <h2>Page not found</h2>
      <img
        src="./images/geek_monitor_2.png"
        style={{ maxWidth: "150px" }}
        alt=""
      />
      <p className="mt-2">Sorry - the page was not found.</p>
      <Link to="/">
        <Button label="Go to frontpage" classes="mb-4" />
      </Link>
    </div>
  );
};

export default NotFound;
