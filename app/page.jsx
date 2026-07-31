import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import VisionMission from "@/components/VisionMission";
import NewsEvents from "@/components/NewsEvents";
import Careers from "@/components/Careers";
import CTA from "@/components/CTA";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <VisionMission />
        <Services />
        <Stats />
        <NewsEvents />
        <Careers />
        <CTA />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
