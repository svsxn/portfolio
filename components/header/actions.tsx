import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../theme/mode-toggle";
import { links } from "./links";

function IconButton({
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

export function Actions() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        {links.map((link) => (
          <IconButton key={link.href} href={link.href}>
            {link.svg}
          </IconButton>
        ))}
      </div>
      <Separator orientation="vertical" />
      <ModeToggle />
    </div>
  );
}
