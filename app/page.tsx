import { Avatar } from "@/components/hero/avatar";
import { Metadata } from "@/components/hero/left-content/metadata";
import { TechStack } from "@/components/hero/tech-stack/tech-stack";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="mt-24 w-full mx-auto">
      <section id="hero" className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Metadata />
          <h1 className="text-6xl sm:text-[5.2rem] mb-5 font-semibold tracking-tight leading-20">
            Sebastian Magnucki
          </h1>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            I build web apps with Next.js and Supabase, focusing on clean
            architecture, real-time features, and performance.
            <br />
            <br />
            Most of my work involves dashboards and SaaS products designed to
            stay fast, maintainable, and easy to extend.
          </p>
          <div className="flex gap-6 mt-2 mb-14">
            <Button
              variant="secondary"
              className="px-7 py-6 rounded-sm bg-accent hover:bg-accent hover:brightness-110 hover:-translate-y-0.5"
            >
              View Projects <ArrowRightIcon className="ml-3" />
            </Button>
            <Button variant="outline" className="px-7 py-6 rounded-sm">
              Get In Touch
            </Button>
          </div>
          <TechStack />
        </div>
        <Avatar />
      </section>
    </div>
  );
}
