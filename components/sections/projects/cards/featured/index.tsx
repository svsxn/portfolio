import Background from "./background";
import LeftSection from "./left";
import Preview from "./preview";

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-primary/25 bg-card/60 p-6 shadow-2xl backdrop-blur-md lg:p-8">
      <Background />
      <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <LeftSection project={project} />
        <Preview />
      </div>
    </article>
  );
}
