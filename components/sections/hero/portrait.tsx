import { FloatingGlow } from "@/components/motion/floating-glow";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Portrait() {
  return (
    <div
      className="relative mx-auto mt-16 w-full max-w-97.5 lg:mr-0 lg:mt-0 lg:max-w-107.5"
      // delay={0.18}
      // scale
    >
      <FloatingGlow className="absolute -inset-12 -z-10 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative aspect-square overflow-hidden rounded-full border border-border bg-card shadow-[0_0_0_12px_--alpha(var(--foreground)/2%),0_40px_120px_--alpha(var(--background)/55%)] transition will-change-transform">
        <Image
          src="/portrait.jpg"
          alt="Portrait of Sebastian Magnucki"
          fill
          priority
          sizes="(min-width: 1024px) 430px, 80vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.025]"
        />
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-border" />
      </div>

      <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-2xl border border-border bg-card/80 px-4 py-3 text-xs text-muted-foreground shadow-2xl backdrop-blur-md sm:flex">
        <span className="size-2 min-w-2 rounded-full bg-primary" />
        Available for selected projects
        <ExternalLink
          className="size-3 min-w-3 text-muted-foreground"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
