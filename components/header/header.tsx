import Link from "next/link";
import { Navbar } from "./navbar";
import { Actions } from "./actions";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between h-20">
        <Link href="/" className="text-3xl font-semibold tracking-tight">
          <span className="text-foreground">S</span>
          <span className="text-accent">M</span>
        </Link>
        <div className="flex items-center gap-18">
          <Navbar />
          <Actions />
        </div>
      </div>
    </header>
  );
}
