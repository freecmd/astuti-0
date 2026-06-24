import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Education } from "@/components/site/Education";
import { Competencies } from "@/components/site/Competencies";
import { Achievements } from "@/components/site/Achievements";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astuti Gupta — Compliance Executive & Business Consultant" },
      { name: "description", content: "Astuti Gupta — Compliance Executive, Healthcare Professional and Business Consultant specializing in regulatory compliance, risk assessment, fraud analysis, and AI-driven consulting." },
      { property: "og:title", content: "Astuti Gupta — Compliance Executive & Business Consultant" },
      { property: "og:description", content: "Executive portfolio of Astuti Gupta — compliance, healthcare operations, risk management and business consulting." },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Competencies />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
