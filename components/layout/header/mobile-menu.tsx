"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "../links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="border-border bg-background text-muted-foreground hover:bg-secondary hover:text-foreground flex size-9 items-center justify-center rounded-md border transition-colors"
        aria-label="Toggle menu"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>

      <div
        className={cn(
          "bg-background absolute top-full left-0 w-full border-b shadow-2xl transition-all duration-200",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-border/70 text-muted-foreground hover:text-foreground focus-visible:text-foreground border-b py-4 text-sm font-medium transition-colors last:border-b-0 focus:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
