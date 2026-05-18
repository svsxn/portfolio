import Background from "./background";
import LeftSection from "./left";

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/60 p-6 shadow-2xl backdrop-blur-md lg:p-8">
      <Background />
      <div>
        <LeftSection project={project} />
      </div>
    </article>
  );
}
