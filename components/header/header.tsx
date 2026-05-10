import Link from "next/link";
import { Navbar } from "./navbar";
import { Actions } from "./actions";
import MobileMenu from "./mobile-menu";

export function Header() {
  return (
    // <header className="sticky top-0 z-50 bg-background/80 backdrop-blur px-6 sm:px-12 md:px-24 lg:px-48 xl:px-72 2xl:px-96">
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur px-6 mx-auto md:max-w-6xl">
      <div className="flex items-center justify-between h-20">
        <Link href="/" className="text-3xl font-semibold tracking-tight">
          <span className="text-foreground">S</span>
          <span className="text-accent">M</span>
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
