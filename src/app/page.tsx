import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import HealthcareServices from "@/components/sections/HealthcareServices";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Clients from "@/components/sections/Clients";
import TeamSection from "@/components/sections/TeamSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <About />
      <HealthcareServices />
      <ServicesGrid />
      <Clients />
      <TeamSection />
      <Testimonials />
      <FAQ />
    </main>
  );
}

