import Link from "next/link";
import { links } from "../links";
import { LinkIconButton } from "../link-icon-button";
import { externalLinks } from "../external-links";

export default function Footer() {
  return (
    <footer className="h-80 bg-card mt-32 border-t">
      <div className="flex h-full items-end justify-between px-6 py-8 mx-auto md:max-w-6xl">
        <Link href="#hero" className="text-7xl font-semibold tracking-tight">
          <span>S</span>
          <span className="text-primary">M</span>
        </Link>
        <div className="flex flex-col items-end gap-4">
          <div className="flex gap-2">
            {externalLinks.map((link) => (
              <LinkIconButton key={link.href} href={link.href}>
                {link.svg}
              </LinkIconButton>
            ))}
          </div>
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
