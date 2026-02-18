import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

// Sections below the fold : chargement différé du JS pour réduire le bundle initial (~282 KiB)
const Services = dynamic(
  () =>
    import("@/components/sections/Services").then((mod) => ({ default: mod.Services })),
  { ssr: true }
);

const Experiences = dynamic(
  () =>
    import("@/components/sections/Experiences").then((mod) => ({
      default: mod.Experiences,
    })),
  { ssr: true }
);

const Projects = dynamic(
  () =>
    import("@/components/sections/Projects").then((mod) => ({ default: mod.Projects })),
  { ssr: true }
);

const Expertise = dynamic(
  () =>
    import("@/components/sections/Expertise").then((mod) => ({
      default: mod.Expertise,
    })),
  { ssr: true }
);

export default function Home() {
  return (
    <AnimateOnScroll>
      <Hero />
      <About />
      <Services />
      <Experiences />
      <Projects />
      <Expertise />
    </AnimateOnScroll>
  );
}
