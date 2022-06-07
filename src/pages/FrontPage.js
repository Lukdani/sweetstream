import { useEffect } from "react";
import Cases from "../components/Frontpage/Cases";
import Features from "../components/Frontpage/Features";
import Hero from "../components/Frontpage/Hero";
import PitchLine from "../components/Frontpage/PitchLine";
import PoweredBy from "../components/Frontpage/PoweredBy";
import VideoHeader from "../components/VideoHeader/VideoHeader";

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
      <VideoHeader
        isDesktop={isDesktop}
        videoName="hero"
        text="Case we have solved"
        ctaLink="/solved-cases"
        ctaLabel="View cases"
      />
    </div>
  );
};

export default FrontPage;
