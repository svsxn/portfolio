import Link from "next/link";
import { Navbar } from "../header/navbar";
import { Actions } from "../header/actions";

export default function Footer() {
  return (
    <footer className="h-80 bg-card mt-32 border-t">
      <div className="flex h-full items-end justify-between px-6 py-8 mx-auto md:max-w-6xl">
        <Link href="#hero" className="text-7xl font-semibold tracking-tight">
          <span>S</span>
          <span className="text-primary">M</span>
        </Link>
        <div className="flex flex-col items-end gap-4">
          <Navbar />
          <Actions />
        </div>
      </div>
    </footer>
  );
}
