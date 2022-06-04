import { useCallback, useEffect, useRef, useState } from "react";

import useRandomBytes from "../../hooks/useRandomBytes";
import AnimatedTurbine from "../AnimatedTurbine";

import Button from "../Button/Button";
import GetStartedButton from "../Button/GetStartedButton";
import "./Hero.css";

const Hero = ({ isDesktop }) => {
  const heroRef = useRef(null);
  const videoElement = useRef(null);
  const sourceElement = useRef(null);
  const { randomBytes, createRandomBytes } = useRandomBytes(heroRef, isDesktop);
  const elementRef = useRef(null);

  const setScale = useCallback(() => {
    return !isDesktop
      ? heroRef.current?.getBoundingClientRect().height / 2 -
          elementRef?.current?.getBoundingClientRect().height / 2
      : heroRef.current?.getBoundingClientRect().height;
  }, [isDesktop]);

  const [turbineScale, setTurbineScale] = useState(setScale());

  useEffect(() => {
    setTurbineScale(setScale());
    createRandomBytes();

    const onResize = () => {
      createRandomBytes(isDesktop);
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
  }, [createRandomBytes, setScale]);

  useEffect(() => {
    videoElement.current?.pause();
    sourceElement.current.setAttribute(
      "src",
      `./videos/hero_${isDesktop ? "desktop" : "mobile"}.mp4`
    );
    videoElement.current?.load();
    videoElement.current?.play();
  }, [isDesktop]);

  return (
    <div ref={heroRef} className="hero">
      <div className="bytes">{randomBytes}</div>
      <video ref={videoElement} autoPlay muted loop id="heroVideo">
        <source ref={sourceElement} src="" type="video/mp4" />
      </video>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div ref={elementRef} className="hero-prop-container">
              <div className="row">
                <div className="col">
                  <h3 className="mb-3">
                    The modern
                    <br />
                    streaming solution
                    <br />
                    for wind turbines
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <GetStartedButton />
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
