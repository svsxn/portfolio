import Link from "next/link";
import { navItems } from "../links";

export function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="text-muted-foreground hidden items-center gap-8 text-sm font-medium md:flex"
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group hover:text-foreground focus-visible:text-foreground relative transition-colors focus:outline-none"
        >
          {item.label}
          <span className="bg-foreground absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
        </Link>
      ))}
    </nav>
  );
}
