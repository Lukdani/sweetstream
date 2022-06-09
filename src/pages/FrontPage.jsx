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
      <Features isDesktop={isDesktop} />
      <PitchLine />
      <PoweredBy />
      <VideoHeader
        isDesktop={isDesktop}
        videoName="hero"
        text={
          <>
            We are experienced
            <br /> in the wind domain
          </>
        }
        ctaLink="/solved-cases"
        ctaLabel="Cases we have solved"
      />
    </div>
  );
};

export default FrontPage;
