import { AdvantageSection } from "../../components/advantage-section";
import { AttentionSection } from "../../components/attention-section/attention-section";
import { GoodNewsSection } from "../../components/good-news-section";
import { HomeSection2 } from "../../components/home-section-2";
import { ProblemSection } from "../../components/problem-section";
import { SolutionSection } from "../../components/solution-section";
import { HeroSection } from "../../components/hero-section";
import { RoadMapSection } from "../../components/roadmap-section";

const Home = () => {
  return (
    <div className="bg-blue-dark">
      <HeroSection />
      <HomeSection2 />
      <ProblemSection />
      <SolutionSection />
      <GoodNewsSection />
      <AttentionSection />
      <AdvantageSection />
      <RoadMapSection />
    </div>
  );
};
export { Home };
