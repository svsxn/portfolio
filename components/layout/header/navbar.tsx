import Link from "next/link";
import { navItems } from "../links";

export function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex"
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative transition-colors hover:text-foreground focus:outline-none focus-visible:text-foreground"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-200 group-hover:scale-x-100" />
        </Link>
      ))}
    </nav>
  );
}
