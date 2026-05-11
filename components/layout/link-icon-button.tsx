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
    <Button variant="outline" size="icon" asChild>
      <Link href={href} target="_blank" rel="noreferrer">
        {children}
      </Link>
    </Button>
  );
}
