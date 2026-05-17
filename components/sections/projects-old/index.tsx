import Label from "../label";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-4 scroll-mt-24 mx-auto w-full max-w-6xl px-6"
    >
      <Label primaryText="Featured work" />
      <h2 className="text-4xl font-semibold tracking-tight">
        Selected projects I&apos;ve worked on
      </h2>
      <p className="max-w-88 text-muted-foreground leading-relaxed">
        Focused on fast interfaces, clean architecture, and scalable backend
        systems.
      </p>
      <div className="flex flex-col gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
