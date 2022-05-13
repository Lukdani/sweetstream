import turbine_top from "../turbine_top.png";
import turbine_pole from "../turbine_pole.png";
import "./AnimatedTurbineIllustration.css";
import { useEffect, useState } from "react";

const AnimatedTurbineIllustration = ({
  scale = 225,
  rotateOnScroll = true,
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (rotateOnScroll) {
      const onScroll = () => setOffset(window.pageYOffset * 1.2);

      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [rotateOnScroll]);

  return (
    <div className="animated-turbine-illustration-container">
      <img
        style={{
          top: 0,
          height: scale * 2,
          transformOrigin: `50% 50%`,
          transform: rotateOnScroll
            ? `rotateZ(${offset}deg) rotate(45deg)`
            : null,
        }}
        src={turbine_top}
        alt="turbine engine"
        className="animated-turbine-illustration-top"
      />

      <img
        style={{ height: scale * 1.5, top: scale }}
        className="animated-turbine-illustration-pole"
        src={turbine_pole}
        alt="turbine pole"
      />
    </div>
  );
};

export default AnimatedTurbineIllustration;
