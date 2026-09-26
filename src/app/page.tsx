import React from "react";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { GraphicWorks } from "@/components/GraphicWorks";
import { Hero } from "@/components/Hero";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { ServicesTeaser } from "@/components/ServicesTeaser";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsPreview />
      <About />
      <GraphicWorks />
      <ServicesTeaser />
      <Footer />
    </main>
  );
}
