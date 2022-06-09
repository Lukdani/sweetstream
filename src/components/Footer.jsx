import "./Footer.css";
import ConfluentLogo from "../confluent-logo.png";
import SGLogo from "../sg-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-lg">
        <div className="row content-container">
          <div className="col-12 col-lg-4 footer-contact">
            <h4>Contact</h4>
            <div className="footer-contact-item row">
              <div className="col-auto">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="col">hello@sweetgeeks.dk</div>
            </div>
            <div className="row footer-contact-item">
              <div className="col-auto">
                <i className="fa-solid fa-home"></i>
              </div>
              <div className="col">
                Innovations Allé 3 <br /> 7100 Vejle, Denmark
              </div>
            </div>
            <div className="row footer-contact-item">
              <div className="col-auto">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="col">+ 45 55 21 21 16</div>
            </div>
          </div>
          <div className="col-12 col-lg-4 footer-partners">
            <h4>Partners</h4>
            <a
              href="https://www.confluent.io/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ConfluentLogo}
                alt="Confluent logo"
                className="footer-partners-background"
              />
            </a>
            <h4 className="mt-3">Powered by</h4>
            <a href="https://sweetgeeks.dk/" target="_blank" rel="noreferrer">
              <img
                src={SGLogo}
                alt="Sweet Geeks logo"
                className="footer-partners-background"
              />
            </a>
          </div>
          <div className="col-12 col-lg-4 footer-some">
            <h4>Follow us</h4>
            <a
              href="https://www.linkedin.com/company/sweet-geeks-a-s"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <br />
            <a
              className="footer-some-video"
              href="https://youtu.be/bi5b1tJ8pqk"
              target="_blank"
              rel="noreferrer"
            >
              Watch our video
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
