import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PrimaryCta() {
  return (
    <Button
      asChild
      size="lg"
      className="group h-11 rounded-xl border-none px-7 font-bold shadow-[0_0_0_1px_--alpha(var(--foreground)/8%),0_18px_40px_--alpha(var(--primary)/18%)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_--alpha(var(--foreground)/10%),0_25px_60px_--alpha(var(--primary)/30%)] hover:brightness-110 sm:h-12"
    >
      <Link href="#projects">
        View Projects
        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}
