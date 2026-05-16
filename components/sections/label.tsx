import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

interface Props {
  primaryText: string;
  secondaryText?: string;
  hideDot?: boolean;
}

export default function Label({ primaryText, secondaryText, hideDot }: Props) {
  return (
    <div
      className={cn(
        // "text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-nowrap",
        // secondaryText && "flex items-center gap-2 sm:gap-4",
        "mb-7 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground",
      )}
    >
      <div className={!hideDot ? "flex items-center gap-2 sm:gap-3" : ""}>
        {!hideDot && (
          <span className="size-2 rounded-full bg-primary shadow-[0_0_18px_--alpha(var(--primary)/90%)]" />
        )}
        <span className="text-primary">{primaryText}</span>
      </div>
      {secondaryText && (
        <>
          <Separator orientation="vertical" className="hidden sm:block" />
          <span className="text-muted-foreground">{secondaryText}</span>
        </>
      )}
    </div>
  );
}
