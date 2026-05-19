import { projects } from "@/data/projects";
import Label from "../label";
import FeaturedProject from "./cards/featured";
import Project from "./cards/other";
import { FadeIn, FadeInItem } from "@/components/motion/fade-in";

export default function Content() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <FadeIn
      stagger
      className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-2xl">
        <FadeInItem>
          <Label primaryText="Selected work" />
        </FadeInItem>
        <FadeInItem
          as="h2"
          className="mt-6 text-balance text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl"
        >
          Selected Projects
        </FadeInItem>
        <FadeInItem
          as="p"
          className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:leading-8"
        >
          A focused selection of web applications built with Next.js, Supabase,
          TypeScript, and scalable product architecture.
        </FadeInItem>
      </div>
      <FadeInItem className="mt-12">
        <FeaturedProject project={featuredProject} />
      </FadeInItem>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </FadeIn>
  );
}
