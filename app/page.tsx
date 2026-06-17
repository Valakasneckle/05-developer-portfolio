import { ArchitectureShowcase } from "@/components/sections/ArchitectureShowcase";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Services />
      <ArchitectureShowcase />
      <Experience />
      <Testimonials />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
