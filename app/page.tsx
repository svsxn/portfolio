import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 w-full">
      <Hero />
      <Projects />
    </div>
  );
}
