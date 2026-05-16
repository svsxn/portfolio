import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PrimaryCta() {
  return (
    <Link
      href="#projects"
      className="group inline-flex h-12 items-center justify-center rounded-xl bg-primary px-7 text-sm font-bold text-primary-foreground shadow-[0_0_0_1px_--alpha(var(--foreground)/8%),0_18px_40px_--alpha(var(--primary)/18%)] transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      View Projects
      <ArrowRight
        className="ml-2 size-4 transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
