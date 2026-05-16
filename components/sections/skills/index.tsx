import { FadeUp } from "@/components/motion/fade-up";
import Label from "../label";
import Card from "./card";
import { Stagger } from "@/components/motion/stagger";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-4 scroll-mt-24">
      <FadeUp>
        <Label primaryText="Skills & Stack" />
      </FadeUp>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <FadeUp className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold tracking-tight max-w-sm">
            Building fast products with modern web technologies
          </h2>
          <p className="max-w-88 text-muted-foreground leading-relaxed">
            I focus on scalable frontend architecture, server-first
            applications, realtime systems, and mainstainable backend
            infrastructure.
          </p>
        </FadeUp>
        <Stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
