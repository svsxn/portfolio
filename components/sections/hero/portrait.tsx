import { FloatingGlow } from "@/components/motion/floating-glow";
import { TiltCard } from "@/components/motion/tilt-card";
import Image from "next/image";

export default function Portrait() {
  return (
    <div
      className="relative hidden w-full max-w-107.5 lg:ml-auto lg:block"
      // delay={0.18}
      // scale
    >
      <FloatingGlow className="absolute -inset-12 -z-10 rounded-full bg-primary/10 blur-3xl" />
      <TiltCard className="relative aspect-square overflow-hidden rounded-full border border-border bg-card shadow-[0_0_0_12px_--alpha(var(--foreground)/2%),0_40px_120px_--alpha(var(--background)/55%)] will-change-transform">
        <Image
          src="/portrait.jpg"
          alt="Portrait of Sebastian Magnucki"
          fill
          priority
          sizes="(min-width: 1024px) 430px, 80vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.025]"
        />
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-border" />
      </TiltCard>

      <div className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border bg-background/85 px-4 py-2.5 text-xs font-medium text-muted-foreground shadow-xl backdrop-blur-md lg:flex">
        <span className="size-2 min-w-2 rounded-full bg-primary shadow-[0_0_12px_--alpha(var(--primary)/80%)]" />
        <span className="whitespace-nowrap">
          Available for selected projects
        </span>
      </div>
    </div>
  );
}
