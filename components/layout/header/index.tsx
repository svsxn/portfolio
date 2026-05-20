import Link from "next/link";
import { Navbar } from "./navbar";
import { Actions } from "./actions";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="relative mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="#hero"
          aria-label="Go to hero section"
          className="focus-visible:ring-ring focus-visible:ring-offset-background transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          <Image src="/logo.svg" alt="Logo" width={62} height={34} priority />
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
