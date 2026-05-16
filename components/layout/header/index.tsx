import Link from "next/link";
import { Navbar } from "./navbar";
import { Actions } from "./actions";
import MobileMenu from "./mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="#hero"
          aria-label="Go to hero section"
          className="text-2xl font-bold tracking-tight transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span>S</span>
          <span className="text-primary">M</span>
        </Link>
        <div className="flex items-center gap-12">
          <Navbar />
          <Actions />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
