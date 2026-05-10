import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 mt-12 md:mt-24 w-full">
      <Hero />
      <Projects />
    </div>
  );
}
