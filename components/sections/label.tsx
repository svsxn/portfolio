import { Separator } from "../ui/separator";

interface Props {
  primaryText: string;
  secondaryText?: string;
  hideDot?: boolean;
}

export default function Label({ primaryText, secondaryText, hideDot }: Props) {
  return (
    <div className="text-muted-foreground mb-6 flex flex-wrap items-center gap-3 text-[0.68rem] font-bold tracking-[0.22em] uppercase sm:text-xs md:mb-7">
      <div className={!hideDot ? "flex items-center gap-2 sm:gap-3" : ""}>
        {!hideDot && (
          <span className="bg-primary size-2 rounded-full shadow-[0_0_18px_--alpha(var(--primary)/90%)]" />
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
