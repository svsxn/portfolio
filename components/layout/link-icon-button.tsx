import Link from "next/link";
import { Button } from "../ui/button";

export function LinkIconButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="text-muted-foreground hover:bg-primary/10 hover:text-foreground size-9 rounded-xl"
    >
      <Link href={href} target="_blank" rel="noreferrer">
        {children}
      </Link>
    </Button>
  );
}
