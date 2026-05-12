import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 w-full">
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}
