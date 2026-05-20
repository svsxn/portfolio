import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export default function Actions() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      <Button
        asChild
        size="sm"
        className="h-11 rounded-md border-none px-5 font-bold transition-all duration-300 hover:-translate-y-0.5 sm:h-10"
      >
        <Link href={"/"}>
          Get in touch
          <ExternalLinkIcon className="ml-2 size-4" />
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="bg-card/60 hover:border-primary/40 hover:bg-primary/10 h-11 rounded-md px-5 font-bold hover:-translate-y-0.5 sm:h-10"
      >
        <Link href={"/"}>View GitHub</Link>
      </Button>
    </div>
  );
}
