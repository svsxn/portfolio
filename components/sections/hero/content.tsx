import { FadeUp } from "@/components/motion/fade-up";
import Label from "../label";
import PrimaryCta from "./cta/primary-cta";
import SecondaryCta from "./cta/secondary-cta";
import TechStack from "./tech-stack";

export default function Content() {
  return (
    <div className="max-w-2xl">
      <Label
        primaryText="Full-stack developer"
        secondaryText="Next.js & Supabase"
      />
      <h1 className="text-balance text-6xl font-bold leading-[0.88] tracking-[-0.06em] text-foreground sm:text-7xl lg:text-[5.8rem]">
        Sebastian Magnucki
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-8 text-foreground/80">
        I design and build performant web applications with modern React
        architecture, clean data flows, and scalable Supabase backends.
      </p>
      <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
        Most of my work involves SaaS platforms, dashboards, and real-time
        product experiences built to stay fast, maintainable, and easy to
        extend.
      </p>
      <FadeUp className="mt-9 flex flex-col gap-4 sm:flex-row">
        <PrimaryCta />
        <SecondaryCta />
      </FadeUp>
      <FadeUp className="mt-16">
        <TechStack />
      </FadeUp>
    </div>
  );
}
