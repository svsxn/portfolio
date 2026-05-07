import { TechStack } from "@/components/hero/tech-stack/tech-stack";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-24 w-full mx-auto">
      <section id="hero">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest">
              <div className="flex items-center gap-3 text-accent">
                <div className="size-1.5 rounded-full bg-current ml-1" />
                <p>FULL-STACK DEVELOPER</p>
              </div>
              <Separator orientation="vertical" />
              <p className="text-muted-foreground">NEXT.JS & SUPABASE</p>
            </div>
            <h1 className="text-6xl sm:text-[5.2rem] mb-4 font-semibold tracking-tight leading-20">
              Sebastian Magnucki
            </h1>
            <p className="text-[18px] text-muted-foreground leading-relaxed tracking-wide">
              I build fast web apps with Next.js and Supabase.
              <br />
              5 years of experience making things work without
              <br />
              making them complicated. From scratch to launch,
              <br />I keep the code clean and the features fast.
            </p>
            <div className="flex gap-6 mt-2 mb-16">
              <Button
                variant="secondary"
                className="px-7 py-6 rounded-sm bg-accent hover:bg-accent/80 hover:scale-105"
              >
                View Projects <ArrowRightIcon className="ml-3" />
              </Button>
              <Button variant="outline" className="px-7 py-6 rounded-sm">
                Get In Touch
              </Button>
            </div>
            <TechStack />
          </div>
          <div className="flex justify-end min-w-105">
            <Image
              width={420}
              height={420}
              alt="Avatar"
              src="/avatar.png"
              loading="eager"
              className="rounded-full size-105 border-2 hover:shadow-[0_0_20px_var(--accent)] transition"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
