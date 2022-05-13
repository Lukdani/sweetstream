import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useRandomBytes from "../../hooks/useRandomBytes";
import { generateByte } from "../../utils/generateByte";
import AnimatedTurbine from "../AnimatedTurbine";

import Button from "../Button/Button";
import "./Hero.css";

const Hero = ({ isDesktop }) => {
  const heroRef = useRef(null);
  const { randomBytes, createRandomBytes } = useRandomBytes(heroRef, isDesktop);
  const elementRef = useRef(null);

  const setScale = useCallback(() => {
    return heroRef.current?.getBoundingClientRect().height > window.innerWidth
      ? heroRef.current?.getBoundingClientRect().height / 2 -
          elementRef?.current?.getBoundingClientRect().height / 2
      : heroRef.current?.getBoundingClientRect().height;
  }, []);

  const [turbineScale, setTurbineScale] = useState(setScale());

  useEffect(() => {
    setTurbineScale(setScale());
    createRandomBytes();

    const onResize = () => {
      createRandomBytes();
      setTurbineScale(setScale());
    };

    window.addEventListener("resize", onResize);

    const byteInterval = setInterval(() => {
      createRandomBytes();
    }, 5000);

    return () => {
      window.removeEventListener("resize", onResize);
      clearInterval(byteInterval);
    };
  }, [createRandomBytes, setScale, isDesktop]);

  return (
    <div ref={heroRef} className="hero">
      <div className="bytes">{randomBytes}</div>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div ref={elementRef} className="hero-prop-container">
              <div className="row">
                <div className="col">
                  <h3 className="mb-3">
                    Collect data
                    <br />
                    from wind turbines
                    <br />
                    timely, efficiently
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Link to="/get-started">
                    <Button label="Get started" classes="me-2" />
                  </Link>
                  <Button color="secondary" label="Read more" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="hero-image-container">
              <div
                className={`${
                  isDesktop
                    ? "imgContainer "
                    : "imgContainer imgContainer--reduced"
                }`}
              >
                <AnimatedTurbine
                  scale={turbineScale}
                  rotateOnScroll={true}
                  disableBinaryPrint={true}
                />
                {/*  <AnimatedTurbineIllustration />*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
