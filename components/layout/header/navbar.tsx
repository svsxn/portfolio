import Link from "next/link";
import { links } from "../links";

export function Navbar() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.label}
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-200 group-hover:scale-x-100" />
        </Link>
      ))}
    </nav>
  );
}
