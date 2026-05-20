import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SecondaryCta() {
  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className="bg-card/60 hover:border-primary/40 hover:bg-primary/10 h-11 rounded-xl px-7 font-bold hover:-translate-y-0.5 sm:h-12"
    >
      <Link href="#contact">Get In Touch</Link>
    </Button>
  );
}
