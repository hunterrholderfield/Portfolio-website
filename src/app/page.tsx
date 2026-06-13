import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProjectsSection } from "@/components/projects-section";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent" />
      <About />
      <ProjectsSection />
      <Contact />
    </>
  );
}
