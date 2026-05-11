import Link from "next/link";
import { Navbar } from "./navbar";
import { Actions } from "./actions";
import MobileMenu from "./mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
      <div className="flex items-center justify-between h-20 mx-auto md:max-w-6xl px-6">
        <Link href="#hero" className="text-3xl font-semibold tracking-tight">
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
