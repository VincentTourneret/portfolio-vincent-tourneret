import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Experiences } from "@/components/sections/Experiences";
import { Projects } from "@/components/sections/Projects";
import { Expertise } from "@/components/sections/Expertise";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

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
