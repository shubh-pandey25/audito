import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import FeatureGrid from "@/components/FeatureGrid";
import Comparison from "@/components/Comparison";
import Security from "@/components/Security";
import Metrics from "@/components/Metrics";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Problem />
        <HowItWorks />
        <FeatureGrid />
        <Comparison />
        <Security />
        <Metrics />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
