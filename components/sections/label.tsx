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
        "text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-nowrap",
        secondaryText && "flex items-center gap-2 sm:gap-4",
      )}
    >
      <div
        className={cn(
          "text-primary",
          !hideDot && "flex items-center gap-2 sm:gap-3 text-primary",
        )}
      >
        {!hideDot && (
          <div className="size-1 sm:size-1.5 rounded-full bg-current ml-1" />
        )}
        <span>{primaryText}</span>
      </div>
      {secondaryText && (
        <>
          <Separator orientation="vertical" />
          <span className="text-muted-foreground">{secondaryText}</span>
        </>
      )}
    </div>
  );
}
