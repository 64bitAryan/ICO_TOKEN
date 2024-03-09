import { WorthSharing } from "../../components/worth-sharing-section";
import { SolutionSection } from "../../components/solution-section";
import { HeroSection } from "../../components/hero-section";
import { ContactUs } from "../../components/contact-us";
import { AboutAIB } from "../../components/about-aib";
import { EarningSection } from "../../components/earning-section";
import { BusinessSuccess } from "../../components/business-success-section";
import { AboutAIBoost } from "../../components/about-aiboost";
import { FAQSection } from "../../components/faq-section";
import './index.css';

const Home = () => {
  return (
    <div className="bg-black-heavy">
      <HeroSection />
      <EarningSection />
      <ContactUs />
      <SolutionSection />
      <AboutAIB />
      <AboutAIBoost />
      <BusinessSuccess />
      <WorthSharing />
      <FAQSection />
    </div>
  );
};
export { Home };
