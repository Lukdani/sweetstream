import Logo from "../../sg-logo.png";
import "./PoweredBy.css";

const images = [
  {
    imageName: "sg_1",
    alt: "SG staff looking at a monitor",
  },
  {
    imageName: "sg_2",
    alt: "SG staff having a team discussion",
  },
];

const PoweredBy = () => {
  return (
    <div className="mediumGray-bg content-container">
      <div className="container-lg">
        <div className="powered-by-container content-container">
          <div className="row">
            <div className="col-12">
              <div>
                <div className="powered-by-content-container mb-3">
                  <h3>Powered by </h3>
                  <a
                    href="https://sweetgeeks.dk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Logo} alt="" />
                  </a>
                </div>
                <p className="text-center">
                  Sweet Stream is developed and maintained by{" "}
                  <a
                    href="https://sweetgeeks.dk"
                    className="hyperlink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sweet Geeks
                  </a>
                  .
                  <br />
                  <br />
                  With 10 years of experience in the wind domain,
                  <br />
                  <a
                    href="https://sweetgeeks.dk"
                    className="hyperlink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sweet Geeks{" "}
                  </a>
                  has a mission to assist the energy sector reach its goals.
                </p>
                <div className="row">
                  <div className="col-12 powered-by-images-container">
                    {images.map((imageItem, index) => (
                      <img
                        key={imageItem.imageName}
                        style={{
                          maxWidth: `calc(100% / ${images.length})`,
                          transform: `translateX(${
                            index % 2 === 0 ? "5px" : "-5px"
                          })`,
                          margin: `${
                            index % 2 === 0 ? ".5rem 0 0 0" : "0 0 .5rem 0"
                          }`,
                        }}
                        className="powered-by-image"
                        src={`./images/${imageItem.imageName}.png`}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweredBy;
