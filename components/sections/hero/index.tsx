import { ArrowRightIcon } from "lucide-react";
// import { Button } from "../../ui/button";
import { TechStack } from "./tech-stack/tech-stack";
import { Avatar } from "./avatar";
import Label from "../label";
import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";

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
        {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2 mb-2 sm:mb-14">
          <Button className="px-7 py-6 rounded-sm hover:brightness-110 hover:-translate-y-0.5">
            View Projects <ArrowRightIcon className="ml-3" />
          </Button>
          <Button variant="outline" className="px-7 py-6 rounded-sm">
            Get In Touch
          </Button>
        </div> */}
        <FadeUp className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#projects"
            className="group inline-flex h-12 items-center justify-center rounded-xl bg-emerald-500 px-7 text-sm font-bold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_40px_rgba(16,185,129,0.18)] transition hover:-translate-y-0.5 hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030504]"
          >
            View Projects
            <ArrowRightIcon
              className="ml-2 size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/3 px-7 text-sm font-bold transition hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030504]"
          >
            Get In Touch
          </Link>
        </FadeUp>
        <TechStack />
      </div>
      <Avatar />
    </section>
  );
}
