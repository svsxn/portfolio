import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  liveUrl?: string;
  githubUrl?: string;
  classname?: string;
};

export default function Actions({ liveUrl, githubUrl, classname }: Props) {
  return (
    <div className={cn("flex flex-wrap gap-3", classname)}>
      <Button
        disabled={!liveUrl}
        asChild={!!liveUrl}
        size="sm"
        className="h-11 sm:h-10 rounded-md px-5 font-bold shadow-[0_0_0_1px_--alpha(var(--foreground)/8%),0_18px_40px_--alpha(var(--primary)/18%)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_0_1px_--alpha(var(--foreground)/10%),0_25px_60px_--alpha(var(--primary)/30%)] border-none"
      >
        {liveUrl ? (
          <Link href={liveUrl}>
            Live Demo
            <ExternalLinkIcon className="ml-2 size-4" />
          </Link>
        ) : (
          <>
            Live Demo
            <ExternalLinkIcon className="ml-2 size-4" />
          </>
        )}
      </Button>
      <Button
        disabled={!githubUrl}
        asChild={!!githubUrl}
        variant="outline"
        size="sm"
        className="h-11 sm:h-10 rounded-md px-5 font-bold bg-card/60 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10"
      >
        {githubUrl ? (
          <Link href={githubUrl}>View on GitHub</Link>
        ) : (
          <>View on GitHub</>
        )}
      </Button>
    </div>
  );
}
