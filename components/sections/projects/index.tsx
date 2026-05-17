import Label from "../label";
import Background from "./background";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate scroll-mt-24 overflow-hidden px-6 py-24 sm:py-28 lg:py-32"
    >
      <Background />
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <Label primaryText="Selected work" />
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Selected Projects
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            A focused selection of web applications built with Next.js,
            Supabase, TypeScript, and scalable product architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
