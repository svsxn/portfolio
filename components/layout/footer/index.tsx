import Link from "next/link";
import { navItems } from "../links";
import { LinkIconButton } from "../link-icon-button";
import { externalLinks } from "../external-links";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-80 bg-card mt-32 border-t">
      <div className="flex h-full items-end justify-between px-6 py-8 mx-auto md:max-w-6xl">
        <Link
          href="#hero"
          aria-label="Go to hero section"
          className="transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Image src="/logo.svg" alt="Logo" width={84} height={46} priority />
        </Link>
        <div className="flex flex-col items-end gap-4">
          <div className="flex gap-2">
            {externalLinks.map((link) => (
              <LinkIconButton key={link.href} href={link.href}>
                {link.svg}
              </LinkIconButton>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-end gap-4 sm:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
