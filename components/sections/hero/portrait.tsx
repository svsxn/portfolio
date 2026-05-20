import { FadeIn } from "@/components/motion/fade-in";
import { FloatingGlow } from "@/components/motion/floating-glow";
import { TiltCard } from "@/components/motion/tilt-card";
import Image from "next/image";

export default function Portrait() {
  return (
    <FadeIn
      className="relative hidden w-full max-w-107.5 lg:ml-auto lg:block"
      delay={0.18}
      scale
    >
      <FloatingGlow className="bg-primary/10 absolute -inset-12 -z-10 rounded-full blur-3xl" />
      <TiltCard className="border-border bg-card relative aspect-square overflow-hidden rounded-full border shadow-[0_0_0_12px_--alpha(var(--foreground)/2%),0_40px_120px_--alpha(var(--background)/55%)] will-change-transform">
        <Image
          src="/portrait.jpg"
          alt="Portrait of Sebastian Magnucki"
          fill
          priority
          sizes="(min-width: 1024px) 430px, 80vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.025]"
        />
        <div className="ring-border pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset" />
      </TiltCard>
      <div className="bg-background/85 text-muted-foreground absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium shadow-xl backdrop-blur-md lg:flex">
        <span className="bg-primary size-2 min-w-2 rounded-full shadow-[0_0_12px_--alpha(var(--primary)/80%)]" />
        <span className="whitespace-nowrap">
          Available for selected projects
        </span>
      </div>
    </FadeIn>
  );
}
