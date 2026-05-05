import { TechStack } from "@/components/hero/tech-stack/tech-stack";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-48 max-w-6xl w-full mx-auto px-6 min-h-[80vh]">
      <section id="hero">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-xs tracking-widest">
              <div className="flex items-center gap-3 text-green-400">
                <div className="size-1.5 rounded-full bg-current ml-1" />
                <p>FULL-STACK DEVELOPER</p>
              </div>
              <Separator orientation="vertical" />
              <p className="text-muted-foreground">NEXT.JS & SUPABASE</p>
            </div>
            <h1 className="text-6xl sm:text-[5.1rem] mb-4 font-semibold tracking-tight leading-20">
              Sebastian Magnucki
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed tracking-wide">
              I build web applications end-to-end, from clean
              <br />
              interfaces to scalable backend systems.
              <br />
              I focus on performance, real-time features,
              <br />
              and simple, mainstainable arichitecture.
            </p>
            <div className="flex gap-6 mt-2 mb-8">
              <Button variant="secondary" className="px-7 py-6 rounded-sm">
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
              className="rounded-full size-105 border-2 border-zinc-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
