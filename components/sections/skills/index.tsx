import Label from "../label";
import Card from "./card";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-4 scroll-mt-24">
      <Label primaryText="Skills & Stack" showDot />
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold tracking-tight max-w-sm">
            Building fast products with modern web technologies
          </h2>
          <p className="max-w-88 text-muted-foreground leading-relaxed">
            I focus on scalable frontend architecture, server-first
            applications, realtime systems, and mainstainable backend
            infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-3 content-center gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
