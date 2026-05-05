import Link from "next/link";
import { ModeToggle } from "./theme/mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 w-full py-8 flex items-center justify-between">
      <Link href="/" className="text-3xl font-semibold">
        S<span className="text-accent">M</span>
      </Link>
      <div className="flex items-center gap-20">
        <nav>
          <ul className="flex gap-12">
            <li>Projects</li>
            <li>About</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
