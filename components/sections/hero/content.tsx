import Label from "../label";
import PrimaryCta from "./cta/primary-cta";
import SecondaryCta from "./cta/secondary-cta";
import TechStack from "./tech-stack";
import { FadeIn, FadeInItem } from "@/components/motion/fade-in";

export default function Content() {
  return (
    <FadeIn className="max-w-2xl md:mx-auto md:w-full lg:mx-0" stagger>
      <FadeInItem>
        <Label
          primaryText="Full-stack developer"
          secondaryText="Next.js & Supabase"
        />
      </FadeInItem>
      <FadeInItem
        as="h1"
        className="text-balance text-[3.35rem] font-bold leading-[0.9] tracking-[-0.055em] text-foreground sm:text-6xl md:max-w-md md:text-[4rem] lg:max-w-none lg:text-[5.4rem]"
      >
        Sebastian Magnucki
      </FadeInItem>
      <FadeInItem
        as="p"
        className="mt-6 max-w-xl text-base leading-7 text-foreground/80 sm:mt-8 sm:text-lg sm:leading-8"
      >
        I turn product requirements and interface designs into performant web
        applications with clean React architecture, reliable data flows, and
        scalable Supabase backends.
      </FadeInItem>
      <FadeInItem
        as="p"
        className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
      >
        Most of my work involves SaaS platforms, dashboards, and real-time
        product experiences built to stay fast, maintainable, and easy to
        extend.
      </FadeInItem>
      <FadeInItem className="mt-10 flex flex-col gap-3 sm:gap-4 sm:flex-row">
        <PrimaryCta />
        <SecondaryCta />
      </FadeInItem>
      <FadeInItem className="mt-9 sm:mt-14 lg:mt-16">
        <TechStack />
      </FadeInItem>
    </FadeIn>
  );
}
