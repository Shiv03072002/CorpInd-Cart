import WhyChooseUs from "../../components/about/WhyChooseUs";
import Coreservices from "../../components/about/Coreservices";
import TrustStats from "../../components/about/Truststats";
import MissionVision from "../../components/about/Missionvision";
import Abouts from "../../components/about/Abouts";
import Hero from "../../components/about/Hero";
import HowItWorks from '@/components/home/Howitworks'


export default function About() {
  return (
   <div className=" overflow-hidden">
    
    <Hero />
    <Abouts/>
    <MissionVision />
    <TrustStats />
    <Coreservices/>
     <WhyChooseUs />
      <HowItWorks/>
     
     
   </div>
  );
}
