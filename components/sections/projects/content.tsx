import { projects } from "@/data/projects";
import Label from "../label";
import FeaturedProject from "./cards/featured";

export default function Content() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
      <div className="max-w-2xl">
        <Label primaryText="Selected work" />
        <h2 className="mt-6 text-balance text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          Selected Projects
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          A focused selection of web applications built with Next.js, Supabase,
          TypeScript, and scalable product architecture.
        </p>
      </div>
      <div className="mt-12">
        <FeaturedProject project={featuredProject} />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <div key={project.title}>{project.title}</div>
        ))}
      </div>
    </div>
  );
}
