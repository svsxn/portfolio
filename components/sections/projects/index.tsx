import Label from "../label";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-4">
      <Label primaryText="Featured work" />
      <h2 className="text-4xl font-semibold tracking-tight">
        Selected projects I&apos;ve worked on
      </h2>
      <p className="max-w-88 text-muted-foreground leading-relaxed">
        Focused on fast interfaces, clean architecture, and scalable backend
        systems.
      </p>
      <div className="flex flex-col gap-2">
        <div className="bg-card h-60 border rounded-md"></div>
        <div className="bg-card h-60 border rounded-md"></div>
        <div className="bg-card h-60 border rounded-md"></div>
      </div>
    </section>
  );
}
