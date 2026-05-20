import { FadeUp } from "@/components/motion/fade-up";
import Label from "../label";
import Card from "./card";
import { Stagger } from "@/components/motion/stagger";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto flex w-full max-w-6xl scroll-mt-24 flex-col gap-4 px-6"
    >
      <FadeUp>
        <Label primaryText="Skills & Stack" />
      </FadeUp>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <FadeUp className="flex flex-col gap-4">
          <h2 className="max-w-sm text-4xl font-semibold tracking-tight">
            Building fast products with modern web technologies
          </h2>
          <p className="text-muted-foreground max-w-88 leading-relaxed">
            I focus on scalable frontend architecture, server-first
            applications, realtime systems, and mainstainable backend
            infrastructure.
          </p>
        </FadeUp>
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Frontend" />
          <Card title="Backend" />
          <Card title="Database" />
          <Card title="Infrastructure" />
          <Card title="Tools" />
        </Stagger>
      </div>
    </section>
  );
}
