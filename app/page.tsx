import { Separator } from "@/components/ui/separator";
import { DotIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-48 max-w-6xl w-full mx-auto px-6 min-h-[80vh]">
      <section id="hero">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-xs tracking-widest">
              <div className="flex items-center text-green-400">
                <DotIcon />
                <p>FULL-STACK DEVELOPER</p>
              </div>
              <Separator orientation="vertical" />
              <p>NEXT.JS & SUPABASE</p>
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
          </div>
          <div className="flex justify-end">
            <Image
              width={400}
              height={400}
              alt="Profile picture"
              src="/profile-picture.png"
              loading="eager"
              className="rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
