import Image from "next/image";
import HeroSection from '@/components/home/Hero'
import ServicesSection from '@/components/home/Services'
import ServicesDirectory from "@/components/home/Servicesdirectory";
import WhyChooseUs from '@/components/home/Whychooseus'
import HowItWorks from '@/components/home/Howitworks'
import LatestArticles from '@/components/home/Latestarticles'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/common/CTA'
export default function Home() {
  return (
   <div>
     <HeroSection/>
     <ServicesSection/>
     <ServicesDirectory/>
     <WhyChooseUs/>
     <HowItWorks/>
     <LatestArticles/>
     <Testimonials/>
      <CTA/>
   </div>
  );
}
