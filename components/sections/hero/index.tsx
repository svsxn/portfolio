import { TechStack } from "./tech-stack/tech-stack";
import { Avatar } from "./avatar";
import Label from "../label";
import { FadeUp } from "@/components/motion/fade-up";
import PrimaryCta from "./cta/primary-cta";
import SecondaryCta from "./cta/secondary-cta";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 pt-12 md:pt-24 scroll-mt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_10%,rgba(22,163,74,0.08),transparent_32%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.055),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] bg-size-[80px_80px]" />
      <div className="order-2 md:order-1 flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Label
          primaryText="Full-stack developer"
          secondaryText="Next.js & Supabase"
        />
        <h1 className="max-w-md text-6xl sm:text-7xl md:text-[5.2rem] mb-2 md:mb-5 font-semibold tracking-tight sm:leading-[1.1] md:leading-[0.88]">
          Sebastian Magnucki
        </h1>
        <div className="flex flex-col gap-2 md:gap-6 max-w-md leading-relaxed text-muted-foreground">
          <p>
            I build web apps with Next.js and Supabase, focusing on clean
            architecture, real-time features, and performance.
          </p>
          <p>
            Most of my work involves dashboards and SaaS products designed to
            stay fast, maintainable, and easy to extend.
          </p>
        </div>
        <FadeUp className="mt-9 flex flex-col gap-4 sm:flex-row">
          <PrimaryCta />
          <SecondaryCta />
        </FadeUp>
        <TechStack />
      </div>
      <Avatar />
    </section>
  );
}
