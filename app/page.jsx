import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
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
        <Logos />
        <About />
        <Services />
        <Stats />
        <Portfolio />
        <Team />
        <Testimonials />
        <CTA />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
