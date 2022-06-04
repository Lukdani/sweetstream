import { useEffect } from "react";
import Cases from "../components/Frontpage/Cases";
import Features from "../components/Frontpage/Features";
import Hero from "../components/Frontpage/Hero";
import PitchLine from "../components/Frontpage/PitchLine";
import PoweredBy from "../components/Frontpage/PoweredBy";

const FrontPage = ({ isDesktop }) => {
  useEffect(() => {
    document.title = "Sweet Stream";
  }, []);

  return (
    <div className="frontpage">
      <Hero isDesktop={isDesktop} />
      <Features />
      <PitchLine />
      <PoweredBy />
      <Cases isDesktop={isDesktop} />
    </div>
  );
};

export default FrontPage;
