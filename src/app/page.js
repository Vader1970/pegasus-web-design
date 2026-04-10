import Hero from '@/components/sections/home/Hero/Hero';
import TrustBar from '@/components/sections/home/TrustBar/TrustBar';
import Problem from '@/components/sections/home/Problem/Problem';
import Services from '@/components/sections/home/Services/Services';
import ServicesAlt from '@/components/sections/home/ServicesAlt/ServicesAlt';
import Process from '@/components/sections/home/Process/Process';
import LogoStrip from '@/components/sections/home/LogoStrip/LogoStrip';
import RecentWork from '@/components/sections/home/RecentWork/RecentWork';
import About from '@/components/sections/home/About/About';
import CTA from '@/components/sections/home/CTA/CTA';
import FAQ from '@/components/sections/home/FAQ/FAQ';
import Testimonials from '@/components/sections/home/Testimonials/Testimonials';
import Contact from '@/components/sections/home/Contact/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Problem />
      <ServicesAlt />
      {/* <Services /> */}
      <Process />
      <LogoStrip />
      <RecentWork />
      <Testimonials />
      <About />
      <CTA />
      <FAQ />
      <Contact />
    </main>
  );
}
