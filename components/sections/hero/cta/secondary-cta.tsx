import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SecondaryCta() {
  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className="h-11 sm:h-12 rounded-xl px-7 font-bold bg-card/60 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10"
    >
      <Link href="#contact">Get In Touch</Link>
    </Button>
  );
}
