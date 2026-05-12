import Label from "../label";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-4 scroll-mt-24">
      <Label primaryText="Skills & Stack" showDot />
      <h2 className="text-4xl font-semibold tracking-tight max-w-sm">
        Building fast products with modern web technologies
      </h2>
      <p className="max-w-88 text-muted-foreground leading-relaxed">
        I focus on scalable frontend architecture, server-first applications,
        realtime systems, and mainstainable backend infrastructure.
      </p>
    </section>
  );
}
